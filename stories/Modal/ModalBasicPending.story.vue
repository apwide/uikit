<template>
  <div>
    <Button @click="showDialog"> Show Dialog </Button>
    <Modal v-if="show" heading="Modal Basic" auto-focus :pending="pending" @submit="onSubmit" @cancel="onCancel">
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
  name: 'ModalBasicPendingStory',
  components: { Modal, Button },
  data() {
    return {
      show: false,
      pending: false,
      paragraph
    }
  },
  methods: {
    onSubmit() {
      this.pending = true
      console.log('submit!')
      setTimeout(() => this.onCancel(), 2000)
    },
    showDialog() {
      this.show = true
    },
    onCancel() {
      this.pending = false
      this.show = false
    }
  }
}
</script>
