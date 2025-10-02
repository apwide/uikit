<template>
  <aside class="kit-bordered-panel">
    <div v-if="!noHeader" class="kit-bordered-panel__header">
      <div class="kit-bordered-panel__header-title kit-col kit-center-horizontally">
        <slot name="title">
          <span :title="headerFloatingTitle" class="kit-bordered-panel__title">{{ title }}</span>
        </slot>
      </div>
      <div v-if="$scopedSlots.actions" class="kit-bordered-panel__header-actions">
        <slot name="actions" />
      </div>
    </div>
    <div class="kit-bordered-panel__body" v-if="$slots.default">
      <slot />
    </div>
  </aside>
</template>

<script setup lang="ts">
type Props = {
  title?: string
  headerFloatingTitle?: string
  noHeader?: boolean
}

withDefaults(defineProps<Props>(), {
  noHeader: false
})
</script>

<style scoped>
.kit-bordered-panel {
  border: 1px solid var(--kit-bordered-panel-border);
  border-radius: 4px;
  margin-bottom: 8px;
}

.kit-bordered-panel__header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  color: var(--kit-bordered-panel-header-text);
  padding: 6px 12px;
  overflow: hidden;
  border-bottom: 1px solid var(--kit-bordered-panel-border);
}

.kit-bordered-panel__header-title {
  flex: 1;
  display: flex;
  align-self: center;
}

.kit-bordered-panel__title {
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
  padding: 5px 0;
}

.kit-bordered-panel__body {
  padding: 12px 12px 8px 12px;
}

.kit-bordered-panel__header-actions {
  /*margin-top: -5px;*/
  /*margin-bottom: -5px;*/
}

.kit-bordered-panel__body :deep(.kit-bordered-panel__row:last-child) {
  margin-bottom: 6px;
}
</style>
