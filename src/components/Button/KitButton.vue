<template>
  <button
    ref="button"
    type="button"
    :appearance="appearance"
    :disabled="isDisabled"
    :selected="isSelected"
    :loading="isLoading"
    :spacing="spacing"
    :round="round"
    v-on="listeners">
    <span class="kit-button__wrapper" tabindex="-1" :icon-is-only-child="iconIsOnlyChild">
      <slot v-if="!isLoading" name="icon-before" />
      <span v-if="$slots.default" ref="label" class="kit-button__label"><slot /></span>
      <slot v-if="!isLoading" name="icon-after" />
      <KitSpinner v-if="isLoading" :size="spacing === 'default' ? 'small' : 'icon'" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, nextTick, onMounted, ref } from 'vue'
import { KitButtonAppearance, KitButtonSpacing } from '@components/Button/KitButton.types'
import KitSpinner from '../Spinner/KitSpinner.vue'

type Props = {
  appearance?: KitButtonAppearance
  spacing?: KitButtonSpacing
  isSelected?: boolean
  isDisabled?: boolean
  autoFocus?: boolean
  isLoading?: boolean
  round?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  appearance: 'default',
  spacing: 'default',
  isSelected: false,
  isDisabled: false,
  autoFocus: false,
  isLoading: false,
  round: false
})

const instance = getCurrentInstance()
const iconIsOnlyChild = computed(() => {
  const me = instance.proxy
  return (
    !!(me.$slots['icon-after'] && !me.$slots['icon-before'] && !me.$slots.default) ||
    (!me.$slots['icon-after'] && me.$slots['icon-before'] && !me.$slots.default)
  )
})
const listeners = computed(() => instance.proxy.$listeners)
const button = ref<HTMLButtonElement>()

onMounted(async () => {
  if (props.autoFocus) {
    await nextTick()
    button.value.focus()
  }
})
</script>

<style scoped>
button {
  font-size: 14px;
  align-items: baseline;
  background: none;
  border-radius: 3px;
  border-width: 0;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-style: normal;
  margin: 0;
  max-width: 100%;
  text-align: center;
  text-decoration: none;
  transition: background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
  vertical-align: middle;
  white-space: nowrap;
  width: auto;
  outline: none;
  position: relative;
  overflow: hidden;
  padding: 0;
}

button[round] {
  border-radius: 50%;
}

button[spacing='default'] {
  height: 32px;
  line-height: 32px;
  min-width: 32px;
}

button[spacing='compact'] {
  height: 24px;
  line-height: 24px;
  min-width: 24px;
}

button[spacing='none'] {
  height: auto;
  line-height: inherit;
}

[spacing='none'] span.kit-button__wrapper {
  padding: 0;
}

span.kit-button__wrapper {
  border-radius: 3px;
  outline: none;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  padding: 0 8px;
}

[spacing='compact'] span.kit-button__wrapper[icon-is-only-child] {
  padding: 0 4px;
}

span.kit-button__label {
  align-self: center;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin: 0 4px;
}

span.kit-button__label,
button[loading],
button[loading] span.kit-button__wrapper {
  pointer-events: none;
}

button[loading] span.kit-button__label {
  opacity: 0;
}

