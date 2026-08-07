<template>
  <KitCheckbox v-model:checked="checked" class="kit-dropdown-checkbox-item" :value="value">
    <span class="label-text">
      <slot />
    </span>
    <KitButton
      v-if="isMulti && showOnlyButton"
      class="only-button"
      appearance="subtle"
      spacing="none"
      @click="onOnlyClicked">
      only
    </KitButton>
  </KitCheckbox>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import KitCheckbox from '../Checkbox/KitCheckbox.vue'
import KitButton from '../Button/KitButton.vue'

type Props = {
  value?: string
  showOnlyButton?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  value: undefined,
  showOnlyButton: true
})

const checked = defineModel<boolean | unknown[]>('checked', { required: true })

const isMulti = computed(() => Array.isArray(checked.value) && !!props.value)

function onOnlyClicked() {
  checked.value = [props.value]
}
</script>

<style scoped>
.kit-dropdown-checkbox-item {
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  background-color: var(--kit-dropdown-checkbox-bg);
  color: var(--kit-dropdown-checkbox-text);
  text-decoration: none;
  padding: 5px 12px 6px 7px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 40px;
}

.kit-dropdown-checkbox-item.kit-checkbox__wrapper {
  display: flex;
}

.kit-dropdown-checkbox-item:hover {
  background-color: var(--kit-dropdown-checkbox-hover-bg);
  color: var(--kit-dropdown-checkbox-hover-text);
  fill: var(--kit-dropdown-checkbox-hover-bg);
  text-decoration: none;
}

.kit-dropdown-checkbox-item :deep(.label) {
  overflow: hidden;
  display: flex;
  width: 100%;
}

.kit-dropdown-checkbox-item .label-text {
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
}

.kit-dropdown-checkbox-item .only-button {
  margin-left: auto;
  display: none;
}

.kit-dropdown-checkbox-item:hover .only-button {
  display: block;
}
</style>
