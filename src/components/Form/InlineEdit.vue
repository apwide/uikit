<template>
    <div ref="container" :editing="isEditing" class="kit-inline-edit__wrapper">
        <div
            ref="text-field" :compact="compact" :is-invalid="!!error"
            class="kit-inline-edit">
            <div
                v-if="isEditing" style="display: flex"
                :class="{ 'kit-inline-edit--has-general-error': isGeneralError}">
                <slot
                    :blur="onBlur"
                    :cancel="cancelInlineEdit"
                    :confirm="confirmEditedValue"
                    :content-height="contentHeight"
                    :content-width="contentWidth"
                    :focus="onFocus"
                    :input="onInput"
                    :is-focused="isFocused"
                    :is-invalid="!!error"
                    :is-loading="isLoading"
                    :value="editingValue"
                    name="editor">
                    <TextField
                        :compact="compact" :is-disabled="isLoading"
                        :is-focused="isFocused"
                        :is-invalid="!!error"
                        :is-loading="isLoading" :style="{ minWidth: `${contentWidth}px` }"
                        @click.stop
                        @hook:beforeMount="beforeTextFieldMount">
                        <input
                            ref="input" v-model="editingValue"
                            :align="align" :disabled="isLoading" :maxlength="maxlength"
                            :step="step" :type="type"
                            class="input"
                            @blur="onBlur"
                            @focus="onFocus"
                            @keyup="onKeyUp"
                            @keydown.meta.enter="onKeyUp"
                            @keydown.exact="validate">
                    </TextField>
                </slot>
                <div v-if="isGeneralError" class="kit-inline-edit__general-error">
                    <KitIconButton
                        ref="general-error-trigger"
                        title="Click to see the error"
                        @click="showGeneralError = !showGeneralError">
                        <KitIcon
                            class="kit-inline-edit__general-error-icon"
                            type="exclamation-triangle"/>
                    </KitIconButton>
                </div>
            </div>
            <InlineEditViewContent
                v-else ref="value" :align="align"
                :compact="compact"
                :icon="icon" @edit-requested="onEditRequested">
                <slot/>
            </InlineEditViewContent>
        </div>
        <Popper
            v-if="$refs['text-field'] && isEditing && !isLoading && confirm" ref="buttons"
            :offset="offset"
            :target-element="$refs['text-field']">
            <InlineEditButtons
                @blur="onBlur" @cancel="cancelInlineEdit"
                @confirm="confirmEditedValue"/>
        </Popper>
        <InlineErrorMessage
            v-if="isValidationError" :error="error" :placement="placement"
            :target-element="$refs['text-field']"/>
        <Popper
            v-if="isGeneralError && $refs['general-error-trigger'] && showGeneralError"
            :target-element="$refs['general-error-trigger'].$el"
            appearance="top">
            <div class="kit-inline-edit__general-error-dialog">
                <SectionMessage appearance="error">
                    {{ error.generalError }}
                </SectionMessage>
                <KitIconButton
                    spacing="compact" class="kit-inline-edit__general-error-close" title="Close"
                    @click="showGeneralError = false">
                    <KitIcon type="times" />
                </KitIconButton>
            </div>
        </Popper>
    </div>
</template>

