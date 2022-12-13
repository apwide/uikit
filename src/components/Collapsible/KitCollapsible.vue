<template>
  <div class="kit-collapsible">
    <slot :isCollapsed="isCollapsed" :toggle="toggle" name="trigger">
      <div style="margin-left: -4px">
        <KitButton
          appearance="subtle"
          class="kit-collapsible-trigger"
          spacing="none"
          style="font-size: 1rem"
          @click="toggle">
          <template #icon-before>
            <span style="width: 20px">
              <KitIcon v-if="isCollapsed" type="angle-right" />
              <KitIcon v-else type="angle-down" />
            </span>
          </template>
          {{ label }}
        </KitButton>
      </div>
    </slot>
    <div
      v-if="!isCollapsed"
      ref="content"
      :style="{ maxHeight: maxHeight, overflow: overflow }"
      class="kit-collapsible-content">
      <slot />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import KitButton from '../Button/Button'
import KitIcon from '../Icon/KitIcon'

export default Vue.extend({
  components: {
    KitButton,
    KitIcon
  },
  props: {
    label: {
      type: String,
      default: '',
      required: true
    },
    collapsed: {
      type: Boolean,
      default: true
    },
    storeState: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      maxHeight: '',
      overflow: 'hidden',
      storedCollapsed: this.collapsed,
      timeout: null
    }
  },
  computed: {
    key() {
      return `KitCollapsible ${this.label}`.replaceAll(/[\W]/g, '_')
    },
    isCollapsed() {
      if (this.storedCollapsed !== null) {
        return this.storedCollapsed
      }
      return this.collapsed
    }
  },
  created() {
    this.storedCollapsed = this.readFromSession()
    this.maxHeight = this.calculateMaxHeight(this.isCollapsed)
  },
  methods: {
    readFromSession() {
      if (!this.storeState) {
        return null
      }
      try {
        const storedValues = sessionStorage.getItem(this.key)
        if (storedValues) {
          return storedValues === 'collapsed'
        }
        return null
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn('uikit::KitCollapsible', e)
        return null
      }
    },
    writeToSession() {
      if (!this.storeState) {
        return
      }
      try {
        sessionStorage.setItem(this.key, this.isCollapsed ? 'collapsed' : 'expanded')
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn('uikit::KitCollapsible', e)
      }
    },
    async toggle() {
      clearTimeout(this.timeout)
      this.storedCollapsed = !this.isCollapsed
      this.overflow = this.storedCollapsed ? 'initial' : 'hidden'
      await this.$nextTick()
      this.writeToSession()
      this.timeout = setTimeout(() => {
        if (!this.isCollapsed) {
          this.overflow = 'initial'
          this.maxHeight = 'fit-content'
        }
      }, 50 + 400)
      setTimeout(() => {
        this.maxHeight = this.calculateMaxHeight(this.isCollapsed)
      }, 50)
    },
    calculateMaxHeight(isCollapsed) {
      if (this.$refs.content) {
        return isCollapsed ? '0px' : `${this.$refs.content.scrollHeight}px`
      }
      return isCollapsed ? '0px' : 'fit-content'
    }
  }
})
</script>
<style scoped>
.kit-collapsible {
  margin: 8px 0;
}

.kit-collapsible-content {
  transition: max-height 0.4s ease-in;
  margin-top: 10px;
  margin-left: 20px;
}

.kit-collapsible-trigger {
  font-weight: 700;
}
</style>