button[loading] >>> .kit-spinner {
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

button[loading][selected] >>> .kit-spinner {
  color: #fff;
}

button:focus {
  box-shadow: rgba(38, 132, 255, 0.6) 0 0 0 2px;
}

/*default*/
button[appearance='default'] {
  background-color: #f6f7f8;
  color: #505f79;
}

button[appearance='default']:not([disabled]):not([selected]):hover {
  background-color: #efeff2;
}

button[appearance='default']:not([disabled]):not([selected]):active {
  background-color: rgba(179, 212, 255, 0.6);
  color: #0052cc;
}

button[appearance='default']:active >>> svg {
  color: #0052cc;
}

/*default-dark*/
[data-color-mode="dark"] button[appearance='default'] {
  background-color: #A1BDD914;
  color: var(--kit-body-text);
}

[data-color-mode="dark"] button[appearance='default']:not([disabled]):not([selected]):hover {
  background-color: #A6C5E229;
  color: var(--kit-body-text);
}

[data-color-mode="dark"] button[appearance='default']:not([disabled]):not([selected]):active {
  background-color: #BFDBF847;
  color: var(--kit-body-text);
}


/*primary*/
button[appearance='primary'] {
  background-color: #0052cc;
  color: #ffffff;
  font-weight: 600;
}

button[appearance='primary']:not([disabled]):not([selected]):hover {
  background-color: #0065ff;
}

button[appearance='primary']:not([disabled]):not([selected]):active {
  background-color: #0747a6;
}

button[appearance='primary'][loading] >>> .kit-spinner {
  color: #fff;
}

/*primary-dark*/
[data-color-mode="dark"] button[appearance='primary'] {
  background-color: #579DFF;
  color: #1D2125;
  font-weight: 600;
}

[data-color-mode="dark"] button[appearance='primary']:not([disabled]):not([selected]):hover {
  background-color: #85B8FF;
}

[data-color-mode="dark"] button[appearance='primary']:not([disabled]):not([selected]):active {
  background-color: #CCE0FF;
}

[data-color-mode="dark"] button[appearance='primary'][loading] >>> .kit-spinner {
  color: #1D2125;
}

/*link*/
button[appearance='link'] {
  background: none;
  color: #0052cc;
}

button[appearance='link']:not([disabled]):not([selected]):hover {
  color: #0065ff;
  text-decoration: underline;
}

button[appearance='link']:not([disabled]):not([selected]):active {
  text-decoration: none;
  color: #0747a6;
}

/*link-dark*/
[data-color-mode="dark"] button[appearance='link'] {
  background: none;
  color: #579dff;
}

[data-color-mode="dark"] button[appearance='link']:not([disabled]):not([selected]):hover {
  color: #579dff;
  text-decoration: underline;
}

[data-color-mode="dark"] button[appearance='link']:not([disabled]):not([selected]):active {
  text-decoration: none;
  color: #85B8FF;
}

/*subtle*/
button[appearance='subtle'] {
  background: none;
  color: #505f79;
}

button[appearance='subtle']:not([disabled]):not([selected]):hover {
  background-color: rgba(9, 30, 66, 0.08);
}

button[appearance='subtle']:not([disabled]):not([selected]):active {
  background-color: rgba(179, 212, 255, 0.6);
  color: #0052cc;
}

/*subtle-dark*/
[data-color-mode="dark"] button[appearance='subtle'] {
  color: #9FADBC;
}

[data-color-mode="dark"] button[appearance='subtle']:not([disabled]):not([selected]):hover {
  background-color: #A1BDD914;
}

[data-color-mode="dark"] button[appearance='subtle']:not([disabled]):not([selected]):active {
  background-color: #A6C5E229;
  color: #9FADBC;
}

/*subtle-link*/
button[appearance='subtle-link'] {
  background: none;
  color: #6b778c;
}

button[appearance='subtle-link']:not([disabled]):not([selected]):hover {
  text-decoration: underline;
  color: #8993a4;
}

button[appearance='subtle-link']:not([disabled]):not([selected]):active {
  text-decoration: none;
  color: #505f79;
}

/*subtle-link-dark*/
[data-color-mode="dark"] button[appearance='subtle-link'] {
  background: none;
  color: #9FADBC;
}

[data-color-mode="dark"] button[appearance='subtle-link']:not([disabled]):not([selected]):hover {
  text-decoration: underline;
  color: #9FADBC;
}

[data-color-mode="dark"] button[appearance='subtle-link']:not([disabled]):not([selected]):active {
  text-decoration: none;
  color: #B6C2CF;
}

/*warning*/
button[appearance='warning'] {
  background-color: #ffab00;
  color: #172b4d;
}

button:focus[appearance='warning'] {
  box-shadow: #ff8b00 0 0 0 2px;
}
button[appearance='warning']:not([disabled]):not([selected]):hover {
  background-color: #ffc400;
}

button[appearance='warning']:not([disabled]):not([selected]):active,
button[appearance='warning'][selected],
button[appearance='warning'][selected]:hover {
  background-color: #ff991f;
  color: #172b4d;
}

button[appearance='warning']:active >>> svg,
button[appearance='warning'][selected] >>> svg,
button[appearance='warning'][selected]:hover >>> svg {
  color: #172b4d;
}

/*danger*/
button[appearance='danger'] {
  background-color: #de350b;
  color: #ffffff;
}

button:focus[appearance='danger'] {
  box-shadow: #ff8f73 0 0 0 2px;
}

button[appearance='danger']:not([disabled]):not([selected]):hover {
  background-color: #ff5630;
}

button[appearance='danger']:not([disabled]):not([selected]):active,
button[appearance='danger'][selected],
button[appearance='danger'][selected]:hover {
  background-color: #bf2600;
}

button[appearance='danger'][loading] >>> .kit-spinner {
  color: #fff;
}

/*help*/
button[appearance='help'] {
  background-color: #413394;
  color: #ffffff;
}

button:focus[appearance='help'] {
  box-shadow: #ff8f73 0 0 0 2px;
}

button[appearance='help']:not([disabled]):not([selected]):hover {
  background-color: #6252bf;
}

button[appearance='help']:not([disabled]):not([selected]):active,
button[appearance='help'][selected],
button[appearance='help'][selected]:hover {
  background-color: #352a8dff;
}

button[appearance='help'][loading] >>> .kit-spinner {
  color: #fff;
}

button[selected],
button[selected]:hover,
button[selected]:active {
  background-color: #253858;
  color: rgb(244, 245, 247);
  text-decoration: none;
}

button[selected] >>> svg,
button[selected]:hover >>> svg,
button[selected]:active >>> svg {
  color: rgb(244, 245, 247);
}

[data-color-mode="dark"] button[selected]:not([appearance='danger']):not([appearance='warning']):not([appearance='help']),
[data-color-mode="dark"] button[selected]:not([appearance='danger']):not([appearance='warning']):not([appearance='help']):hover,
[data-color-mode="dark"] button[selected]:not([appearance='danger']):not([appearance='warning']):not([appearance='help']):active {
  background-color: #1C2B41;
  color: #579DFF;
}

[data-color-mode="dark"] button[selected]:not([appearance='danger']):not([appearance='warning']):not([appearance='help']) >>> svg,
[data-color-mode="dark"] button[selected]:not([appearance='danger']):not([appearance='warning']):not([appearance='help']):hover >>> svg,
[data-color-mode="dark"] button[selected]:not([appearance='danger']):not([appearance='warning']):not([appearance='help']):active >>> svg {
  color: #579DFF;
}

[data-color-mode="dark"] button[selected]:not([appearance='danger']):not([appearance='warning']):not([appearance='help']):hover {
  background-color: #09326C;
}

button[disabled] span.kit-button__wrapper,
button[disabled] >>> svg {
  color: #a5adba;
  pointer-events: none;
}

[data-color-mode="dark"] button[disabled] span.kit-button__wrapper,
[data-color-mode="dark"] button[disabled] >>> svg {
  color: #BFDBF847;
}

button[disabled] {
  cursor: not-allowed;
}

button[loading][disabled] >>> .kit-spinner {
  color: #172b4d;
}

[data-color-mode="dark"] button[loading][selected]:not([appearance='danger']):not([appearance='warning']):not([appearance='help']) >>> .kit-spinner > svg {
  --kit-spinner-color: #579DFF;
  color: #579DFF !important;
}

button[disabled]:not([appearance='subtle-link']):not([appearance='link']):not([appearance='subtle']) {
  background-color: #f5f6f8;
}

[data-color-mode="dark"] button[disabled]:not([appearance='subtle-link']):not([appearance='link']):not([appearance='subtle']) {
  background-color: #BCD6F00A;
}

button::-moz-focus-inner,
span::-moz-focus-inner,
button::-moz-focus-inner {
  border: 0;
  margin: 0;
  padding: 0;
}

button ~ button {
  margin-left: 10px;
}
</style>
