<template>
  <div ref="targetRef" :disabled="isDisabled" class="select">
    <TextField
      :is-focused="focused"
      :is-invalid="isInvalid"
      :is-loading="isLoading"
      :select="select"
      class="select-wrapper"
      tabindex="-1"
      @click="click">
      <div ref="listRef" :gap="multi && hasSelection" class="flex-wrapper" @dragover.prevent>
        <template v-if="multi">
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
          :disabled="false"
          :style="{ width: currentWidth }"
          :value="search"
          class="search"
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
      <div v-if="hasSelection" class="text">
        <slot
          v-if="!search && hasSelection && $scopedSlots['selected'] && !multi"
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
        :is-selected="hasSelection"
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
      <SelectMenu
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
      </SelectMenu>
    </Popper>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, unref, watch } from 'vue'
import TextField from '../Form/TextField.vue'
import Popper from '../Popper/Popper.vue'
import SelectMenu from './SelectMenu.vue'
import Tag from './Tag.vue'
import Icons from './Icons.vue'

const INPUT_WIDTH = '5px'

type Option = {
  id: number | string
  label: string
  value: any
  disabled?: boolean
}

type Props = {
  value?: string | number | object | string[] | number[] | object[]
  options?: string[] | number[] | object[]
  placeholder?: string
  searchPromptText?: string
  multi?: boolean
  filterPredicate?: (label: string, input: string) => boolean
  normalizer?: (value: any) => Option
  isLoading?: boolean
  isFetching?: boolean
  isFocused?: boolean
  isInvalid?: boolean
  async?: boolean
  boundariesElement?: string
  noOptionsMessage?: string
  createable?: boolean
  isClearable?: boolean
  isValidOption?: (option: any) => boolean
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
  (event: 'input', value: string | number | object | string[] | number[] | object[])
  (event: 'search-change', value: string)
  (event: 'confirm', e: KeyboardEvent)
  (event: 'open')
  (event: 'close')
  (event: 'cancel')
  (event: 'error')
  (event: 'blur', e: FocusEvent)
  (event: 'focus', e: FocusEvent)
}>()

const isOpen = ref(false)
const search = ref('')
const focused = ref(false)
const currentSuggestionIndex = ref<number>()
const currentWidth = ref(INPUT_WIDTH)
const isDirty = ref(false)
const selectWidth = ref(props.fixedSelectWidth || 'auto')
const draggedElement = ref()
const prevIndex = ref<number>()
const dragging = ref(false)

const inputRef = ref<HTMLInputElement>()
const targetRef = ref<HTMLDivElement>()
const menuRef = ref()
const listRef = ref()

const selected = computed(() => {
  if (props.multi) {
    if (Array.isArray(props.value)) {
      return props.value.map((e) => props.normalizer(e))
    } else {
      return props.value ? [props.normalizer(props.value)] : []
    }
  } else {
    if (Array.isArray(props.value)) {
      return undefined
    } else {
      return props.normalizer(props.value)
    }
  }
})
const hasSelection = computed(() =>
  Array.isArray(selected.value) ? selected.value.length > 0 : Boolean(selected.value)
)
const normalizedOptions = computed(() => props.options.map((e) => props.normalizer(e)))
// Only used in the template when selected.length === 1
const input = computed(() => {
  if (!Array.isArray(selected.value)) {
    return search.value ? '' : selected.value.label
  }
  return ''
})
const nonSelectedSuggestions = computed(() =>
  Array.isArray(selected.value)
    ? normalizedOptions.value.filter((o) => !(selected.value as Option[]).find((selected) => o.id === selected.id))
    : normalizedOptions.value
)
const suggestions = computed(() => {
  if (search.value && !props.async) {
    return nonSelectedSuggestions.value.filter((option) => props.filterPredicate(option.label, search.value))
  }
  return nonSelectedSuggestions.value
})
const hasSuggestions = computed(() => suggestions.value && suggestions.value.length > 0)
const disabled = computed(() => props.multi && selected.value.filter((o) => o.disabled).map((o) => o.value))
const shouldBackspaceRemoveOption = computed(() => !props.isClearable || (props.multi && selected.value.length === 0))
const canRemoveLastTag = computed(() => !search.value && selected.value.length > props.min)
const canClearSelectedOption = computed(() => !search.value && !props.multi && selected.value)
const canCreateTag = computed(() => props.createable && search.value && selected.value.length < props.max)
const shouldOpenMenu = computed(() => {
  if (!isOpen.value || isDirty.value || props.createable) {
    return false
  }
  return props.max === Infinity || (selected.value as Option[]).length < props.max
})

const nonClearableOptions = computed(() => {
  if (props.multi) {
    const min = (selected.value as Option[]).slice(0, props.min).map((o) => o.value)
    return Array.from(new Set([...disabled.value, ...min]))
  }
  return undefined
})

const showClearIcon = computed(() => {
  if (props.multi) {
    return ((selected.value as Option[]) || []).length > props.min
  }
  return props.isClearable
})

