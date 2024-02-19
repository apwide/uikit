<template>
  <div>
    <Button @click="showDialog"> Show Dialog </Button>
    <Modal v-if="show" heading="Form Demo" @submit="onSubmit" @cancel="onCancel">
      <div slot="content">
        <FieldGroup label="Title" required>
          <Input v-model="title" auto-focus />
        </FieldGroup>
        <FieldGroup label="Type" required>
          <Input v-model="type" />
        </FieldGroup>
        <FieldGroup label="Type" required>
          <KitSelect v-model="type" :options="options" :selected="selected" />
        </FieldGroup>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Modal from '@/components/Modal/Modal.vue'
import KitSelect from '@/components/Select/KitSelect.vue'
import Input from '@/components/Form/Input.vue'
import FieldGroup from '@/components/Form/FieldGroup.vue'
import Button from '@/components/Button/Button.vue'

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
