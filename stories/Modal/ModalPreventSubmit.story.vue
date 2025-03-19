<template>
  <div>
    <KitButton @click="showDialog"> Show Dialog </KitButton>
    <KitKitModal
      v-if="show"
      heading="Modal Basic"
      auto-focus
      :should-allow-submit="shouldAllowSubmit"
      @submit="onSubmit"
      @cancel="onCancel">
      <template #content>
        <p>{{ paragraph }}</p>
        <KitCheckbox v-model="shouldAllowSubmit"> By checking agree and continue </KitCheckbox>
      </template>
    </KitKitModal>
  </div>
</template>

<script setup lang="ts">
import faker from 'faker'
import { ref } from 'vue'
import KitButton from '@components/Button/KitButton.vue'
import KitKitModal from '@components/Modal/KitModal.vue'
import KitCheckbox from '@/components/Checkbox/KitCheckbox.vue'

const paragraph = faker.lorem.paragraph()

const show = ref(false)
const shouldAllowSubmit = ref(false)

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
