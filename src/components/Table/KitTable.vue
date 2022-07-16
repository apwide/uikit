<template>
    <div class="kit-table-wrapper">
        <table ref="table">
            <thead :sticky-header="stickyHeader">
                <tr class="kit-table-header-row">
                    <TableHeaderCell v-if="dragRows" :column="actualColumns[0]" />
                    <TableHeaderCell
                        v-for="column in columns"
                        :key="column.id"
                        :column="column"
                        :sorted="sortedBy === column.id"
                        :sorted-desc="sortedDesc"
                        :sticky-header="stickyHeader"
                        @sorted="onSorted(column)" />
                </tr>
            </thead>
            <TransitionGroup tag="tbody" type="transition">
                <TableRow
                    v-for="row in data"
                    :key="row.id"
                    :columns="actualColumns"
                    :row="row"
                    @click="onRowClick(row, $event)">
                    <template #kitDragHandle>
                        <span class="kit-table__grab-handle">
                            <KitIcon type="grip-vertical" />
                        </span>
                    </template>
                    <template v-for="column in columns" #[column.id]="props">
                        <slot :name="column.id" v-bind="props" />
                    </template>
                </TableRow>
            </TransitionGroup>
            <tfoot v-show="infiniteScroll && !showLoadMore">
                <tr>
                    <td ref="infinite-scroll-loader" :colspan="columns.length" class="kit-infinite-scroll-loader">
                        <Spinner size="small" />
                    </td>
                </tr>
            </tfoot>
            <tfoot v-if="showLoadMore && !infiniteScroll">
                <tr>
                    <td :colspan="columns.length">
                        <KitButton appearance="subtle" style="width: 100%" @click="$emit('load-more')">
                            Load more
                        </KitButton>
                    </td>
                </tr>
            </tfoot>
        </table>
        <div :busy="busy" class="kit-busy-glass">
            <Spinner />
        </div>
    </div>
</template>

