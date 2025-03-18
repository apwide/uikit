<template>
  <div ref="datePicker" class="kit-date-picker" @click.stop>
    <TextField
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
        v-on="listeners"
        @keydown.enter="onEnter"
        @input="onInput"
        @keyup.esc="onEsc"
        @focus="onFocus"
        @blur="onBlur" />
      <KitIcon type="calendar-alt" icon-style="regular" class="kit-icon" />
    </TextField>
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
import format from 'date-fns/format'
import { fromUnixTime, parse, isValid } from 'date-fns'
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz'
import TextField from '../Form/TextField'
import Popup from '../common/Popup'
import KitIcon from '../Icon/KitIcon'
import Calendar from './Calendar'
import { computed, getCurrentInstance, ref } from 'vue'

const MILISECONDS_IN_SECOND = 1000

type Props = {
  value?: number | string
  isFocused?: boolean
  isLoading?: boolean
  isInvalid?: boolean
  dateFormat?: string
  disabledRange?: { from: any, to: any }
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
  (event: 'input', data: Date)
  (event: 'confirm', data: KeyboardEvent)
  (event: 'focus', data: FocusEvent)
  (event: 'blur', data: FocusEvent)
}>()

const datePicker = ref<HTMLDivElement>()
const input = ref<HTMLInputElement>()
const focused = ref(false)
const isOpen = ref(false)

const valid = computed(() => props.value && isValid(props.value))

const formattedDate = computed(() => {
  if (!valid.value) {
    return ''
  }
  const date = utcToZonedTime(props.value, props.timeZone)
  return format(date, props.dateFormat)
})

const instance = getCurrentInstance()
const listeners = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { focus, blur, input, ...listeners } = instance.proxy.$listeners
  return listeners
})

const selectedDate = computed({
  get() {
    if (!valid.value) {
      return undefined
    }
    return fromUnixTime(props.value / MILISECONDS_IN_SECOND)
  },
  set(date) {
    emit('input', date)
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
    const utcDate = zonedTimeToUtc(date, props.timeZone)
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
