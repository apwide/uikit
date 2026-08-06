<template>
  <div>
    <h5>Editable:</h5>
    <p>
      <KitHyperlinkEditableRenderer :link="link" @save-requested="onSave" />
    </p>
    <h5>Editable - callback with error:</h5>
    <p>
      <KitHyperlinkEditableRenderer :link="link" @save-requested="onSaveError" />
    </p>
    <h5>Non-editable:</h5>
    <p>
      <KitHyperlinkEditableRenderer :link="link" :editable="false" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitHyperlinkEditableRenderer from '@/components/field-renderers/KitHyperlinkEditableRenderer.vue'

const link = ref('https://www.spartez.com')

function onSave(value, callback) {
  link.value = value
  callback()
}

function onSaveError(value, callback) {
  callback(new Error('Something went wrong'))
}
</script>