<script>
    import TextField from './TextField.vue';
    import InlineEditButtons from './InlineEditButtons.vue';
    import InlineEditViewContent from './InlineEditViewContent.vue';
    import InlineErrorMessage from './InlineErrorMessage.vue';
    import Popper from '../Popper/Popper.vue';
    import KitIcon from '../Icon/KitIcon.vue';
    import KitIconButton from '../Button/KitIconButton.vue';
    import SectionMessage from '../SectionMessage/SectionMessage.vue';

    const ENTER = 13;
    const ESC = 27;
    const BACKSPACE = 8;
    const TAB = 9;
    const Status = { VALIDATION_ERROR: 422 };

    export default {
        name: 'InlineEdit',
        components: {
            SectionMessage,
            KitIconButton,
            KitIcon,
            TextField,
            InlineEditButtons,
            InlineEditViewContent,
            InlineErrorMessage,
            Popper
        },
        props: {
            value: {
                type: [Number, String, Boolean, Array, Object],
                default: undefined
            },
            type: {
                type: String,
                default: 'text'
            },
            step: {
                type: String,
                default: 'any'
            },
            maxlength: {
                type: Number,
                default: undefined
            },
            compact: {
                type: Boolean,
                default: false
            },
            offset: {
                type: Array,
                default: () => [0, 5]
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
            placement: {
                type: String,
                default: 'right'
            },
            forceIsEditing: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                showGeneralError: false,
                isFocused: false,
                isEditing: false,
                isLoading: false,
                editingValue: this.value,
                error: undefined,
                isDirty: false,
                contentWidth: 0,
                contentHeight: 0
            };
        },
        computed: {
            isValidationError() {
                if (!this.error) {
                    return false;
                }
                if (this.error.status) {
                    return this.error.status === Status.VALIDATION_ERROR;
                }
                return !this.error.generalError;
            },
            isGeneralError() {
                return this.error && this.error.generalError;
            }
        },
        watch: {
            isEditing(isEditing) {
                if (isEditing) {
                    this.$emit('start-editing');
                } else {
                    this.$refs['text-field'].style['min-width'] = 'auto';
                    this.error = undefined;
                    this.$emit('stop-editing');
                }
            },
            editingValue() {
                this.isDirty = true;
                this.$nextTick(() => {
                    if (this.$refs.buttons) {
                        this.$refs.buttons.update();
                    }
                });
            },
            value() {
                this.editingValue = this.value;
            }
        },
        async mounted() {
            // We need the "normal" rendering before forcing the edit mode.
            if (this.forceIsEditing) {
                await this.$nextTick();
                this.isEditing = this.forceIsEditing;
                // as we might pass data, we must set is as dirty to make sure it will propose to save
                this.isDirty = true;
                await this.$nextTick();
                const { input } = this.$refs;
                if (input && typeof input.focus === 'function') {
                    input.focus();
                }
            }
        },
        methods: {
            onInput(value) {
                this.editingValue = value;
                if (!this.confirm) {
                    this.$nextTick(() => this.confirmEditedValue());
                }
            },
            onBlur(event) {
                if (!this.confirm) {
                    this.confirmEditedValue();
                }
                const focusWithinComponent = this.$refs.container.contains(event.relatedTarget);

                if (!this.isEditing || this.isLoading) return;
                if (!focusWithinComponent && !this.forceIsEditing) {
                    this.$nextTick(() => this.cancelInlineEdit());
                }
                this.isFocused = false;
            },
            onFocus() {
                this.isFocused = true;
            },
            onKeyUp(e) {
                if (e.keyCode === ENTER) this.confirmEditedValue();
                if (e.keyCode === ESC) this.cancelInlineEdit();
            },
            onEditRequested() {
                this.isEditing = true;
                this.isFocused = true;
                this.$nextTick(() => {
                    if (this.$refs.input) {
                        this.$refs.input.focus();
                    }
                });
            },
            saveInlineEdit(error) {
                this.isDirty = false;
                if (error) {
                    this.onValidateError(error);
                    return;
                }
                this.isLoading = false;
                this.isEditing = false;
                this.editingValue = this.value;
            },
            cancelInlineEdit() {
                this.isEditing = false;
                this.editingValue = this.value;
            },
            onValidateError(error) {
                this.isLoading = false;
                this.isFocused = false;
                this.error = error;
                this.$nextTick(() => {
                    this.isFocused = true;
                    if (this.$refs.input) {
                        this.$refs.input.focus();
                    }
                });
            },
            confirmEditedValue() {
                // in the case of forceEditing, value might not change
                if (!this.forceIsEditing && this.value === this.editingValue) {
                    this.isEditing = false;
                    this.error = undefined;
                    return;
                }
                if (!this.isLoading) {
                    if (this.isDirty) {
                        this.isLoading = true;
                        this.$emit('save-requested', this.editingValue, this.saveInlineEdit);
                    } else if (this.error) {
                        this.onValidateError(this.error);
                    }
                }
            },
            beforeTextFieldMount() {
                const {
                    width,
                    height
                } = this.$refs.value.$el.getBoundingClientRect();
                this.contentWidth = width;
                this.contentHeight = height;
            },
            validate(e) {
                if (!this.pattern) return;
                if (![TAB, BACKSPACE].includes(e.keyCode) && !this.isValidId(e.key)) {
                    e.preventDefault();
                }
            },
            isValidId(key) {
                const pattern = new RegExp(this.pattern);
                return pattern.test(key);
            }
        }
    };
</script>
<style scoped>
.kit-inline-edit {
  margin: -8px;
}

.kit-inline-edit[compact] {
  margin: -2px;
}

input {
  font-family: inherit;
}

input[align="end"] {
  text-align: right;
}

.kit-inline-edit__general-error-dialog {
  z-index: 500;
  max-width: 400px;
  min-width: 200px;
  font-size: inherit;
  font-weight: inherit;
}

/* Clearly a hack */
.kit-inline-edit--has-general-error >>> .kit-text-field {
  padding-right: 25px;
}

.kit-inline-edit__general-error {
  position: relative;
  right: 0;
  margin-bottom: -2px;
  margin-left: -35px;
  display: flex;
}

.kit-inline-edit__general-error-icon {
  color: rgb(191, 38, 0)
}

.kit-inline-edit__general-error-close {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
