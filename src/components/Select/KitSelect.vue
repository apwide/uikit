<template>
  <div ref="targetRef" :disabled="isDisabled" class="kit-select">
    <TextField
      :is-focused="focused"
      :is-invalid="isInvalid"
      :is-loading="isLoading"
      :select="select"
      class="kit-select-wrapper"
      tabindex="-1"
      @click="click">
      <div ref="listRef" :gap="multi && !!selected.length" class="kit-select__flex-wrapper" @dragover.prevent>
        <template v-if="multi && Array.isArray(selected)">
          <Tag
            v-for="(tag, i) in selected"
            :key="`${tag.id}-${i}`"
            :count="selected.length"
            :index="i"
            :min="min"
            :tag="tag"
            :class="tag.class"
            data-cy="tag"
            @drag="handleDrag"
            @dragend="onDragEnd"
            @dragstart="onDragStart"
            @on-remove="onRemove">
            <slot :tag="tag" name="tag" />
          </Tag>
        </template>
        <input
          ref="inputRef"
          :disabled="isDisabled"
          :style="{ width: currentWidth }"
          :value="search"
          class="kit-select__search"
          @blur="onBlur"
          @focus="onFocus"
          @input="onInput"
          @keydown.down.prevent="onNextSuggestion"
          @keydown.up.prevent="onPreviousSuggestion"
          @keydown.tab="onTab"
          @keydown.enter="onSuggestionSelected"
          @keyup.esc="onEsc"
          @keydown.delete="removeOption" />
      </div>
      <div v-if="!selected.length" class="kit-select__text">
        <slot
          v-if="!search && selected.value && $scopedSlots['selected'] && !multi"
          :selected="selected.value"
          name="selected" />
        <span v-else :placeholder="!search && !selected.label">
          {{ input }}
        </span>
      </div>
      <Icons
        :createable="createable"
        :is-clearable="showClearIcon"
        :is-fetching="isFetching"
        :is-selected="isAnyOptionSelected"
        @clear="onClear">
        <slot name="icon" />
      </Icons>
    </TextField>
    <Popper
      v-if="shouldOpenMenu"
      ref="menuRef"
      :boundaries-element="boundariesElement"
      :offset="[0, 0]"
      :target-element="targetRef"
      placement="bottom-start">
      <KitSelectMenu
        :append-to-body="appendToBody"
        :async="async"
        :contains-query="!!search"
        :current-suggestion-index="currentSuggestionIndex"
        :has-suggestions="hasSuggestions"
        :is-fetching="isFetching"
        :no-options-message="noOptionsMessage"
        :options="suggestions"
        :placeholder="searchPromptText"
        :selected="selected"
        :style="{ width: selectWidth }"
        data-cy="select-menu"
        @mouseover="onMouseOverSuggestion"
        @update-popper-position="updatePopperPosition"
        @option-selected="onOptionSelected">
        <template #option="{ option, isCurrent }">
          <slot :is-current="isCurrent" :option="option" name="option" />
        </template>
        <slot name="custom-action" />
      </KitSelectMenu>
    </Popper>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, unref, watch } from 'vue'
import { Value } from '@components/Select/types'
import TextField from '../Form/TextField.vue'
import Popper from '../Popper/Popper.vue'
import KitSelectMenu from './KitSelectMenu.vue'
import Tag from './Tag.vue'
import Icons from './Icons.vue'

const INPUT_WIDTH = '5px'

