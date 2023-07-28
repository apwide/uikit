<template>
  <div style="padding-bottom: 50px">
    <h5>Editable - callback with error:</h5>
    <KitMarkdownEditableRenderer allow-blur-to-save :value="text" @save-requested="onSaveError" />
    <hr />
    <h5>Editable:</h5>
    <KitMarkdownEditableRenderer :value="text" allow-blur-to-save @save-requested="onSaveRequested" />
    <hr />

    <h5>Fewer edition options and limiting allowed characters</h5>
    <KitMarkdownEditableRenderer
      value="has a small text"
      :size-limit="50"
      :toolbar="['bold', 'italic']"
      style="margin-bottom: 100px"
      @save-requested="onSaveRequested" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitMarkdownEditableRenderer from '../../../src/components/field-renderers/KitMarkdownEditableRenderer.vue'

const text = ref(`# Description

this environment serves as a demo for our main application Rotozor 3000.

## Account

Email [Bob](mailto:bob@rotozor-corp.com) to get a test account.

## Features

* Best in class generator
* Super amazing suspense manager
* Very nice

[Report issues here](https://support.rotozor-corp.com/demo)
`)

function onSaveRequested(content, callback) {
  text.value = content
  callback()
}

function onSaveError(value, callback) {
  setTimeout(() => callback(new Error('Something went wrong')), 100)
}
</script>

<style scoped></style>
