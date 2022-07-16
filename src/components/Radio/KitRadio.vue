<template>
    <label
        ref="radio" class="kit-radio">
        <input
            ref="input" :checked="isChecked"
            :name="name" type="radio"
            @blur="onBlur"
            @change="isChecked = value"
            @focus="onFocus">
        {{ value.label }}
    </label>
</template>

<script>
    export default {
        name: 'Checkbox',
        model: {
            prop: 'checked',
            event: 'input'
        },
        props: {
            value: {
                type: [Object, String],
                required: true,
                default: undefined
            },
            name: {
                type: String,
                default: undefined
            },
            checked: {
                type: Boolean,
                required: true
            }
        },
        computed: {
            isChecked: {
                get() {
                    return this.checked;
                },
                set(value) {
                    this.$emit('input', value);
                }
            }
        },
        watch: {
            isFocused: {
                handler(isFocused) {
                    if (isFocused) {
                        this.$nextTick(() => this.$refs.input.focus());
                    }
                },
                immediate: true
            }
        },
        methods: {
            onBlur(e) {
                if (!this.$refs.radio.contains(e.relatedTarget)) {
                    this.$emit('blur', e);
                }
            },
            onFocus(e) {
                this.$emit('focus', e);
            }
        }
    };
</script>

<style scoped>

.kit-radio {
  cursor: pointer;
  padding: 2px 0;
  margin-bottom: -2px;
}

input {
  appearance: none;
  transition: 0.2s all linear;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #999;
  margin-right: 5px;
  position: relative;
  top: 3px;
}

input:active {
  border-color: #0066FF;
  background-color: #B3D4FF;
}

input:checked {
  background-color: white;
  border: 5px #6b778c solid;
}

label[disabled], label[disabled] input {
  cursor: not-allowed;
  color: rgb(151, 160, 175);
}

label:hover input[type=radio] {
  background-color: rgb(235, 236, 240);
}


</style>
