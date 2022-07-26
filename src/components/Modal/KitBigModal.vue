<template>
  <Modal class="kit-modal" no-footer v-bind="$attrs" :width="width" v-on="$listeners">
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
import CrossIcon from '../Icon/CrossIcon'
import KitIconButton from '../Button/KitIconButton'
import KitButtonGroup from '../Button/KitButtonGroup'
import Header from './Header'
import Modal from './Modal'

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
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
}

.kit-modal >>> header {
  display: block;
}
</style>
