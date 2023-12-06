<template>
  <div class="kit-calendar-header">
    <KitIconButton appearance="subtle" spacing="compact" @click="onPrev" title="Previous month">
      <KitIcon type="chevron-left" />
    </KitIconButton>
    <header>
      <transition :name="transition">
        <strong :key="interval.header" class="interval" :interval="currentInterval" @click="changeInterval">
          {{ interval.header }}
        </strong>
      </transition>
    </header>
    <KitIconButton appearance="subtle" spacing="compact" @click="onNext" title="Next month">
      <KitIcon type="chevron-right" />
    </KitIconButton>
  </div>
</template>

<script>
import { addMonths, addYears, subMonths, subYears } from 'date-fns'
import KitIconButton from '@components/KitButton/KitIconButton.vue'
import KitIcon from '../Icon/KitIcon.vue'

const DECADE = 10

export default {
  name: 'KitCalendarHeader',
  components: { KitIcon, KitIconButton },
  props: {
    month: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    decade: {
      type: String,
      required: true
    },
    currentInterval: {
      type: String,
      default: 'days'
    }
  },
  data() {
    return {
      transition: 'slide-top'
    }
  },
  computed: {
    interval() {
      switch (this.currentInterval) {
        case 'days':
          return {
            header: `${this.month} ${this.year}`,
            next: (t) => addMonths(t, 1),
            prev: (t) => subMonths(t, 1)
          }
        case 'months':
          return {
            header: this.year,
            next: (t) => addYears(t, 1),
            prev: (t) => subYears(t, 1)
          }
        default:
          return {
            header: this.decade,
            next: (t) => addYears(t, DECADE),
            prev: (t) => subYears(t, DECADE)
          }
      }
    }
  },
  methods: {
    onNext() {
      this.transition = 'slide-right'
      this.$emit('prev', this.interval.next)
    },
    onPrev() {
      this.transition = 'slide-left'
      this.$emit('next', this.interval.prev)
    },
    changeInterval() {
      this.transition = 'slide-top'
      const interval = this.currentInterval === 'days' ? 'months' : 'years'
      this.$emit('change-interval', interval)
    }
  }
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
