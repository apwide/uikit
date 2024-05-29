<template>
  <div>
    <div style="min-height: 2.4em">
      <slot />
    </div>
    <div class="kit-row kit-space-between kit-align-center">
      <span v-if="total" style="flex-shrink: 0">{{ step + 1 }} / {{ total }}</span>
      <div v-if="hasSteps" class="kit-row kit-align-center kit-xsmall-gap" style="justify-content: flex-end">
        <button v-if="!isLast" class="kit-unstyled-button" type="button" @click.stop.prevent="emit('close')">
          Dismiss
        </button>
        <button
          v-if="step !== 0"
          class="kit-unstyled-button"
          type="button"
          @click.stop.prevent="emit('go-to', step - 1)">
          Go back
        </button>
        <button class="kit-unstyled-button primary" type="button" @click="next(step + 1)">
          {{ nextLabel }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Props = {
  step?: number
  total?: number
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (event: 'go-to', newStep: number)
  (event: 'close')
}>()
const hasSteps = computed(() => typeof props.step === 'number')
const isLast = computed(() => props.step === props.total - 1)
const nextLabel = computed(() => (isLast.value ? 'Done' : 'Next'))

function next(nextStep) {
  if (isLast.value) {
    emit('close')
  } else {
    emit('go-to', nextStep)
  }
}
</script>

<style scoped>
.kit-row {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  flex-wrap: nowrap;
}
.kit-space-between {
  justify-content: space-between;
}
.kit-align-center {
  align-items: center;
}
.kit-xsmall-gap {
  gap: 0.4em;
}

button.kit-unstyled-button {
  all: unset;
  font: inherit;
  cursor: pointer;
  border-radius: 3px;
  padding: 5px 10px;
  background: none;
}

button.kit-unstyled-button.primary {
  background: #00000029;
}

button.kit-unstyled-button:hover {
  background: rgba(0, 0, 0, 0.24);
}

button.secondary:hover {
}
</style>
