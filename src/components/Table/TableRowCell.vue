<template>
    <td ref="cellElement" class="kit-table-row-cell">
        <slot :value="value" :is-active-row="isActiveRow" :cell-element="$refs.cellElement">
            <span class="kit-table-row-cell__value">
                {{ value }}
            </span>
        </slot>
    </td>
</template>

<script>
    export default {
        props: {
            value: {
                type: [String, Number, Boolean, Object, Array],
                default: undefined
            },
            isActiveRow: {
                type: Boolean,
                default: false
            }
        }
    };
</script>

<style scoped>
    td {
        box-sizing: border-box;
        min-height: 40px;
        color: rgb(23, 43, 77);
        line-height: 24px;
        padding: 7px 16px;
    }

    .kit-table-row-cell__value {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