type Props = {
  value?: string | number | string[] | number[] | object | object[]
  options?: unknown[]
  placeholder?: string
  searchPromptText?: string
  multi?: boolean
  filterPredicate?: (label: string, input: string) => string
  normalizer?: (value: unknown) => Value<unknown>
  isLoading?: boolean
  isFetching?: boolean
  isFocused?: boolean
  isInvalid?: boolean
  async?: boolean
  boundariesElement?: string
  noOptionsMessage?: string
  createable?: boolean
  isClearable?: boolean
  isValidOption?: (option: string) => boolean
  min?: number
  max?: number
  appendToBody?: boolean
  select?: boolean
  isDisabled?: boolean
  fixedSelectWidth?: string
  openOnFocus?: boolean
  keepOpenOnSelect?: boolean
  keepFilterOnSelect?: boolean
  confirm?: boolean
  dropdownWidth?: number
  selectFirstEntry?: boolean
  allowTabToSelect?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
  options: () => [],
  placeholder: 'Type to search...',
  searchPromptText: 'Type to search...',
  multi: false,
  filterPredicate: (label = '', input = '') => label.toString().toLowerCase().includes(input.toLowerCase().trim()),
  normalizer: (value) => ({
    id: value,
    label: value,
    value,
    disabled: false
  }),
  isLoading: false,
  isFetching: false,
  isFocused: false,
  isInvalid: false,
  async: false,
  boundariesElement: 'viewport',
  noOptionsMessage: 'No options',
  createable: false,
  isClearable: true,
  isValidOption: () => true,
  min: 0,
  max: Infinity,
  appendToBody: false,
  select: true,
  isDisabled: false,
  openOnFocus: false,
  keepOpenOnSelect: false,
  keepFilterOnSelect: false,
  confirm: true,
  selectFirstEntry: false,
  allowTabToSelect: false
})

const emit = defineEmits<{
  (event: 'search-change', value: string)
  (event: 'close')
  (event: 'open')
  (event: 'cancel')
  (event: 'confirm', e: KeyboardEvent)
  (event: 'error')
  (event: 'focus', e: FocusEvent)
  (event: 'blur', e: FocusEvent)
  (event: 'input', e: string | number | object | string[] | number[] | object[])
}>()

const isOpen = ref(false)
const search = ref('')
const focused = ref(false)
const currentSuggestionIndex = ref<number>()
const currentWidth = ref(INPUT_WIDTH)
const isDirty = ref(false)
const selectWidth = ref(props.fixedSelectWidth || 'auto')
const draggedElement = ref()
const dragging = ref(false)
const prevIndex = ref<number>()

const selected = computed<Value<unknown> | Value<unknown>[]>(() =>
  props.multi ? (props.value as unknown[]).map((e) => props.normalizer(e)) : props.normalizer(props.value)
)
const normalizedOptions = computed(() => props.options.map((e) => props.normalizer(e)))
const input = computed(() => (search.value ? '' : selected.value?.label || props.placeholder))

const nonSelectedSuggestions = computed(() =>
  props.multi
    ? normalizedOptions.value.filter((option) => !selected.value.find((selected) => option.id === selected.id))
    : normalizedOptions.value
)

const suggestions = computed(() => {
  if (search.value && !props.async) {
    return nonSelectedSuggestions.value.filter((option) => props.filterPredicate(option.label, search.value))
  }
  return nonSelectedSuggestions.value
})

const hasSuggestions = computed(() => suggestions.value && suggestions.value.length > 0)

const isAnyOptionSelected = computed(
  () => (props.multi && !!selected.value.filter((o) => !o.disabled).length) || !!selected.value.value
)

const disabled = computed(() => props.multi && selected.value.filter((o) => o.disabled).map((o) => o.value))

const shouldBackspaceRemoveOption = computed(() => !props.isClearable || (props.multi && selected.value.length === 0))

const canRemoveLastTag = computed(() => !search.value && selected.value.length > props.min)

const canClearSelectedOption = computed(() => !search.value && !props.multi && selected.value)

const canCreateTag = computed(() => props.createable && search.value && selected.value.length < props.max)

const shouldOpenMenu = computed(
  () =>
    isOpen.value && !isDirty.value && !props.createable && (props.max === Infinity || selected.value.length < props.max)
)

const nonClearableOptions = computed(() => {
  if (props.multi) {
    const min = selected.value.slice(0, props.min).map((o) => o.value)
    return Array.from(new Set([...disabled.value, ...min]))
  }
  return undefined
})

const showClearIcon = computed(() => {
  if (props.multi) {
    return selected.value.length > props.min
  }
  return props.isClearable
})

const inputRef = ref<HTMLInputElement>()
const targetRef = ref<HTMLElement>()
const menuRef = ref<typeof Popper>()
const listRef = ref<HTMLDivElement>()

function onFocus(e: FocusEvent) {
  if (props.isLoading) {
    return
  }
  focused.value = true
  if (props.openOnFocus && targetRef.value && !targetRef.value.contains(e.relatedTarget as Node)) {
    isOpen.value = true
  }
  emit('focus', e)
}

function createTag() {
  const s = props.multi ? [...selected.value.map((o) => o.value), search.value] : search.value
  search.value = ''
  emit('input', s)
}

