<template>
  <div>
    <KitButton @click="showDialog"> Show Dialog </KitButton>
    <Modal v-if="show" heading="Modal Danger" auto-focus :appearance="appearance" @submit="onSubmit" @cancel="onCancel">
      <p slot="content">
        {{ paragraph }}
      </p>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import faker from 'faker'
import KitButton from '@components/Button/KitButton.vue'
import { ref } from 'vue'
import Modal from '@/components/Modal/Modal.vue'

const paragraph = faker.lorem.paragraph()
const appearance = 'danger'
const show = ref(false)

function onSubmit() {
  console.log('submit!')
  onCancel()
}
function showDialog() {
  show.value = true
}
function onCancel() {
  show.value = false
}
</script>
