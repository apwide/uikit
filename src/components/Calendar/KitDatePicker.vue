<template>
  <div ref="datePicker" class="kit-date-picker" @click.stop>
    <KitTextField
      :is-focused="focused"
      :is-loading="isLoading"
      :disabled="disabled || isLoading"
      :is-invalid="isInvalid"
      select
      @mousedown="toggle">
      <input
        ref="input"
        :value="formattedDate"
        type="text"
        width="50%"
        placeholder="e.g. 31/12/2018"
        :disabled="disabled || isLoading"
        v-bind="forwardedAttrs"
        @keydown.enter="onEnter"
        @input="onInput"
        @keyup.esc="onEsc"
        @focus="onFocus"
        @blur="onBlur" />
      <KitIcon type="calendar-alt" icon-style="regular" class="kit-icon" />
    </KitTextField>
    <Popup :is-open="isOpen" :target-element="datePicker" placement="bottom-start" data-cy="select-menu">
      <Calendar
        :value="selectedDate"
        :disabled-range="disabledRange"
        :time-zone="timeZone"
        @date-selected="onDateSelected" />
    </Popup>
  </div>
</template>

<script setup lang="ts">
import { format, fromUnixTime, parse, isValid } from 'date-fns'
import { toZonedTime, fromZonedTime } from 'date-fns-tz'
import { computed, ref, useAttrs } from 'vue'
import type { DateRange } from '@components/Calendar/CalendarType'
import KitTextField from '../Form/KitTextField.vue'
import Popup from '../common/Popup'
import KitIcon from '../Icon/KitIcon'
import Calendar from './Calendar'

const MILISECONDS_IN_SECOND = 1000

type Props = {
  isFocused?: boolean
  isLoading?: boolean
  isInvalid?: boolean
  dateFormat?: string
  disabledRange?: DateRange
  disabled?: boolean
  timeZone?: string
}

const props = withDefaults(defineProps<Props>(), {
  isFocused: false,
  isLoading: false,
  isInvalid: false,
  dateFormat: 'dd/MM/y',
  disabledRange: () => ({ from: undefined, to: undefined }),
  disabled: false
})

const emit = defineEmits<{
  (event: 'confirm', data: KeyboardEvent)
  (event: 'focus', data: FocusEvent)
  (event: 'blur', data: FocusEvent)
}>()

const modelValue = defineModel<number | string>()

const datePicker = ref<HTMLDivElement>()
const input = ref<HTMLInputElement>()
const focused = ref(false)
const isOpen = ref(false)

const valid = computed(() => modelValue.value && isValid(modelValue.value))

const formattedDate = computed(() => {
  if (!valid.value) {
    return ''
  }
  const date = toZonedTime(modelValue.value, props.timeZone)
  return format(date, props.dateFormat)
})

const attrs = useAttrs()
const forwardedAttrs = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onFocus, onBlur, onInput, ...rest } = attrs
  return rest
})

const selectedDate = computed({
  get() {
    if (!valid.value) {
      return undefined
    }
    return fromUnixTime(modelValue.value / MILISECONDS_IN_SECOND)
  },
  set(date) {
    modelValue.value = date
  }
})

function onInput(e) {
  const timestamp = parse(e.target.value, props.dateFormat, new Date()).getTime()
  if (e.target.value.length === 0) {
    selectedDate.value = undefined
  } else if (!Number.isNaN(timestamp)) {
    const formatted = format(timestamp, props.dateFormat)
    if (e.target.value !== formatted) return
    const date = new Date(timestamp)
    copyTime(date)
    const utcDate = fromZonedTime(date, props.timeZone)
    selectedDate.value = utcDate.getTime()
  }
}

function copyTime(date) {
  if (selectedDate.value) {
    const v = new Date(selectedDate.value)
    date.setHours(v.getHours())
    date.setMinutes(v.getMinutes())
    date.setSeconds(v.getSeconds())
  }
}

function toggle() {
  isOpen.value = !isOpen.value
}

function onEsc() {
  isOpen.value = false
}

function onEnter(e) {
  emit('confirm', e)
}

function onFocus(e) {
  if (!datePicker.value.contains(e.relatedTarget)) {
    focused.value = true
    isOpen.value = true
    emit('focus', e)
  }
}

function onBlur(e) {
  if (!datePicker.value.contains(e.relatedTarget)) {
    focused.value = false
    isOpen.value = false
    emit('blur', e)
  } else if (e.relatedTarget.getAttribute('tabindex') === '-1') {
    input.value.focus()
  }
}

function onDateSelected(date) {
  isOpen.value = false
  selectedDate.value = Date.parse(date)
  input.value.focus()
}

</script>
<style scoped>
.kit-icon {
  padding-right: 8px !important;
}
</style>
