<template>
  <div class="wrapper">
    <h5>Editable:</h5>
    <p>
      <KitSingleSelectEditableRenderer :value="selectedValue" :allowed-values="allowedValues" @save-requested="onSave" />
    </p>
    <h5>Editable - callback with error:</h5>
    <p>
      <KitSingleSelectEditableRenderer
        :value="selectedValue"
        :allowed-values="allowedValues"
        @save-requested="onSaveError" />
    </p>
    <h5>Limited width:</h5>
    <p class="limited-width">
      <KitSingleSelectEditableRenderer :value="selectedValue" :allowed-values="allowedValues" @save-requested="onSave" />
    </p>
    <h5>No Confirm:</h5>
    <p>
      <KitSingleSelectEditableRenderer
        :value="selectedValue"
        :allowed-values="allowedValues"
        @save-requested="onSave"
        :confirm="false" />
    </p>
    <h5>Non-editable:</h5>
    <p>
      <KitSingleSelectEditableRenderer :value="selectedValue" :allowed-values="allowedValues" :editable="false" />
    </p>
    <h5>With complex objects</h5>
    <p>
      <KitSingleSelectEditableRenderer
        :normalizer="normalizer"
        :value="complexSelectedValue"
        :allowed-values="complexAllowedValues"
        :editable="true"
        @save-requested="saveComplexSelection" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { faker } from '@faker-js/faker'
import KitSingleSelectEditableRenderer from '@/components/field-renderers/KitSingleSelectEditableRenderer.vue'

faker.seed(1)

const allowedValues = Array.from({ length: 10 }, () => faker.lorem.word())
const [selected] = allowedValues
const selectedValue = ref(selected)

const complexAllowedValues = allowedValues.map((value, key) => ({ key, value }))
const [firstComplexValue] = complexAllowedValues
const complexSelectedValue = ref(firstComplexValue)

function normalizer(valueToNormalize) {
  return {
    id: valueToNormalize.key,
    label: valueToNormalize.value,
    value: valueToNormalize
  }
}

function onSave(value, callback) {
  selectedValue.value = value
  callback()
}

function saveComplexSelection(value, callback) {
  complexSelectedValue.value = value
  setTimeout(() => {
    callback()
  }, 1000)
}

function onSaveError(value, callback) {
  setTimeout(() => callback(new Error('Something went wrong')), 100)
}
</script>

<style scoped>
.limited-width {
  width: 300px;
}

.wrapper {
  padding: 20px;
}
</style>
