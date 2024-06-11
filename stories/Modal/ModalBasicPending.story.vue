<template>
  <div>
    <KitButton @click="showDialog"> Show Dialog </KitButton>
    <Modal v-if="show" heading="Modal Basic" auto-focus :pending="pending" @submit="onSubmit" @cancel="onCancel">
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

const show = ref(false)
const pending = ref(false)

function onSubmit() {
  pending.value = true
  console.log('submit!')
  setTimeout(() => onCancel(), 2000)
}

function showDialog() {
  show.value = true
}

function onCancel() {
  pending.value = false
  show.value = false
}
</script>
