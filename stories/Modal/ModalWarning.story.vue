<template>
  <div>
    <Button @click="showDialog"> Show Dialog </Button>
    <Modal
      v-if="show"
      heading="Modal Warning"
      auto-focus
      :appearance="appearance"
      @submit="onSubmit"
      @cancel="onCancel">
      <p slot="content">
        {{ paragraph }}
      </p>
    </Modal>
  </div>
</template>

<script>
import faker from 'faker'
import Modal from '@/components/Modal/Modal'
import Button from '@/components/Button/Button'

const paragraph = faker.lorem.paragraph()

export default {
  name: 'ModalWarningStory',
  components: { Modal, Button },
  data() {
    return {
      show: false,
      appearance: 'warning',
      paragraph
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
      this.onCancel()
    },
    showDialog() {
      this.show = true
    },
    onCancel() {
      this.show = false
    }
  }
}
</script>
