<template>
  <div>
    <h2>Editable</h2>
    <MarkdownEditor v-model="text" />
    <Button appearance="primary" @click="save">Save</Button>

    <h2>Readonly</h2>
    <MarkdownEditor readonly v-model="text" />
    <h2>Few content</h2>
    <MarkdownEditor readonly value="This is a test" />
    <Button appearance="primary" @click="save">Save</Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MarkdownEditor from '../../src/components/MarkdownEditor/KitMarkdownEditor.vue'
import Button from '../../src/components/Button/Button.vue'

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

function save() {
  alert(text.value)
}
</script>
