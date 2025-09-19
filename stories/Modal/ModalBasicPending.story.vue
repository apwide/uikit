<template>
  <div>
    <KitButton @click="showDialog"> Show Dialog </KitButton>
    <KitModal v-if="show" heading="Modal Basic" auto-focus :pending="pending" @submit="onSubmit" @cancel="onCancel">
      <template #content>
        <p>
          {{ paragraph }}
        </p>
      </template>
    </KitModal>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import KitButton from '@components/Button/KitButton.vue'
import { ref } from 'vue'
import KitModal from '@components/Modal/KitModal.vue'

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
