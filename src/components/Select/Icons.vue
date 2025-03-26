<template>
  <div class="icons">
    <KitSpinner v-if="isFetching" class="spinner-icon" size="icon" />
    <Clear
      v-if="shouldShowClearIcon"
      size="xsmall"
      class="clear-icon"
      primary-color="#A5ADBA"
      @click.native="onClear" />
    <slot>
      <Caret v-if="!createable" size="xsmall" />
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import KitSpinner from '../Spinner/KitSpinner.vue'
import Caret from '../Icon/aui/HipchatChevronDownIcon'
import Clear from '../Icon/aui/EditorErrorIcon'

type Props = {
  isFetching?: boolean
  isSelected?: boolean
  createable?: boolean
  isClearable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isFetching: false,
  isSelected: false,
  createable: false,
  isClearable: false
})

const emit = defineEmits<{
  (event: 'clear')
}>()

const shouldShowClearIcon = computed(() => props.isSelected && !props.isFetching && props.isClearable)
function onClear() {
  emit('clear')
}
</script>

<style scoped>
.icons {
  display: inline-flex;
  align-items: center;
  position: absolute;
  right: 6px;
}

.clear-icon,
.spinner-icon {
  margin-right: 3px;
}

.clear-icon:hover {
  cursor: pointer;
}
</style>
