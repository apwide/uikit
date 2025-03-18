<template>
  <div class="kit-calendar-header">
    <KitIconButton appearance="subtle" spacing="compact" @click="onPrev" title="Previous month">
      <KitIcon type="chevron-left" />
    </KitIconButton>
    <header>
      <Transition :name="transition">
        <strong :key="interval.header" class="interval" :interval="currentInterval" @click="changeInterval">
          {{ interval.header }}
        </strong>
      </Transition>
    </header>
    <KitIconButton appearance="subtle" spacing="compact" @click="onNext" title="Next month">
      <KitIcon type="chevron-right" />
    </KitIconButton>
  </div>
</template>

<script setup lang="ts">
import { addMonths, addYears, subMonths, subYears } from 'date-fns'
import KitIconButton from '../Button/KitIconButton'
import KitIcon from '../Icon/KitIcon'
import { computed, ref } from 'vue'

const DECADE = 10

type Props = {
  month: string
  year: number
  decade: string
  currentInterval?: string
}

const props = withDefaults(defineProps<Props>(), {
  currentInterval: 'days'
})

const transition = ref('slide-top')

const interval = computed(() => {
  switch (props.currentInterval) {
    case 'days':
      return {
        header: `${props.month} ${props.year}`,
        next: (t) => addMonths(t, 1),
        prev: (t) => subMonths(t, 1)
      }
    case 'months':
      return {
        header: props.year,
        next: (t) => addYears(t, 1),
        prev: (t) => subYears(t, 1)
      }
    default:
      return {
        header: props.decade,
        next: (t) => addYears(t, DECADE),
        prev: (t) => subYears(t, DECADE)
      }
  }
})

const emit = defineEmits<{
  (event: 'prev', data: Function)
  (event: 'next', data: Function)
  (event: 'change-interval', data: string)
}>()

function onNext() {
  transition.value = 'slide-right'
  emit('prev', interval.value.next)
}

function onPrev() {
  transition.value = 'slide-left'
  emit('next', interval.value.prev)
}

function changeInterval() {
  transition.value = 'slide-top'
  const interval = props.currentInterval === 'days' ? 'months' : 'years'
  emit('change-interval', interval)
}

</script>

<style scoped>
.kit-calendar-header {
  justify-content: stretch;
  align-items: center;
  display: flex;
  color: #172b4d;
  padding: 0 0 8px;
}

header {
  flex-grow: 1;
  text-align: center;
  font-size: 14px;
  overflow: hidden;
  position: relative;
  height: 20px;
}

strong {
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.interval[interval='years'] {
  cursor: default;
}

.slide-right-leave-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-left-enter-active,
.slide-top-leave-active,
.slide-top-enter-active {
  transition: all 0.4s;
}

.slide-right-enter {
  opacity: 0;
  transform: translate(300px, -50%);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translate(-300px, -50%);
}

.slide-left-enter {
  opacity: 0;
  transform: translate(-300px, -50%);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translate(300px, -50%);
}

.slide-top-enter {
  opacity: 0;
  transform: translate(-50%, -100%);
}

.slide-top-leave-to {
  opacity: 0;
  transform: translate(-50%, 100%);
}
</style>
