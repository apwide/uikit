<template>
  <div>
    <KitButton data-cy="show-modal" @click="showDialog([paragraphs[0]])"> Show Dialog with little content</KitButton>
    <KitButton @click="showDialog(paragraphs)"> Show Dialog with lots of content</KitButton>
    <KitBigModal close-on-outside-click v-if="show" auto-focus @submit="onSubmit" @cancel="onCancel">
      <template #breadcrumb>
        <p>this • is • the • breadcrumb</p>
      </template>
      <template #title>
        <h2>This is the title</h2>
      </template>
      <template #actions>
        <KitIconButton title="Run">
          <KitIcon type="play" />
        </KitIconButton>
        <KitIconButton title="Lock this item">
          <KitIcon type="lock" />
        </KitIconButton>
      </template>
      <p v-for="p in modalContent" :key="p">
        {{ p }}
      </p>
    </KitBigModal>
    <p v-for="p in paragraphs" :key="p">
      {{ p }}
    </p>
  </div>
</template>

<script setup lang="ts">
import faker from 'faker'
import { ref } from 'vue'
import KitButton from '@components/Button/KitButton.vue'
import KitBigModal from '../../src/components/Modal/KitBigModal.vue'
import KitIconButton from '../../src/components/Button/KitIconButton.vue'
import KitIcon from '../../src/components/Icon/KitIcon.vue'

const paragraphs = Array.from({ length: 30 }).map(() => faker.lorem.paragraph())

const show = ref(true)
const modalContent = ref(paragraphs)

function onSubmit() {
  console.log('submit!')
  onCancel()
}

function showDialog(content) {
  show.value = true
  modalContent.value = content
}

function onCancel() {
  show.value = false
}
</script>
