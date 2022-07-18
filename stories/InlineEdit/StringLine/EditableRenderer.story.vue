<template>
    <div>
        <h5>Editable:</h5>
        <p>
            <StringLineEditableRenderer data-cy="editable" :value="value" @save-requested="onSave"/>
        </p>
        <h5>Editable - callback with error:</h5>
        <p>
            <StringLineEditableRenderer data-cy="editable-error" :value="value" @save-requested="onSaveError"/>
        </p>
        <h5>Limited width:</h5>
        <p class="limited-width">
            <StringLineEditableRenderer :value="value" @save-requested="onSave"/>
        </p>
        <h5>Non-editable:</h5>
        <p>
            <StringLineEditableRenderer data-cy="non-editable" :value="value" :editable="false"/>
        </p>
        <h5>Without confirmation:</h5>
        <p>
            <StringLineEditableRenderer
                :value="value" :confirm="false" align="end"
                :icon="false"
                type="number"
                @save-requested="onSave"/>
        </p>
        <h5>Custom renderer</h5>
        <p>Useful when value is to be presented differently than just text</p>
        <p>
            <StringLineEditableRenderer :value="value" @save-requested="onSave">
                <Lozenge>{{ value }}</Lozenge>
            </StringLineEditableRenderer>
        </p>
        <h5>Custom renderer (when none-editable)</h5>
        <p>
            <StringLineEditableRenderer :editable="false" @save-requested="onSave">
                <Lozenge>{{ value }}</Lozenge>
            </StringLineEditableRenderer>
        </p>
        <h5>In a bigger parent element</h5>
        <div style="font-weight: 500; font-size: 20px">
            <StringLineEditableRenderer :value="value" @save-requested="onSave">
                {{ value }}
            </StringLineEditableRenderer>
        </div>
    </div>
</template>

<script>
    import StringLineEditableRenderer from '@/components/field-renderers/StringLineEditableRenderer.vue';
    import faker from 'faker';
    import Lozenge from '../../../src/components/Lozenge/Lozenge';

    export default {
        components: { Lozenge, StringLineEditableRenderer },
        data() {
            faker.seed(1);
            return {
                value: faker.lorem.sentence()
            };
        },
        methods: {
            onSave(value, callback) {
                this.value = value;
                callback();
            },

            onSaveError(value, callback) {
                callback(new Error('Something went wrong'));
            }
        }
    };
</script>

<style scoped>
    .limited-width {
        width: 300px;
    }
</style>
