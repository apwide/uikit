<template>
  <div>
    <Button data-cy="show-modal" @click="showDialog"> Show Dialog </Button>
    <Modal
      v-if="show"
      heading="Modal Basic"
      auto-focus
      :close-on-esc="false"
      :actions="['Must click me']"
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
  name: 'ModalBasicStory',
  components: { Modal, Button },
  data() {
    return {
      show: false,
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
