<template>
  <button class="kit-tab-button" type="button" @click="onClick" :disabled="disabled"><slot /></button>
</template>
<script setup lang="ts">

import { inject } from 'vue'

type Props = {
  id: string | number
  disabled?: boolean
  stretch?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  stretch: false
})


function onClick() {
  if (!props.disabled && !props.inactive) {
    select(props.id)
  }
}

const select: () => void = inject('select', () => () => {
  // eslint-disable-next-line no-console
  console.error('TabKitButton: this component can only be used with KitTabProvider.')
})
inject('state', () => ({
  activeTab: undefined
}))

</script>

<style scoped>
.kit-tab-button {
  --kit-tab-button-text-color: rgb(66, 82, 110);
}

.kit-dark .kit-tab-button {
  --kit-tab-button-text-color: var(--kit-body-text);
}

button {
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  line-height: 1.8;
  margin: 0;
  text-align: left;
  text-decoration: none;
  color: var(--kit-tab-button-text-color);
  outline: none;
  padding: 4px 8px;
  min-width: 70px;
}

/*
[stretch] {
  flex-grow: 1;
}

button:not([inactive]):hover {
  color: #0052cc;
}

[active] {
  color: rgb(0, 82, 204);
}

[active]:after {
  content: '';
  border-radius: 2px;
  bottom: 0;
  margin: 0;
  position: absolute;
  width: inherit;
  left: 5px;
  right: 5px;
  border-bottom: 2px solid rgb(0, 82, 204);
  height: 0;
}

[inactive] {
  color: rgb(66, 82, 110);
  cursor: default;
}
*/
[disabled] {
  color: rgb(165, 173, 186);
  pointer-events: none;
}
</style>
