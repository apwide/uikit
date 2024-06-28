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

    <h5>In a table</h5>

    <KitTable
      style="margin-bottom: 30px; width: 200px"
      :columns="[
        { id: 'id', label: 'ID' },
        { id: 'value', label: 'Value' }
      ]"
      :data="[
        { id: '1', value: 'asdasdfasd' },
        { id: '2', value: 'asdfasdf' }
      ]">
      <template #value="{ value }">
        <KitMarkdownEditableRenderer :value="value" :size-limit="50" @save-requested="onSaveRequested" />
      </template>
    </KitTable>

    <h5>In KitBorderedPanels</h5>

    <KitBorderedPanel>
      <KitBorderedPanelRow label="First row">
        <KitMarkdownEditableRenderer :value="smallText" />
      </KitBorderedPanelRow>
      <KitBorderedPanelRow label="Second row">
        <KitMarkdownEditableRenderer :value="smallText" />
      </KitBorderedPanelRow>
      <KitBorderedPanelRow label="Third row">
        <KitMarkdownEditableRenderer force-is-editing> &lt;empty&gt; </KitMarkdownEditableRenderer>
      </KitBorderedPanelRow>
    </KitBorderedPanel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitTable from '@components/Table/KitTable.vue'
import KitBorderedPanel from '@components/layout/BorderedPanel/KitBorderedPanel.vue'
import KitBorderedPanelRow from '@components/layout/BorderedPanel/KitBorderedPanelRow.vue'
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

const smallText = ref('This is a small text')

function onSaveRequested(content, callback) {
  text.value = content
  callback()
}

function onSaveError(value, callback) {
  setTimeout(() => callback(new Error('Something went wrong')), 100)
}
</script>

<style scoped></style>
