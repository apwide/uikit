<template>
  <div
    tabindex="0"
    prevent-outline
    data-cy="view-content"
    class="kit-inline-edit-view-content"
    @keyup.enter="onEnter"
    @click="onClick"
    @mousedown="onMouseDown">
    <div class="kit-inline-edit-view-content__label" data-cy="label" tabindex="-1">
      <slot />
      <KitIconButton title="Edit this item" class="kit-inline-edit-view-content__pencil-icon">
        <KitIcon type="pen" style="font-size: 0.8rem" />
      </KitIconButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitIcon from '../Icon/KitIcon.vue'
import KitIconButton from '../Button/KitIconButton.vue'

const DRAG_THRESHOLD = 5

const emit = defineEmits<{
  (event: 'edit-requested')
}>()

const startX = ref(0)
const startY = ref(0)

function onMouseDown(e) {
  startX.value = e.clientX
  startY.value = e.clientY
}

function onEnter() {
  emit('edit-requested')
}

function onClick(e) {
  if (mouseHasMoved(e)) return
  emit('edit-requested')
}

function mouseHasMoved({ clientX, clientY }) {
  return Math.abs(startX.value - clientX) >= DRAG_THRESHOLD || Math.abs(startY.value - clientY) >= DRAG_THRESHOLD
}
</script>

<style scoped>
.kit-inline-edit-view-content {
  --kit-inline-edit-active-border: #4c9aff;
  --kit-inline-edit-label-hover-bg: #ebecf0;
}

[data-color-mode="dark"] .kit-inline-edit-view-content {
  --kit-inline-edit-active-border: #4c9aff;
  --kit-inline-edit-label-hover-bg: #282E33;
}

[prevent-outline] {
  outline: none;
}

.kit-inline-edit-view-content__label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border-radius: 3px;
  outline: none;
  border: transparent 1px solid;
  min-width: 44px;
  cursor: pointer;
  padding: 6px;
}

[align='end'] > .kit-inline-edit-view-content__label {
  justify-content: flex-end;
}

[compact] > .kit-inline-edit-view-content__label {
  padding: 0;
}

:focus > .kit-inline-edit-view-content__label {
  border: 1px solid var(--kit-inline-edit-active-border);
  background: transparent;
}

.kit-inline-edit-view-content__label:hover {
  background-color: var(--kit-inline-edit-label-hover-bg);
}

.kit-inline-edit-view-content__pencil-icon {
  font-size: initial;
  opacity: 0;
  margin: -6px -5px;
}

.view-content:not([icon]) .kit-inline-edit-view-content__pencil-icon {
  display: none;
}

.kit-inline-edit-view-content__label:hover .kit-inline-edit-view-content__pencil-icon {
  opacity: 1;
}
</style>