watch(
  props,
  async (current, previous) => {
    if (!previous?.isFocused && current.isFocused) {
      await nextTick()
      if (inputRef.value) {
        inputRef.value.focus()
        await nextTick()
      }
    }
    if (!current.isFetching) {
      isDirty.value = false
    }
    if (!current.isLoading && previous?.isLoading && inputRef.value) {
      inputRef.value.focus()
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

watch(
  isOpen,
  (isOpen, oldIsOpen) => {
    if (!isOpen) {
      if (oldIsOpen) {
        currentSuggestionIndex.value = undefined
        emit('close')
      }
    } else {
      let width = props.dropdownWidth
      if (!width) {
        width = targetRef.value.getBoundingClientRect().width
      }
      selectWidth.value = props.fixedSelectWidth || `${width}px`
      emit('open')

      if (props.selectFirstEntry && hasSuggestions.value) {
        // default to enable selection of first entry
        currentSuggestionIndex.value = 0
      }
    }
  }
  // { immediate: true }
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

function onFocus(e: FocusEvent) {
  if (props.isLoading) {
    return
  }
  focused.value = true
  if (props.openOnFocus && targetRef.value && !targetRef.value?.contains(e.relatedTarget)) {
    isOpen.value = true
  }
  emit('focus', e)
}

function onBlur(e: FocusEvent) {
  if (!targetRef.value?.contains(e.relatedTarget)) {
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

function closeOptions() {
  isOpen.value = false
  focused.value = false
}

async function onClear() {
  search.value = ''
  emit('input', nonClearableOptions.value)
  isOpen.value = false
  await nextTick()
  inputRef.value?.focus()
}

async function onOptionSelected(option) {
  if (!props.keepFilterOnSelect) {
    search.value = ''
  }
  isOpen.value = props.keepOpenOnSelect || false
  focused.value = true

  const selectedValue = props.multi ? [...selected.value.map((e) => e.value), option.value] : option.value
  emit('input', selectedValue)
  if (!props.confirm && inputRef) {
    await nextTick()
    inputRef.value?.blur()
  }
}

function onInput({ target }) {
  search.value = target.value
  isOpen.value = true
  resize()
  updatePopperPosition()
}

async function onRemove(id) {
  const selections = unref(selected) as Option[]
  if (!selections.length) {
    return
  }
  const selectedValue = selections.filter((option) => option.id !== id || option.disabled).map((option) => option.value)
  updatePopperPosition()
  emit('input', selectedValue)
  await nextTick()
  updatePopperPosition()
}

function removeOption() {
  const selections = unref(selected) as Option[]
  if (shouldBackspaceRemoveOption.value) {
    return
  }
  if (canRemoveLastTag.value) {
    const { id } = selections[selections.length - 1]
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
  const selection = unref(selected) as Option[]
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
      const selectedValue = props.multi ? [...selection.map((e) => e.value), option.value] : option.value
      // `this.confirm` is bypassed
      emit('input', selectedValue)
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

async function onSuggestionSelected(e: KeyboardEvent) {
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
  inputRef.value.focus()
  await onOptionSelected(option)
}

async function resize() {
  await nextTick()
  if (inputRef.value) {
    currentWidth.value = `${inputRef.value.scrollWidth}px`
  }
}

function updatePopperPosition() {
  if (menuRef.value) {
    menuRef.value.update()
  }
}

function createTag() {
  const selections = unref(selected) as Option[]
  const selectedValue = props.multi ? [...selections.map((o) => o.value), search.value] : search.value
  search.value = ''
  emit('input', selectedValue)
}

function handleDrag(e: DragEvent) {
  if (!draggedElement.value) {
    return
  }
  const x = e.clientX
  const y = e.clientY
  draggedElement.value.classList.add('ghost')
  const el = document.elementFromPoint(x, y)
  let swapItem = el === null ? draggedElement.value : el.closest('[draggable="true"]')
  if (swapItem) {
    swapItem = swapItem !== draggedElement.value.nextSibling ? swapItem : swapItem.nextSibling
    listRef.value.insertBefore(draggedElement.value, swapItem)
  }
}

function onDragEnd() {
  const selections = unref(selected) as Option[]
  dragging.value = false
  const nextIndex = Array.from(listRef.value.children).indexOf(draggedElement.value)
  draggedElement.value.classList.remove('ghost')
  const list = [...selections]
  const [item] = list.splice(prevIndex.value, 1)
  list.splice(nextIndex, 0, item)
  emit(
    'input',
    list.map((e) => e.value)
  )
  inputRef.value.focus()
}
function onDragStart(e, index) {
  dragging.value = true
  isOpen.value = false
  draggedElement.value = e.target
  prevIndex.value = index
}
</script>
<style scoped>
.text {
  cursor: text;
  position: absolute;
  left: 6px;
  right: 45px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.select .select-wrapper {
  flex-wrap: wrap;
  padding: 6px 45px 6px 6px;
  justify-content: normal;
  outline: none;
}

.select-wrapper input {
  padding: 0;
}

.flex-wrapper {
  display: inline-flex;
  max-width: 100%;
  flex-wrap: wrap;
}

.flex-wrapper[gap] {
  margin-top: -4px;
}

.text [placeholder] {
  color: rgb(122, 134, 154);
}

.search {
  width: 100%;
  position: relative;
  z-index: 3;
}

[gap] .search {
  margin-top: 4px;
}

.ghost {
  opacity: 0.4;
  background-color: #fff;
  pointer-events: none;
}

.select[disabled] {
  opacity: 0.7;
  cursor: not-allowed;
}

.select[disabled] .select-wrapper {
  pointer-events: none;
}

.select ~ .select {
  margin-top: 20px;
}
</style>
