<template>
  <div v-if="visible">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'

type Props = {
  id?: string | number
}

const props = defineProps<Props>()

const state = inject('state')
const visible = computed(() => String(state.activeTab) === String(props.id))
</script>
