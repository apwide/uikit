<template>
  <div>
    <KitButton data-cy="show-modal" @click="showDialog"> Show Dialog </KitButton>
    <KitModal
      v-if="show"
      heading="Modal Basic"
      auto-focus
      :close-on-esc="false"
      :actions="['Must click me']"
      @submit="onSubmit"
      @cancel="onCancel">
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
