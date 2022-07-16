<template>
    <th :sortable="column.sortable" :style="style" class="kit-table-header-cell" @click="onClick">
        <span class="kit-table-header-cell__label-wrapper">
            <span>
                {{ column.name }}
            </span>
            <template v-if="column.sortable">
                <ChevronDownIcon v-if="sorted && sortedDesc" size="small" />
                <ChevronUpIcon v-if="sorted && !sortedDesc" size="small" />
            </template>
        </span>
    </th>
</template>

<script>
    import ChevronDownIcon from '../Icon/ChevronDownIcon';
    import ChevronUpIcon from '../Icon/ChevronUpIcon';

    export default {
        components: {
            ChevronDownIcon,
            ChevronUpIcon
        },
        props: {
            column: {
                type: Object,
                required: true
            },
            stickyHeader: {
                type: Boolean,
                default: false
            },
            stickyLeft: {
                type: Boolean,
                default: false
            },
            stickyRight: {
                type: Boolean,
                default: false
            },
            sorted: {
                type: Boolean,
                default: false
            },
            sortedDesc: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            style() {
                return { width: this.column.width ? `${this.column.width}px` : 'auto' };
            }
        },
        methods: {
            onClick() {
                if (this.column.sortable) {
                    this.$emit('sorted');
                }
            }
        }
    };
</script>

<style scoped>
    th {
        background-color: white;
        padding: 0;
    }

    .kit-table-header-cell__label-wrapper {
        box-sizing: border-box;
        min-height: 40px;
        font-weight: bold;
        font-size: 12px;
        line-height: 1.67;
        letter-spacing: -0.1px;
        color: rgb(94, 108, 132);
        display: flex;
        border-bottom: 2px solid #dfe1e6;
        padding: 9px 16px 7px;
    }

    th[sortable]:hover {
        background-color: rgb(244, 245, 247);
        cursor: pointer;
    }

    .kit-table-header-cell__label-wrapper {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
