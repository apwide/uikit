<template>
  <Tooltip :label="tooltip" :placement="placement" :spacing="spacing" :disabled="hasTitle">
    <div class="content" :title="displayedTitle" @click.stop.prevent="onClick">
      <slot :copied="copied">
        <KitButton :appearance="appearance">
          <KitIcon v-if="!copied" :type="iconType" :size="iconSize" :icon-style="iconStyle" />
          <KitIcon v-else type="check" />
        </KitButton>
      </slot>
    </div>
  </Tooltip>
</template>

<script>
import KitButton from '../Button/KitButton.vue'
import KitIcon from '../Icon/KitIcon'
import Tooltip from '../Tooltip/Tooltip'
import SetToClipboard from './SetToClipboard'

export default {
  name: 'KitCopyToClipboard',
  components: { Tooltip, KitButton, KitIcon },
  props: {
    appearance: {
      type: String,
      default: 'subtle'
    },
    spacing: {
      type: String,
      default: 'subtle'
    },
    text: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'Copy to clipboard'
    },
    placement: {
      type: String,
      default: 'top'
    },
    iconType: {
      type: String,
      default: 'clone'
    },
    iconSize: {
      type: String
    },
    iconStyle: {
      type: String
    },
    title: {
      type: String
    }
  },
  data() {
    return {
      copied: false,
      timeout: undefined
    }
  },
  computed: {
    hasTitle() {
      return Boolean(this.title)
    },
    displayedTitle() {
      return this.copied ? 'Copied' : this.title
    },
    tooltip() {
      return this.copied ? 'Copied' : this.label
    }
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  methods: {
    onClick() {
      SetToClipboard(this.text)
      this.copied = true
      this.timeout = setTimeout(() => {
        this.copied = false
      }, 2000)
    }
  }
}
</script>

<style scoped>
.content {
  display: flex;
}
</style>
