<template>
  <div>
    <h5>Editable:</h5>
    <p>
      <KitMultiLineEditableRenderer data-cy="editable" :value="value" @save-requested="onSave" />
    </p>
    <h5>Editable - callback with error:</h5>
    <p>
      <KitMultiLineEditableRenderer data-cy="editable-error" :value="value" @save-requested="onSaveError" />
    </p>
    <h5>Limited width:</h5>
    <p class="limited-width">
      <KitMultiLineEditableRenderer :value="value" @save-requested="onSave" />
    </p>
    <h5>Non-editable:</h5>
    <p>
      <KitMultiLineEditableRenderer data-cy="non-editable" :value="value" :editable="false" />
    </p>
    <h5>Without confirmation:</h5>
    <p>
      <KitMultiLineEditableRenderer
        :value="value"
        :confirm="false"
        align="end"
        :icon="false"
        type="number"
        @save-requested="onSave" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { faker } from '@faker-js/faker'
import KitMultiLineEditableRenderer from '@/components/field-renderers/KitMultiLineEditableRenderer.vue'

faker.seed(1)
const value = ref(faker.lorem.sentence())

function onSave(newValue, callback) {
  value.value = newValue
  callback()
}

function onSaveError(newValue, callback) {
  callback(new Error('Something went wrong'))
}
</script>

<style scoped>
.limited-width {
  width: 300px;
}
</style>