<script lang="ts">
    import TableHeaderCell from './TableHeaderCell.vue';
    import TableRow from './TableRow.vue';
    import Spinner from '../Spinner/Spinner.vue';
    import KitIcon from '../Icon/KitIcon.vue';
    import Vue, { PropType } from 'vue';

    const draggableUnitSelector = 'tbody tr';

    export type Column = {
        id: string;
        name: string;
        width?: number;
    };

    export type Row = {
        id: string | number;
        [key: string]: any;
    };

    export default Vue.extend({
        components: {
            KitIcon,
            TableHeaderCell,
            TableRow,
            Spinner
        },
        props: {
            columns: {
                type: Array as PropType<Column[]>,
                required: true
            },
            data: {
                type: Array as PropType<Row[]>,
                default: () => []
            },
            stickyHeader: {
                type: Boolean,
                default: false
            },
            defaultColumnMinWidth: {
                type: [String, Number],
                default: 150
            },
            infiniteScroll: {
                type: Boolean,
                default: false
            },
            busy: {
                type: Boolean,
                default: false
            },
            sortedBy: {
                type: String,
                default: undefined
            },
            sortedDesc: {
                type: Boolean,
                default: false
            },
            dragRows: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                observer: undefined as IntersectionObserver | undefined,
                tableWidth: 0,
                activeRowId: undefined,
                draggedElement: null as Element | null,
                lastDragYposition: undefined as number | undefined,
                positionIndex: {} as Record<string, Row>
            };
        },
        computed: {
            ghostElement(): Element {
                const div = document.createElement('div');
                div.innerHTML = '&nbsp;';
                div.className = 'kit-drag-dropzone__border';
                const td = document.createElement('td');
                td.colSpan = this.actualColumns.length;
                td.appendChild(div);
                const tr = document.createElement('tr');
                tr.appendChild(td);
                tr.className = 'kit-drag-dropzone';
                return tr;
            },
            actualColumns(): Column[] {
                if (this.dragRows) {
                    return [
                        {
                            id: 'kitDragHandle',
                            name: '',
                            width: 30
                        },
                        ...this.columns
                    ];
                }
                return this.columns;
            }
        },
        watch: {
            data() {
                this.setupDragRows();
            }
        },
        mounted() {
            this.createObserver();
            this.setupDragRows();
        },
        methods: {
            onRowClick(row: Row, event: MouseEvent) {
                this.$emit('row-click', {
                    row,
                    event
                });
            },
            createObserver() {
                if (this.observer) {
                    this.observer.unobserve(this.$refs['infinite-scroll-loader'] as Element);
                }
                this.observer = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        this.tableBottomReached();
                    }
                });
                this.observer.observe(this.$refs['infinite-scroll-loader'] as Element);
            },
            tableBottomReached() {
                this.$emit('table-bottom-reached', () => {
                    this.createObserver();
                });
            },
            onSorted(column: Column) {
                this.$emit('sorted', {
                    id: column.id,
                    desc: this.sortedBy === column.id ? !this.sortedDesc : false
                });
            },
            // Drag specific
            async setupDragRows() {
                if (this.dragRows) {
                    await this.$nextTick();
                    const draggableElements = this.$el.querySelectorAll(draggableUnitSelector);
                    if (draggableElements) {
                        const now = Date.now();
                        let order = 0;
                        Array.from(draggableElements).forEach((element: Element) => {
                            element.setAttribute('draggable', 'true');
                            element.id = `o-${now}-${order}`;
                            order += 1;
                        });

                        this.positionIndex = this.data.reduce((acc, row, index) => {
                            acc[draggableElements[index].id] = row;
                            return acc;
                        }, {} as Record<string, Row>);
                    }

                    (this.$el as Node).addEventListener('dragstart', this.onDragStart);
                }
            },
            findDraggableParent(startNode: Element) {
                let dragged = null;
                let candidate = startNode;

                while (!dragged && this.$el.contains(candidate) && candidate.parentNode) {
                    const filteredSiblings = candidate.parentNode.querySelectorAll(draggableUnitSelector);
                    if (filteredSiblings && Array.from(filteredSiblings).includes(candidate as Element)) {
                        dragged = candidate;
                    } else {
                        candidate = candidate.parentNode as Element;
                    }
                }
                return dragged;
            },
            async onDragStart(event: Event) {
                this.draggedElement = this.findDraggableParent(event.target as Element);

                if (!this.draggedElement) {
                    return;
                }

                (this.draggedElement as HTMLElement).style.opacity = '0.2';
                this.lastDragYposition = (event as DragEvent).clientY;

                this.$el.addEventListener('dragover', this.onDragOver);
                this.$el.addEventListener('dragend', this.onDragEnd);
            },
            onDragOver(event: Event) {
                event.preventDefault();

                const target = this.findDraggableParent(event.target as Element);
                const parent = target?.parentElement;
                (event as DragEvent).dataTransfer!.dropEffect = 'move';

                if (!parent || !target) {
                    return;
                }

                if (target !== this.draggedElement) {
                    const deltaY = this.lastDragYposition! - (event as DragEvent).clientY;
                    // Sorting
                    if (target === parent.firstChild) {
                        parent.insertBefore(this.ghostElement, target);
                    } else if (target === parent.lastChild) {
                        parent.appendChild(this.ghostElement);
                    } else {
                        parent.insertBefore(this.ghostElement, deltaY > 0 ? target : target.nextSibling);
                    }
                } else if (this.ghostElement.parentNode) {
                    parent.removeChild(this.ghostElement);
                }
                this.lastDragYposition = (event as DragEvent).clientY;
            },
            onDragEnd(event: Event) {
                event.preventDefault();
                this.$el.removeEventListener('dragover', this.onDragOver, false);
                this.$el.removeEventListener('dragend', this.onDragEnd, false);

                if (this.ghostElement.parentNode) {
                    // a change happened
                    this.ghostElement.replaceWith(this.draggedElement as Node);

                    const rows = Array.from(this.$el.querySelectorAll(draggableUnitSelector));
                    const newDataOrder = rows.map((row) => this.positionIndex[row.id]);
                    this.$emit('rows-reordered', newDataOrder);
                }
                (this.draggedElement as HTMLElement)!.style.opacity = '1';
            }
        }
    });
</script>

<style scoped>
    .kit-table-wrapper {
        /* to really hide the overflow */
        position: relative;
        width: 100%;
        max-height: 100%;
        overflow: auto;
    }

    table {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border-collapse: collapse;
    }

    table thead[sticky-header] tr {
        inset-block-start: 0;
        position: sticky;
        background-color: white;
        /* required to stay above the eventual position: xxx in the content */
        z-index: 1;
    }

    table tbody {
        border: none;
    }

    thead {
        background-color: white;
        border: none;
    }

    table .kit-infinite-scroll-loader {
        box-sizing: border-box;
        height: auto;
        display: flex;
        justify-content: center;
        padding: 5px;
    }

    .kit-table-wrapper .kit-busy-glass {
        position: absolute;
        display: none;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.5);
        z-index: 200;
    }

    .kit-table-wrapper .kit-busy-glass[busy] {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    :deep(.kit-drag-dropzone__border) {
        margin: 4px 1px;
        min-height: 40px;
        border: 2px #b3bac5 dashed;
    }

    .kit-table__grab-handle {
        color: #a5adba;
        margin: -10px 0;
        padding: 10px 10px 10px 5px;
        font-size: 0.68em;
        cursor: grab;
    }
</style>
