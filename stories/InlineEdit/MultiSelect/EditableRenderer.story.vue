<template>
  <div>
    <h5>Editable:</h5>
    <p>
      <MultiSelectEditableRenderer
        :selected-values="selectedValues"
        :allowed-values="allowedValues"
        :normalizer="normalizer"
        @save-requested="onSave" />
    </p>
    <h5>Editable - callback with error:</h5>
    <p>
      <MultiSelectEditableRenderer
        :selected-values="selectedValues"
        :allowed-values="allowedValues"
        :normalizer="normalizer"
        @save-requested="onSaveError" />
    </p>
    <h5>Limited width:</h5>
    <p class="limited-width">
      <MultiSelectEditableRenderer
        :selected-values="selectedValues"
        :allowed-values="allowedValues"
        :normalizer="normalizer"
        @save-requested="onSave" />
    </p>
    <h5>Non-editable:</h5>
    <p>
      <MultiSelectEditableRenderer
        :selected-values="selectedValues"
        :allowed-values="allowedValues"
        :normalizer="normalizer"
        :editable="false" />
    </p>
    <h5>Custom rendering/style:</h5>
    <p>
      <MultiSelectEditableRenderer
          :selected-values="selectedValues"
          :allowed-values="allowedValues"
          :normalizer="normalizer"
          class="custom-multi-select"
          @save-requested="onSave">
        <template #tag="{ tag }">
          <KitLozenge appearance="success">{{ tag.label }}</KitLozenge>
        </template>
        <template #default>
          <div style="display: flex; gap: 5px">
            <KitLozenge v-for="selectedValue in selectedValues" :key="selectedValue.id" appearance="brown">
              {{ selectedValue.label }}
            </KitLozenge>
          </div>
        </template>
        <template #option="{ option }">
          <KitLozenge appearance="new">{{ option.label }}</KitLozenge>
        </template>
      </MultiSelectEditableRenderer>
    </p>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import KitLozenge from '@components/Lozenge/KitLozenge.vue'
import { ref } from 'vue'
import {options} from '../../api-mocks/options'
import MultiSelectEditableRenderer from '@/components/field-renderers/MultiSelectEditableRenderer'

const allowedValues = options

faker.seed(1)
const selectedValues = ref(allowedValues.slice(0, 3))

function normalizer() {
  return (value) => ({ ...value, value })
}

function onSave(value, callback) {
  console.log('save', value)
  selectedValues.value = value
  callback()
}

function onSaveError(value, callback) {
  setTimeout(() => callback(new Error('Something went wrong')), 100)
}
</script>

<style scoped>
.limited-width {
  width: 300px;
}
.custom-multi-select :deep(.tag) {
}
</style>