function closeOptions() {
  isOpen.value = false
  focused.value = false
}

function onBlur(e: FocusEvent) {
  if (targetRef.value && !targetRef.value.contains(e.relatedTarget as Node)) {
    if (canCreateTag.value) {
      createTag()
    }
    search.value = ''
    closeOptions()
    emit('blur', e)
  }
}

function click() {
  isOpen.value = !isOpen.value
  inputRef.value?.focus()
}

function onEsc() {
  isOpen.value = false
  emit('cancel')
}

async function onClear() {
  search.value = ''
  emit('input', nonClearableOptions.value)
  isOpen.value = false
  await nextTick()
  inputRef.value?.focus()
}

async function onOptionSelected(option: Value<unknown>) {
  if (!props.keepFilterOnSelect) {
    search.value = ''
  }
  isOpen.value = props.keepOpenOnSelect || false
  focused.value = true
  const s = props.multi ? [...selected.value.map((e) => e.value), option.value] : option.value
  emit('input', s)
  if (!props.confirm && inputRef.value) {
    await nextTick()
    inputRef.value?.blur()
  }
}

async function resize() {
  await nextTick()
  if (inputRef.value) {
    currentWidth.value = `${inputRef.value.scrollWidth}px`
  }
}

function updatePopperPosition() {
  menuRef.value?.update()
}

async function onInput({ target }) {
  search.value = target.value
  isOpen.value = true
  await resize()
  updatePopperPosition()
}

async function onRemove(id: string) {
  const selectedValues = unref(selected) as Value<unknown>[]
  if (!selectedValues.length) {
    return
  }
  const s = selectedValues
    .filter((option: Value<unknown>) => option.id !== id || option.disabled)
    .map((option: Value<unknown>) => option.value)
  updatePopperPosition()
  emit('input', s)
  await nextTick()
  updatePopperPosition()
}

function removeOption() {
  if (shouldBackspaceRemoveOption.value) {
    return
  }
  if (canRemoveLastTag.value) {
    const selectedValues = unref(selected) as Value<unknown>[]

    const { id } = selected.value[selectedValues.length - 1]
    onRemove(id)
  } else if (canClearSelectedOption.value) {
    emit('input', undefined)
  }
}

function onNextSuggestion() {
  if (!isOpen.value) {
    isOpen.value = true
  }
  if (!hasSuggestions.value) {
    currentSuggestionIndex.value = undefined
    return
  }
  if (currentSuggestionIndex.value === undefined) {
    currentSuggestionIndex.value = 0
  } else {
    currentSuggestionIndex.value += 1
    if (currentSuggestionIndex.value > suggestions.value.length - 1) {
      currentSuggestionIndex.value = 0
    }
  }
}

function onPreviousSuggestion() {
  if (!isOpen.value) {
    isOpen.value = true
  }
  if (!hasSuggestions.value) {
    currentSuggestionIndex.value = undefined
    return
  }
  if (currentSuggestionIndex.value === undefined) {
    currentSuggestionIndex.value = suggestions.value.length - 1
  } else {
    currentSuggestionIndex.value -= 1
    if (currentSuggestionIndex.value < 0) {
      currentSuggestionIndex.value = suggestions.value.length - 1
    }
  }
}

function onTab(e) {
  if (props.allowTabToSelect && isOpen.value) {
    if (!currentSuggestionIndex.value || suggestions.value.length <= currentSuggestionIndex.value) {
      if (suggestions.value.length === 1 || props.selectFirstEntry) {
        currentSuggestionIndex.value = 0
      }
    }

    if (
      typeof currentSuggestionIndex.value !== 'undefined' &&
      currentSuggestionIndex.value < suggestions.value.length
    ) {
      const option = suggestions.value[currentSuggestionIndex.value]
      const s = props.multi ? [...(selected.value as Value<unknown>[]).map((e) => e.value), option.value] : option.value
      // `this.confirm` is bypassed
      emit('input', s)
      e.preventDefault()

      if (!props.keepFilterOnSelect) {
        search.value = ''
      }
    } else {
      e.preventDefault()
    }
  }
}

function onMouseOverSuggestion(id) {
  currentSuggestionIndex.value = id
}

