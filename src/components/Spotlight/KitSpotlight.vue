<template>
  <div ref="me" class="kit-spotlight">
    <KitSpotlightMask v-if="elements.length" :elements="elements" :margin="margin">
      <KitSpotlightHintContainer :step="currentStep" :total="steps.length" @close="emit('close')" @go-to="goTo">
        <template v-if="stepSlotNames.includes(currentSlotName)">
          <slot :currentStep="currentStep + 1" :name="currentSlotName" />
        </template>
        <KitSpotlightStepHint v-else :title="title">
          <p v-for="p in paragraphs" :key="p">{{ p }}</p>
        </KitSpotlightStepHint>
      </KitSpotlightHintContainer>
    </KitSpotlightMask>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, useSlots, watch } from 'vue'
import KitSpotlightMask from '@components/Spotlight/KitSpotlightMask.vue'
import KitSpotlightHintContainer from '@components/Spotlight/KitSpotlightHintContainer.vue'
import KitSpotlightStepHint from '@components/Spotlight/KitSpotlightStepHint.vue'
import { KitSpotlightStep } from './spotlight-helpers'

type Props = {
  steps: KitSpotlightStep[]
}
const props = defineProps<Props>()
const emit = defineEmits<{
  (event: 'start')
  (event: 'close')
}>()
const slots = useSlots()
const me = ref<HTMLDivElement>()

const stepSlotNames = computed(() => Object.keys(slots).filter((key) => key.startsWith('step')))

const elements = ref<Element[]>([])
const margin = ref<number[]>([])
const currentStep = ref(0)

const title = computed(() => props.steps[currentStep.value].title)
const paragraphs = computed(() => props.steps[currentStep.value].p)
const currentSlotName = computed(() => `step${currentStep.value + 1}`)

async function goTo(newStepIndex: number) {
  if (newStepIndex < 0 || newStepIndex >= props.steps.length) {
    return
  }

  await props.steps[currentStep.value].cleanup?.()
  const newStop = props.steps[newStepIndex]
  await newStop.before?.()
  elements.value = newStop.elements()

  if (typeof newStop.margin === 'undefined') {
    margin.value = [10, 10]
  } else if (Array.isArray(newStop.margin)) {
    margin.value = newStop.margin
  } else {
    margin.value = [newStop.margin, newStop.margin]
  }

  currentStep.value = newStepIndex
}

function exit() {
  emit('close')
}

function onKeydown(event: KeyboardEvent) {
  if (event.ctrlKey) {
    return
  }
  event.stopPropagation()
  event.preventDefault()
  const code = event.code
  switch (code) {
    case 'ArrowRight':
    case 'Enter':
      goTo(currentStep.value + 1)
      break
    case 'ArrowLeft':
      goTo(currentStep.value - 1)
      break
    case 'Escape':
      emit('close')
  }
}

onMounted(async () => {
  document.body.style.position = 'fixed'
  document.addEventListener('keydown', onKeydown)
  window.addEventListener('hashchange', exit)
  goTo(0)
})

onBeforeUnmount(() => {
  document.body.style.position = 'static'
  document.removeEventListener('keydown', onKeydown)
  window.removeEventListener('hashchange', exit)
  if (me.value?.parentElement === document.body) {
    document.body.removeChild(me.value)
  }
  exit()
})

watch(
  me,
  (me) => {
    if (me) {
      document.body.appendChild(me)
    }
  },
  { immediate: true }
)
</script>

<style scoped>
p {
  padding: 0 !important;
  margin-top: 3px !important;
  margin-bottom: 3px !important;
}
</style>
