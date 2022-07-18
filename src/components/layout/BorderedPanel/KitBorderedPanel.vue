<template>
    <aside class="kit-bordered-panel">
        <div v-if="!noHeader" class="kit-bordered-panel__header">
            <div class="kit-bordered-panel__header-title kit-col kit-center-horizontally">
                <slot name="title">
                    <span :title="headerFloatingTitle" class="kit-bordered-panel__title">{{ title }}</span>
                </slot>
            </div>
            <div v-if="$scopedSlots.actions" class="kit-bordered-panel__header-actions">
                <slot name="actions" />
            </div>
        </div>
        <div class="kit-bordered-panel__body">
            <slot />
        </div>
    </aside>
</template>

<script>
    import Vue from 'vue';

    export default Vue.extend({
        props: {
            title: {
                type: String,
                default: undefined
            },
            headerFloatingTitle: {
                type: String,
                default: undefined
            },
            noHeader: {
                type: Boolean,
                default: false
            }
        }
    });
</script>

<style scoped>
    .kit-bordered-panel {
        border: 1px solid #dfe1e6;
        border-radius: 4px;
        margin-bottom: 8px;
    }

    .kit-bordered-panel__header {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: stretch;
        color: #172b4d;
        padding: 6px 12px;
        overflow: hidden;
        border-bottom: 1px solid #dfe1e6;
    }

    .kit-bordered-panel__header-title {
        flex: 1;
        display: flex;
        align-self: center;
    }

    .kit-bordered-panel__title {
        font-size: 14px;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 600;
        padding: 5px 0;
    }

    .kit-bordered-panel__body {
        padding: 12px 12px 8px 12px;
    }

    .kit-bordered-panel__header-actions {
        /*margin-top: -5px;*/
        /*margin-bottom: -5px;*/
    }

    .kit-bordered-panel__body :deep(.kit-bordered-panel__row:last-child) {
        margin-bottom: 6px;
    }
</style>
