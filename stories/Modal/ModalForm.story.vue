<template>
  <div>
    <KitButton @click="showDialog"> Show Dialog </KitButton>
    <KitModal v-if="show" heading="Form Demo" @submit="onSubmit" @cancel="onCancel">
      <div slot="content">
        <KitFieldGroup label="Title" required>
          <KitInput v-model="title" auto-focus />
        </KitFieldGroup>
        <KitFieldGroup label="Type" required>
          <KitInput v-model="type" />
        </KitFieldGroup>
        <KitFieldGroup label="Type" required>
          <KitSelect v-model="type" :options="options" :selected="selected" />
        </KitFieldGroup>
      </div>
    </KitModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitButton from '@components/Button/KitButton.vue'
import KitModal from '@components/Modal/KitModal.vue'
import KitInput from '@components/Form/KitInput.vue'
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import KitSelect from '@/components/Select/KitSelect.vue'

const title = ref('')
const type = ref('')
const selected = ref()
const options = ref(['foo', 'bar', 'baz'])
const show = ref(false)

function onCancel() {
  show.value = false
}

function onSubmit() {
  console.log(JSON.stringify({ title: title.value, type: type.value }))
  onCancel()
}

function showDialog() {
  show.value = true
}
</script>
