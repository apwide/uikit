<template>
  <div>
    <h5>Editable:</h5>
    <p>
      <KitDateEditableRenderer :date="date" @save-requested="onSave" />
    </p>
    <h5>Editable - callback with error:</h5>
    <p>
      <KitDateEditableRenderer :date="date" @save-requested="onSaveError" />
    </p>
    <h5>Non-editable:</h5>
    <p>
      <KitDateEditableRenderer :date="date" :editable="false" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { faker } from '@faker-js/faker'
import KitDateEditableRenderer from '@/components/field-renderers/KitDateEditableRenderer.vue'

faker.seed(1)
const date = ref(faker.date.recent().getTime())

function onSave(value, callback) {
  date.value = value
  callback()
}

function onSaveError(value, callback) {
  callback(new Error('Something went wrong'))
}
</script>
