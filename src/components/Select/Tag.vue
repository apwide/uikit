<template>
  <div class="tag" draggable="true" @dragstart="onDragStart" @dragend.prevent="onDragEnd" @drag="onDrag">
    <slot>
      <div class="label">
        {{ tag.label }}
      </div>
    </slot>
    <div
      v-if="shouldShowRemoveButton"
      ref="remove"
      class="remove-tag"
      data-cy="remove-tag"
      @mousedown.prevent.stop
      @click.stop="onRemove">
      <EditorCloseIcon primary-color="var(--kit-tag-label)" size="xsmall" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted } from 'vue'
import EditorCloseIcon from '../Icon/aui/EditorCloseIcon'

type Props = {
  tag?: {
    id?: string | number
    disabled?: boolean
  }
  index: number
  count: number
  min?: number
}

const props = withDefaults(defineProps<Props>(), {
  tag: () => ({}),
  min: 0
})

const emit = defineEmits<{
  (event: 'drag', data: DragEvent)
  (event: 'on-remove', data: string | number)
  (event: 'dragstart', data: DragEvent)
  (event: 'dragend', data: DragEvent)
}>()

const shouldShowRemoveButton = computed(() => props.min !== props.count && !props.tag.disabled)

onMounted(() => {
  document.addEventListener('dragover', onDragOver) // https://bugzilla.mozilla.org/show_bug.cgi?id=505521
})

onBeforeUnmount(() => {
  document.removeEventListener('dragover', onDragOver)
})

function onDragOver(e) {
  emit('drag', e)
}

function onRemove() {
  emit('on-remove', props.tag.id)
}

function onDragStart(e) {
  emit('dragstart', e, props.index)
}

function onDragEnd(e) {
  emit('dragend', e)
}

function onDrag(e) {
  emit('drag', e)
}

</script>

<style scoped>
.tag {
  background-color: var(--kit-tag-bg);
  display: inline-flex;
  align-items: center;
  min-width: 0;
  box-sizing: border-box;
  color: var(--kit-tag-text);
  max-width: 100%;
  border-radius: 2px;
  margin: 4px 2px 0 2px;
  cursor: pointer;
  overflow: hidden;
}

.tag:last-of-type {
  margin-right: 5px;
}

.label {
  color: var(--kit-tag-label);
  font-size: 85%;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
  border-radius: 2px;
  overflow: hidden;
  padding: 2px 6px 2px 6px;
}

.remove-tag {
  display: flex;
  height: 100%;
  align-items: center;
  padding-left: 2px;
  padding-right: 2px;
  box-sizing: border-box;
  border-radius: 0px 2px 2px 0px;
}

.remove-tag:hover {
  background-color: var(--kit-tag-remove-bg);
  color: white;
}
</style>
