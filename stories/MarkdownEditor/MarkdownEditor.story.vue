<template>
  <div>
    <h2>Editable</h2>
    <MarkdownEditor v-model="text" style="margin-bottom: 10px" />
    <Button appearance="primary" @click="save">Save</Button>
    <hr />
    <h2>Editable with limited width</h2>
    <div style="width: 300px">
      <MarkdownEditor :value="text" style="margin-bottom: 10px" />
    </div>
    <hr />

    <h2>Readonly</h2>
    <MarkdownEditor readonly v-model="text" style="margin-bottom: 10px" />
    <hr />

    <h2>Little content</h2>
    <MarkdownEditor readonly value="This is a test" />
    <Button appearance="primary" @click="save">Save</Button>
    <hr />

    <h2>Different toolbar</h2>
    <p>Available values</p>
    <ul>
      <li>heading,</li>
      <li>bold,</li>
      <li>italic,</li>
      <li>unordered-list,</li>
      <li>ordered-list,</li>
      <li>link,</li>
      <li>preview,</li>
      <li>code,</li>
      <li>image,</li>
      <li>|</li>
    </ul>
    <MarkdownEditor value="" placeholder="Type something..." :toolbar="['bold', 'italic', '|', 'image', 'link']" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MarkdownEditor from '../../src/components/MarkdownEditor/KitMarkdownEditor.vue'
import Button from '../../src/components/KitButton/KitButton.vue'

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
