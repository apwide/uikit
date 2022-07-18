<template>
    <InlineEdit
        v-if="editable"
        :value="value"
        :confirm="confirm"
        :icon="icon"
        :align="align"
        :pattern="pattern"
        :type="type"
        :placement="placement"
        :force-is-editing="forceIsEditing"
        @start-editing="$emit('start-editing')"
        @stop-editing="$emit('stop-editing')"
        @save-requested="onSaveRequested">
        <slot>
            <StringLineRenderer :value="value" />
        </slot>
    </InlineEdit>
    <div v-else>
        <slot>
            <StringLineRenderer :value="value" />
        </slot>
    </div>
</template>

<script>
    import StringLineRenderer from './StringLineRenderer.vue';
    import InlineEdit from '../Form/InlineEdit.vue';

    export default {
        name: 'StringLineEditableRenderer',
        components: { StringLineRenderer, InlineEdit },
        props: {
            value: {
                type: String,
                default: undefined
            },
            editable: {
                type: Boolean,
                default: true
            },
            placement: {
                type: String,
                default: 'right'
            },
            confirm: {
                type: Boolean,
                default: true
            },
            icon: {
                type: Boolean,
                default: true
            },
            align: {
                type: String,
                default: undefined
            },
            pattern: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            },
            forceIsEditing: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            onSaveRequested(...args) {
                this.$emit('save-requested', ...args);
            }
        }
    };
</script>
