<template>
  <div class="secure-string-line__view" style="">
    <div v-if="!obfuscated" class="string-line-wrapper" style="flex: 1" v-html="htmlValue || value" />
    <StringLineRenderer
      v-else
      :value="
        Array.from({ length: Math.min(value.length, 8) })
          .map(() => '•')
          .join('')
      "
      style="flex: 1" />
    <KitButtonGroup spacing="narrow" class="secure-string-line__icons">
      <CopyToClipboard :text="value" title="Copy to clipboard">
        <template #default="{ copied }">
          <KitIconButton class="secure-string-line__icon" title="Copy to clipboard">
            <KitIcon v-if="!copied" type="clone" icon-style="regular" />
            <KitIcon v-else type="check" />
          </KitIconButton>
        </template>
      </CopyToClipboard>
      <KitIconButton
        :title="eyeTitle"
        class="secure-string-line__icon"
        style="margin-right: 3px"
        @click.stop.prevent="toggleFieldType">
        <KitIcon v-if="obfuscated" type="eye" icon-style="regular" />
        <KitIcon v-else type="eye-slash" icon-style="regular" />
      </KitIconButton>
    </KitButtonGroup>
  </div>
</template>

<script>
import KitIconButton from '../Button/KitIconButton'
import KitButtonGroup from '../Button/KitButtonGroup'
import KitIcon from '../Icon/KitIcon'
import KitCopyToClipboard from '../CopyToClipboard/KitCopyToClipboard.vue'
import StringLineRenderer from './StringLineRenderer'

export default {
  name: 'KitSecureStringLineRenderer',
  components: {
    CopyToClipboard: KitCopyToClipboard,
    KitButtonGroup,
    KitIconButton,
    KitIcon,
    StringLineRenderer
  },
  props: {
    value: {
      type: String,
      default: undefined
    },
    htmlValue: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      obfuscated: true
    }
  },
  computed: {
    eyeTitle() {
      return this.obfuscated ? 'Reveal' : 'Hide'
    }
  },
  methods: {
    toggleFieldType() {
      this.obfuscated = !this.obfuscated
    }
  }
}
</script>

<style scoped>
.string-line-wrapper {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.string-line-wrapper:empty::after {
  content: '\feff';
  visibility: hidden;
}

.secure-string-line__view {
  display: flex;
  align-items: normal;
  justify-content: space-between;
  width: 100%;
  margin-right: -5px;
}

.secure-string-line__icons {
  margin-top: -4px;
  margin-bottom: -4px;
  opacity: 0;
}

.secure-string-line__view:hover .secure-string-line__icons {
  opacity: 1;
}
</style>
