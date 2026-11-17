<template>
  <div class="kit-field-group">
    <div class="top">
      <span :id="labelId" class="kit-field-group__label">{{ label }}</span
      ><slot name="after" />
    </div>
    <slot />
    <div :id="errorsId" role="alert">
      <div v-for="error in visibleErrors" ref="error" :key="error" class="kit-field-group__error-message">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { uniqueId } from '@/utils/dom'
import { provideFieldGroup } from './fieldGroup'

type Props = {
  label?: string
  errors?: Array
}

const props = defineProps<Props>()
const id = uniqueId()
const errorsId = `${id}-errors`
const visibleErrors = computed(() => (props.errors || []).filter(Boolean))
const labelId = computed(() => (props.label ? id : undefined))
// the label span is not a <label for>: fields inside the group name themselves with aria-labelledby
const attrs = useAttrs()
provideFieldGroup({
  labelId,
  errorId: computed(() => (visibleErrors.value.length ? errorsId : undefined)),
  // `required` is a plain attribute on the group (it drives the asterisk CSS)
  required: computed(() => attrs.required !== undefined && attrs.required !== false)
})
</script>

<style scoped>
.kit-field-group {
  --kit-field-group-label-color: #6b778c;
}

[data-color-mode="dark"] .kit-field-group {
  --kit-field-group-label-color: #9FADBC;
}

.kit-field-group__error-message {
  font-size: 12px;
  font-style: inherit;
  line-height: 18px;
  font-weight: normal;
  color: var(--kit-form-danger);
  margin-top: 4px;
  display: flex;
  align-items: center;
}

.kit-field-group__label {
  display: inline-flex;
  color: var(--kit-field-group-label-color);
  font-size: 12px;
  line-height: 1.33333;
  font-weight: 600;
  padding: 16px 3px 4px 2px;
}

[required] .kit-field-group__label::after {
  color: var(--kit-form-danger);
  font-size: 12px;
  line-height: 1.33;
  font-weight: 600;
  padding-left: 2px;
  display: inline-block;
  content: '*';
  /* empty alt text: the asterisk stays out of the field's accessible name (aria-required says it) */
  content: '*' / '';
}
</style>
