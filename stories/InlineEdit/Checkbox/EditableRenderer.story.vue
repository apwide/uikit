<template>
  <div>
    <h5>Editable:</h5>
    <p>
      <KitCheckboxEditableRenderer :value="value" @save-requested="onSave" />
    </p>
    <h5>Editable - callback with error:</h5>
    <p>
      <KitCheckboxEditableRenderer :value="value" @save-requested="onSaveError" />
    </p>
    <h5>Non-editable:</h5>
    <p>
      <KitCheckboxEditableRenderer :value="value" :editable="false" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitCheckboxEditableRenderer from '@/components/field-renderers/KitCheckboxEditableRenderer.vue'

const value = ref(true)

function onSave(newValue, callback) {
  value.value = newValue
  callback()
}

function onSaveError(newValue, callback) {
  callback(new Error('Something went wrong'))
}
</script>
