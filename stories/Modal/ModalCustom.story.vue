<template>
  <div>
    <KitButton @click="showDialog"> Show Dialog </KitButton>
    <Modal v-if="show" heading="Modal Basic" auto-focus width="400px" @submit="onSubmit" @cancel="onCancel">
      <p slot="content">
        {{ paragraph }}
      </p>
      <div slot="footer" class="footer">
        <KitButton appearance="primary" @click="onCancel"> Go it! </KitButton>
      </div>
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
