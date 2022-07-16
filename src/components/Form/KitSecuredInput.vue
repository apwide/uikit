<template>
    <TextField :is-focused="isFocused">
        <input
            ref="input"
            v-model="input"
            :type="type"
            :placeholder="placeholder"
            :step="step"
            v-bind="$attrs"
            :maxlength="maxlength"
            :disabled="disabled"
            @focus="onFocus" @blur="onBlur">
        <KitIconButton :title="title" @click.stop.prevent="toggleFieldType">
            <KitIcon v-if="obfuscated" type="eye"/>
            <KitIcon v-else type="eye-slash" />
        </KitIconButton>
    </TextField>
</template>

<script>
    import KitIconButton from '../Button/KitIconButton.vue';
    import KitIcon from '../Icon/KitIcon.vue';
    import TextField from './TextField.vue';

    export default {
        name: 'KitSecuredInput',
        components: {
            TextField,
            KitIconButton,
            KitIcon
        },
        props: {
            value: {
                type: [Number, String],
                default: undefined
            },
            maxlength: {
                type: Number,
                default: undefined
            },
            placeholder: {
                type: String,
                default: undefined
            },
            autoFocus: {
                type: Boolean,
                default: false
            },
            width: {
                type: String,
                default: '100%'
            },
            step: {
                type: String,
                default: '1'
            },
            allowedValues: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                isFocused: false,
                obfuscated: true,
                justClickedOnTypeSwitch: false
            };
        },
        computed: {
            input: {
                get() {
                    return this.value;
                },
                set(val) {
                    this.$emit('input', val);
                }
            },
            type() {
                return this.obfuscated ? 'password' : 'text';
            },
            title() {
                return this.obfuscated ? 'Reveal' : 'Hide';
            }
        },
        watch: {
            input() {
                if (this.allowedValues) {
                    this.input = this.input.replace(new RegExp(this.allowedValues, 'g'), '');
                }
            },
            autoFocus: {
                handler(isFocused) {
                    if (isFocused) {
                        this.$nextTick(() => {
                            if (this.$refs.input) {
                                this.$refs.input.focus();
                            }
                        });
                    }
                },
                immediate: true
            }
        },
        methods: {
            onFocus(e) {
                this.isFocused = true;
                this.$emit('focus', e);
            },
            onBlur(data) {
                if (!this.justClickedOnTypeSwitch) {
                    this.originalBlur(data);
                }
                this.justClickedOnTypeSwitch = false;
            },
            originalBlur(e) {
                this.isFocused = false;
                this.$emit('blur', e);
            },
            toggleFieldType() {
                this.obfuscated = !this.obfuscated;
                this.justClickedOnTypeSwitch = true;
            }
        }
    };
</script>
