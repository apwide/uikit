<template>
  <Modal class="kit-modal" no-footer v-bind="$attrs" :width="width" v-on="$listeners" no-padding>
    <template #header>
      <div class="kit-modal__header-pre-title">
        <slot name="breadcrumb" class="" />
        <KitButtonGroup spacing="normal">
          <slot name="actions" />
          <KitIconButton class="kit-modal__close" title="close" @click="$emit('cancel')">
            <CrossIcon />
          </KitIconButton>
        </KitButtonGroup>
      </div>
      <div class="kit-modal__header-title">
        <slot name="title">
          <Header :heading="heading" />
        </slot>
      </div>
    </template>
    <div slot="content" class="kit-modal__content">
      <slot />
    </div>
  </Modal>
</template>
<script>
import Vue from 'vue'
import KitIconButton from '@components/KitButton/KitIconButton.vue'
import KitButtonGroup from '@components/KitButton/KitButtonGroup.vue'
import CrossIcon from '../Icon/CrossIcon.ts'
import Header from './Header.vue'
import Modal from './Modal.vue'

export default Vue.extend({
  name: 'KitModal',
  components: {
    KitButtonGroup,
    KitIconButton,
    Header,
    CrossIcon,
    Modal
  },
  props: {
    heading: {
      type: String,
      default: '',
      required: false
    }
  },
  data() {
    return {
      width: ''
    }
  },
  mounted() {
    this.resize()
    window.addEventListener('resize', this.resize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    resize() {
      const { width } = document.body.getBoundingClientRect()
      if (width > 1200) {
        this.width = '80%'
      } else {
        this.width = '900px'
      }
    }
  }
})
</script>
<style scoped>
.kit-modal__content {
  padding-bottom: 10px;
}

.kit-modal__header-pre-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
}

.kit-modal__header-pre-title,
.kit-modal__header-title {
  padding: 0 10px 0 20px;
}

.kit-modal >>> header {
  display: block;
}
</style>