async function onSuggestionSelected(e) {
  // if current index is undefined, means we don't want to select any value, just submit
  if (currentSuggestionIndex.value === undefined && !canCreateTag.value) {
    emit('confirm', e)
    return
  }
  if (canCreateTag.value) {
    if (!props.isValidOption(search.value)) {
      emit('error')
      return
    }
    createTag()
  }
  e.preventDefault()

  if (!hasSuggestions.value && isOpen.value) {
    return
  }

  const option = suggestions.value[currentSuggestionIndex.value]
  currentSuggestionIndex.value = undefined
  await nextTick()
  inputRef.value?.focus()
  onOptionSelected(option)
}

function handleDrag(e) {
  if (!draggedElement.value) {
    return
  }
  const x = e.clientX
  const y = e.clientY
  const dragged = unref(draggedElement)
  dragged.classList.add('kit-select__ghost')
  const el = document.elementFromPoint(x, y)
  let swapItem = el === null ? dragged : el.closest('[draggable="true"]')
  if (swapItem) {
    swapItem = swapItem !== dragged.nextSibling ? swapItem : swapItem.nextSibling
    listRef.value?.insertBefore(dragged, swapItem)
  }
}

function onDragEnd() {
  dragging.value = false
  const nextIndex = Array.from(listRef.value.children).indexOf(draggedElement.value)
  draggedElement.value.classList.remove('kit-select__ghost')
  const list = [...selected.value]
  const [item] = list.splice(prevIndex.value, 1)
  list.splice(nextIndex, 0, item)
  emit(
    'input',
    list.map((e) => e.value)
  )
  inputRef.value?.focus()
}

function onDragStart(e, index) {
  dragging.value = true
  isOpen.value = false
  draggedElement.value = e.target
  prevIndex.value = index
}

watch(
  () => props.isFocused,
  async (isFocused) => {
    if (isFocused) {
      await nextTick()
      if (inputRef.value) {
        inputRef.value.click()
      }
    }
  },
  { immediate: true }
)

watch(search, (search) => {
  if (!search) {
    currentWidth.value = INPUT_WIDTH
  }
  if (props.async && search) {
    isDirty.value = true
  }
  emit('search-change', search)
})

watch(isOpen, (open) => {
  if (!open) {
    currentSuggestionIndex.value = undefined
    emit('close')
  } else {
    let width = props.dropdownWidth
    if (!width && targetRef.value) {
      width = targetRef.value?.getBoundingClientRect().width
    }
    selectWidth.value = props.fixedSelectWidth || `${width}px`
    emit('open')
    if (props.selectFirstEntry && hasSuggestions.value) {
      // default to enable selection of first entry
      currentSuggestionIndex.value = 0
    }
  }
})

watch(
  () => props.isFetching,
  (isFetching) => {
    if (!isFetching) {
      isDirty.value = false
    }
  }
)

watch(
  () => props.isLoading,
  (next, prev) => {
    if (!next && prev && inputRef.value) {
      inputRef.value.blur()
    }
  }
)

watch(suggestions, async () => {
  if (props.selectFirstEntry) {
    if (hasSuggestions.value) {
      // default to enable selection of first entry
      currentSuggestionIndex.value = 0
    } else {
      currentSuggestionIndex.value = undefined
    }
  }
  await nextTick()
  updatePopperPosition()
})
</script>
<style scoped>
.kit-select__text {
  cursor: text;
  position: absolute;
  left: 6px;
  right: 45px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.kit-select .kit-select-wrapper {
  flex-wrap: wrap;
  padding: 6px 45px 6px 6px;
  justify-content: normal;
  outline: none;
}

.kit-select-wrapper input {
  padding: 0;
}

.kit-select__flex-wrapper {
  display: inline-flex;
  max-width: 100%;
  flex-wrap: wrap;
}

.kit-select__flex-wrapper[gap] {
  margin-top: -4px;
}

.kit-select__text [placeholder] {
  color: rgb(122, 134, 154);
}

.kit-select__search {
  width: 100%;
  position: relative;
  z-index: 3;
}

[gap] .kit-select__search {
  margin-top: 4px;
}

.kit-select__ghost {
  opacity: 0.4;
  background-color: #fff;
  pointer-events: none;
}

.kit-select[disabled] {
  opacity: 0.7;
  cursor: not-allowed;
}

.kit-select[disabled] .kit-select-wrapper {
  pointer-events: none;
}

.kit-select ~ .kit-select {
  margin-top: 20px;
}
</style>
