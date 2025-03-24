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

<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import KitButton from '../Button/KitButton.vue'
import KitIcon from '../Icon/KitIcon'
import Tooltip from '../Tooltip/Tooltip'
import SetToClipboard from './SetToClipboard'

type Props = {
  appearance?: string
  spacing?: string
  text?: string
  label?: string
  placement?: string
  iconType?: string
  iconSize?: string
  iconStyle?: string
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  appearance: 'subtle',
  spacing: 'subtle',
  text: '',
  label: 'Copy to clipboard',
  placement: 'top',
  iconType: 'clone'
})


const copied = ref(false)
const timeout = ref()

const hasTitle = computed(() => Boolean(props.title))
const displayedTitle = computed(() => copied.value ? 'Copied' : props.title)
const tooltip = computed(() => copied.value ? 'Copied' : props.label)

function onClick() {
  SetToClipboard(props.text)
  copied.value = true
  timeout.value = setTimeout(() => {
    copied.value = false
  }, 2000)
}

onBeforeUnmount(() => clearTimeout(timeout.value))
</script>

<style scoped>
.content {
  display: flex;
}
</style>
