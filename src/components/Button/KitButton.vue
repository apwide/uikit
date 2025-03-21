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
  background-color: var(--kit-btn-default-bg);
  color: var(--kit-btn-default-text);
}

button[appearance='default']:not([disabled]):not([selected]):hover {
  background-color: var(--kit-btn-default-hover-bg);
}

button[appearance='default']:not([disabled]):not([selected]):active {
  background-color: var(--kit-btn-default-active-bg);
  color: var(--kit-btn-default-active-text);
}

button[appearance='default']:active >>> svg {
  color: var(--kit-btn-default-active-text);
}

/*primary*/
button[appearance='primary'] {
  background-color: var(--kit-btn-primary-bg);
  color: var(--kit-btn-primary-text);
  font-weight: 600;
}

button[appearance='primary']:not([disabled]):not([selected]):hover {
  background-color: var(--kit-btn-primary-hover-bg);
}

button[appearance='primary']:not([disabled]):not([selected]):active {
  background-color: var(--kit-btn-primary-active-bg);
}

button[appearance='primary'][loading] >>> .kit-spinner {
  color: var(--kit-btn-primary-text);
}

/*link*/
button[appearance='link'] {
  background: none;
  color: var(--kit-btn-link-text);
}

button[appearance='link']:not([disabled]):not([selected]):hover {
  color: var(--kit-btn-link-hover-bg);
  text-decoration: underline;
}

button[appearance='link']:not([disabled]):not([selected]):active {
  text-decoration: none;
  color: var(--kit-btn-link-active-text);
}

/*subtle*/
button[appearance='subtle'] {
  background: var(--kit-btn-subtle-bg);
  color: var(--kit-btn-subtle-text);
}

button[appearance='subtle']:not([disabled]):not([selected]):hover {
  background-color: var(--kit-btn-subtle-hover-bg);
}

button[appearance='subtle']:not([disabled]):not([selected]):active {
  background-color: var(--kit-btn-subtle-active-bg);
  color: var(--kit-btn-subtle-active-text);
}

/*subtle-link*/
button[appearance='subtle-link'] {
  background: none;
  color: var(--kit-btn-subtle-link-text);
}

button[appearance='subtle-link']:not([disabled]):not([selected]):hover {
  text-decoration: underline;
  color: var(--kit-btn-subtle-link-hover-text);
}

button[appearance='subtle-link']:not([disabled]):not([selected]):active {
  text-decoration: none;
  color: var(--kit-btn-subtle-link-active-text);
}

/*warning*/
button[appearance='warning'] {
  background-color: var(--kit-btn-warn-bg);
  color: var(--kit-btn-warn-text);
}

button:focus[appearance='warning'] {
  box-shadow: var(--kit-btn-warn-bg) 0 0 0 2px;
}
button[appearance='warning']:not([disabled]):not([selected]):hover {
  background-color: var(--kit-btn-warn-hover-bg);
}

button[appearance='warning']:not([disabled]):not([selected]):active,
button[appearance='warning'][selected],
button[appearance='warning'][selected]:hover {
  background-color: var(--kit-btn-warn-active-bg);
  color: var(--kit-btn-warn-active-text);
}

button[appearance='warning']:active >>> svg,
button[appearance='warning'][selected] >>> svg,
button[appearance='warning'][selected]:hover >>> svg {
  color: var(--kit-btn-warn-active-text);
}

/*danger*/
button[appearance='danger'] {
  background-color: var(--kit-btn-danger-bg);
  color: var(--kit-btn-danger-text);
}

button:focus[appearance='danger'] {
  box-shadow: var(--kit-btn-danger-border) 0 0 0 2px;
}

button[appearance='danger']:not([disabled]):not([selected]):hover {
  background-color: var(--kit-btn-danger-hover-bg);
}

button[appearance='danger']:not([disabled]):not([selected]):active,
button[appearance='danger'][selected],
button[appearance='danger'][selected]:hover {
  background-color: var(--kit-btn-danger-active-bg);
}

button[appearance='danger'][loading] >>> .kit-spinner {
  color: var(--kit-btn-danger-active-text);
}

/*help*/
button[appearance='help'] {
  background-color: var(--kit-btn-help-bg);
  color: var(--kit-btn-help-text);
}

button:focus[appearance='help'] {
  box-shadow: var(--kit-btn-help-border) 0 0 0 2px;
}

button[appearance='help']:not([disabled]):not([selected]):hover {
  background-color: var(--kit-btn-help-hover-bg);
}

button[appearance='help']:not([disabled]):not([selected]):active,
button[appearance='help'][selected],
button[appearance='help'][selected]:hover {
  background-color: var(--kit-btn-help-active-bg);
}

button[appearance='help'][loading] >>> .kit-spinner {
  color: var(--kit-btn-help-active-text);
}

button[selected]:not([appearance='danger']):not([appearance='warning']):not([appearance='help']),
button[selected]:not([appearance='danger']):not([appearance='warning']):not([appearance='help']):hover,
button[selected]:not([appearance='danger']):not([appearance='warning']):not([appearance='help']):active {
  background-color: var(--kit-btn-selected-bg);
  color: var(--kit-btn-selected-text);
  text-decoration: none;
}

button[selected]:not([appearance='danger']):not([appearance='warning']):not([appearance='help']):hover {
  background-color: var(--kit-btn-selected-hover-bg);
}

button[selected]:not([appearance='danger']):not([appearance='warning']):not([appearance='help']) >>> svg,
button[selected]:not([appearance='danger']):not([appearance='warning']):not([appearance='help']):hover >>> svg,
button[selected]:not([appearance='danger']):not([appearance='warning']):not([appearance='help']):active >>> svg {
  color: var(--kit-btn-selected-text);
}

button[disabled] span.kit-button__wrapper,
button[disabled] >>> svg {
  color: var(--kit-btn-disabled-text);
  pointer-events: none;
}

button[disabled] {
  cursor: not-allowed;
}

button[loading][disabled] >>> .kit-spinner {
  color: var(--kit-btn-disabled-text);
}

button[disabled]:not([appearance='subtle-link']):not([appearance='link']):not([appearance='subtle']) {
  background-color: var(--kit-btn-disabled-bg);
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
