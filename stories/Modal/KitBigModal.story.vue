<template>
  <div>
    <Button data-cy="show-modal" @click="showDialog([paragraphs[0]])"> Show Dialog with little content </Button>
    <Button @click="showDialog(paragraphs)"> Show Dialog with lots of content </Button>
    <ApwideModal v-if="show" auto-focus @submit="onSubmit" @cancel="onCancel">
      <template #breadcrumb>
        <p>this • is • the • breadcrumb</p>
      </template>
      <template #title>
        <h2>This is the title</h2>
      </template>
      <template #actions>
        <KitIconButton title="Clone this item">
          <CopyIcon />
        </KitIconButton>
        <KitIconButton title="Lock this item">
          <LockIcon />
        </KitIconButton>
      </template>
      <p v-for="p in modalContent" :key="p">
        {{ p }}
      </p>
    </ApwideModal>
    <p v-for="p in paragraphs" :key="p">
      {{ p }}
    </p>
  </div>
</template>

<script>
import faker from 'faker'
import ApwideModal from '../../src/components/Modal/KitBigModal'
import CopyIcon from '../../src/components/Icon/CopyIcon'
import LockIcon from '../../src/components/Icon/LockIcon'
import KitIconButton from '../../src/components/Button/KitIconButton'
import Button from '@/components/Button/Button'

const paragraphs = Array.from({ length: 30 }).map(() => faker.lorem.paragraph())

export default {
  name: 'ModalBasicStory',
  components: {
    KitIconButton,
    LockIcon,
    CopyIcon,
    ApwideModal,
    Button
  },
  data() {
    return {
      show: true,
      paragraphs,
      modalContent: paragraphs
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
      this.onCancel()
    },
    showDialog(content) {
      this.show = true
      this.modalContent = content
    },
    onCancel() {
      this.show = false
    }
  }
}
</script>
