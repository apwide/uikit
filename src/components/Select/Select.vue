<template>
  <div ref="target" :disabled="isDisabled" class="select">
    <TextField
      :is-focused="focused"
      :is-invalid="isInvalid"
      :is-loading="isLoading"
      :select="select"
      class="select-wrapper"
      tabindex="-1"
      @click="click">
      <div ref="list" :gap="multi && !!selected.length" class="flex-wrapper" @dragover.prevent>
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
          ref="input"
          :disabled="isDisabled"
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
      <div v-if="!selected.length" class="text">
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
      ref="menu"
      :boundaries-element="boundariesElement"
      :offset="[0, 0]"
      :target-element="$refs.target"
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
        <slot slot="option" slot-scope="{ option, isCurrent }" :is-current="isCurrent" :option="option" name="option" />
        <slot name="custom-action" />
      </SelectMenu>
    </Popper>
  </div>
</template>

<script>
import TextField from '../Form/TextField'
import Popper from '../Popper/Popper'
import SelectMenu from './SelectMenu'
import Tag from './Tag'
import Icons from './Icons'

const INPUT_WIDTH = '5px'

export default {
  name: 'KitSelect',
  components: {
    TextField,
    Popper,
    SelectMenu,
    Tag,
    Icons
  },
  props: {
    value: {
      type: [String, Number, Object, Array],
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: 'Type to search...'
    },
    searchPromptText: {
      type: String,
      default: 'Type to search...'
    },
    multi: {
      type: Boolean,
      default: false
    },
    filterPredicate: {
      type: Function,
      default: (label = '', input = '') => label.toString().toLowerCase().includes(input.toLowerCase().trim())
    },
    normalizer: {
      type: Function,
      default: (value) => ({
        id: value,
        label: value,
        value,
        disabled: false
      })
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isFetching: {
      type: Boolean,
      default: false
    },
    isFocused: {
      type: Boolean,
      default: false
    },
    isInvalid: {
      type: Boolean,
      default: false
    },
    async: {
      type: Boolean,
      default: false
    },
    boundariesElement: {
      type: String,
      default: 'viewport'
    },
    noOptionsMessage: {
      type: String,
      default: 'No options'
    },
    createable: {
      type: Boolean,
      default: false
    },
    isClearable: {
      type: Boolean,
      default: true
    },
    isValidOption: {
      type: Function,
      default: () => true
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: Infinity
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    select: {
      type: Boolean,
      default: true
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    fixedSelectWidth: {
      type: String
    },
    openOnFocus: {
      type: Boolean,
      default: false
    },
    keepOpenOnSelect: {
      type: Boolean,
      default: false
    },
    keepFilterOnSelect: {
      type: Boolean,
      default: false
    },
    confirm: {
      type: Boolean,
      default: true
    },
    dropdownWidth: {
      type: Number,
      default: undefined
    },
    selectFirstEntry: {
      type: Boolean,
      default: false
    },
    allowTabToSelect: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: false,
      search: '',
      focused: false,
      currentSuggestionIndex: undefined,
      currentWidth: INPUT_WIDTH,
      isDirty: false,
      selectWidth: this.fixedSelectWidth || 'auto',
      draggedElement: undefined,
      prevIndex: undefined,
      nextIndex: undefined
    }
  },
  computed: {
    selected() {
      return this.multi ? this.value.map((e) => this.normalizer(e)) : this.normalizer(this.value)
    },

    normalizedOptions() {
      return this.options.map((e) => this.normalizer(e))
    },

    input() {
      return this.search ? '' : this.selected.label || this.placeholder
    },

    nonSelectedSuggestions() {
      return this.multi
        ? this.normalizedOptions.filter((option) => !this.selected.find((selected) => option.id === selected.id))
        : this.normalizedOptions
    },

    suggestions() {
      if (this.search && !this.async) {
        return this.nonSelectedSuggestions.filter((option) => this.filterPredicate(option.label, this.search))
      }
      return this.nonSelectedSuggestions
    },

    hasSuggestions() {
      return this.suggestions && this.suggestions.length > 0
    },

    isAnyOptionSelected() {
      return (this.multi && !!this.selected.filter((o) => !o.disabled).length) || !!this.selected.value
    },

    disabled() {
      return this.multi && this.selected.filter((o) => o.disabled).map((o) => o.value)
    },

    shouldBackspaceRemoveOption() {
      return !this.isClearable || (this.multi && this.selected.length === 0)
    },

    canRemoveLastTag() {
      return !this.search && this.selected.length > this.min
    },

    canClearSelectedOption() {
      return !this.search && !this.multi && this.selected
    },

    canCreateTag() {
      return this.createable && this.search && this.selected.length < this.max
    },

    shouldOpenMenu() {
      return (
        this.isOpen && !this.isDirty && !this.createable && (this.max === Infinity || this.selected.length < this.max)
      )
    },

    nonClearableOptions() {
      if (this.multi) {
        const min = this.selected.slice(0, this.min).map((o) => o.value)
        return Array.from(new Set([...this.disabled, ...min]))
      }
      return undefined
    },

    showClearIcon() {
      if (this.multi) {
        return this.selected.length > this.min
      }
      return this.isClearable
    }
  },
  watch: {
    isFocused: {
      handler(isFocused) {
        if (isFocused) {
          this.$nextTick(() => {
            if (this.$refs.input) {
              this.$refs.input.focus()
            }
          })
        }
      },
      immediate: true
    },

    search() {
      if (!this.search) this.currentWidth = INPUT_WIDTH
      if (this.async && this.search) this.isDirty = true
      this.$emit('search-change', this.search)
    },

    isOpen(open) {
      if (!open) {
        this.currentSuggestionIndex = undefined
        this.$emit('close')
      } else {
        const { width } = this.dropdownWidth || this.$refs.target.getBoundingClientRect()
        this.selectWidth = this.fixedSelectWidth || `${width}px`
        this.$emit('open')

        if (this.selectFirstEntry && this.hasSuggestions) {
          // default to enable selection of first entry
          this.currentSuggestionIndex = 0
        }
      }
    },

    isFetching(isFetching) {
      if (!isFetching) {
        this.isDirty = false
      }
    },

    isLoading(next, prev) {
      if (!next && prev && this.$refs.input) {
        this.$refs.input.blur()
      }
    },

    suggestions() {
      if (this.selectFirstEntry) {
        if (this.hasSuggestions) {
          // default to enable selection of first entry
          this.currentSuggestionIndex = 0
        } else {
          this.currentSuggestionIndex = undefined
        }
      }
      this.$nextTick(() => this.updatePopperPosition())
    }
  },
  methods: {
    onFocus(e) {
      if (this.isLoading) return
      this.focused = true
      if (this.openOnFocus && this.$refs.target && !this.$refs.target.contains(e.relatedTarget)) {
        this.isOpen = true
      }
      this.$emit('focus', e)
    },

    onBlur(e) {
      if (this.$refs.target && !this.$refs.target.contains(e.relatedTarget)) {
        if (this.canCreateTag) {
          this.createTag()
        }
        this.search = ''
        this.closeOptions()
        this.$emit('blur', e)
      }
    },

    click() {
      this.isOpen = !this.isOpen
      this.$refs.input.focus()
    },

    onEsc() {
      this.isOpen = false
      this.$emit('cancel')
    },

    closeOptions() {
      this.isOpen = false
      this.focused = false
    },

    onClear() {
      this.search = ''
      this.$emit('input', this.nonClearableOptions)
      this.isOpen = false
      this.$nextTick(() => this.$refs.input.focus())
    },

    onOptionSelected(option) {
      if (!this.keepFilterOnSelect) {
        this.search = ''
      }
      this.isOpen = this.keepOpenOnSelect || false
      this.focused = true
      const selected = this.multi ? [...this.selected.map((e) => e.value), option.value] : option.value
      this.$emit('input', selected)
      if (!this.confirm && this.$refs.input) {
        this.$nextTick(() => this.$refs.input.blur())
      }
    },

    onInput({ target }) {
      this.search = target.value
      this.isOpen = true
      this.resize()
      this.updatePopperPosition()
    },

    onRemove(id) {
      if (!this.selected.length) return
      const selected = this.selected
        .filter((option) => option.id !== id || option.disabled)
        .map((option) => option.value)
      this.updatePopperPosition()
      this.$emit('input', selected)
      this.$nextTick(() => this.updatePopperPosition())
    },

    removeOption() {
      if (this.shouldBackspaceRemoveOption) return
      if (this.canRemoveLastTag) {
        const { id } = this.selected[this.selected.length - 1]
        this.onRemove(id)
      } else if (this.canClearSelectedOption) {
        this.$emit('input', undefined)
      }
    },

    onNextSuggestion() {
      if (!this.isOpen) this.isOpen = true
      if (!this.hasSuggestions) {
        this.currentSuggestionIndex = undefined
        return
      }
      if (this.currentSuggestionIndex === undefined) {
        this.currentSuggestionIndex = 0
      } else {
        this.currentSuggestionIndex += 1
        if (this.currentSuggestionIndex > this.suggestions.length - 1) {
          this.currentSuggestionIndex = 0
        }
      }
    },

    onPreviousSuggestion() {
      if (!this.isOpen) this.isOpen = true
      if (!this.hasSuggestions) {
        this.currentSuggestionIndex = undefined
        return
      }
      if (this.currentSuggestionIndex === undefined) {
        this.currentSuggestionIndex = this.suggestions.length - 1
      } else {
        this.currentSuggestionIndex -= 1
        if (this.currentSuggestionIndex < 0) {
          this.currentSuggestionIndex = this.suggestions.length - 1
        }
      }
    },

    onTab(e) {
      if (this.allowTabToSelect && this.isOpen) {
        if (!this.currentSuggestionIndex || this.suggestions.length <= this.currentSuggestionIndex) {
          if (this.suggestions.length === 1 || this.selectFirstEntry) {
            this.currentSuggestionIndex = 0
          }
        }

        if (typeof this.currentSuggestionIndex !== 'undefined' && this.currentSuggestionIndex < this.suggestions.length) {
          const option = this.suggestions[this.currentSuggestionIndex]
          const selected = this.multi ? [...this.selected.map((e) => e.value), option.value] : option.value
          // `this.confirm` is bypassed
          this.$emit('input', selected)
          e.preventDefault()

          if (!this.keepFilterOnSelect) {
            this.search = ''
          }
        } else {
          e.preventDefault()
        }
      }
    },

    onMouseOverSuggestion(id) {
      this.currentSuggestionIndex = id
    },

    onSuggestionSelected(e) {
      // if current index is undefined, means we don't want to select any value, just submit
      if (this.currentSuggestionIndex === undefined && !this.canCreateTag) {
        this.$emit('confirm', e)
        return
      }
      if (this.canCreateTag) {
        if (!this.isValidOption(this.search)) {
          this.$emit('error')
          return
        }
        this.createTag()
      }
      e.preventDefault()

      if (!this.hasSuggestions && this.isOpen) {
        return
      }

      const option = this.suggestions[this.currentSuggestionIndex]
      this.currentSuggestionIndex = undefined
      this.$nextTick(() => {
        this.$refs.input.focus()
        this.onOptionSelected(option)
      })
    },

    resize() {
      this.$nextTick(() => {
        if (this.$refs.input) {
          this.currentWidth = `${this.$refs.input.scrollWidth}px`
        }
      })
    },

    updatePopperPosition() {
      if (this.$refs.menu) {
        this.$refs.menu.update()
      }
    },

    createTag() {
      const selected = this.multi ? [...this.selected.map((o) => o.value), this.search] : this.search
      this.search = ''
      this.$emit('input', selected)
    },

    handleDrag(e) {
      if (!this.draggedElement) {
        return
      }
      const x = e.clientX
      const y = e.clientY
      this.draggedElement.classList.add('ghost')
      const el = document.elementFromPoint(x, y)
      let swapItem = el === null ? this.draggedElement : el.closest('[draggable="true"]')
      if (swapItem) {
        swapItem = swapItem !== this.draggedElement.nextSibling ? swapItem : swapItem.nextSibling
        this.$refs.list.insertBefore(this.draggedElement, swapItem)
      }
    },
    onDragEnd() {
      this.dragging = false
      const nextIndex = Array.from(this.$refs.list.children).indexOf(this.draggedElement)
      this.draggedElement.classList.remove('ghost')
      const list = [...this.selected]
      const [item] = list.splice(this.prevIndex, 1)
      list.splice(nextIndex, 0, item)
      this.$emit(
        'input',
        list.map((e) => e.value)
      )
      this.$refs.input.focus()
    },
    onDragStart(e, index) {
      this.dragging = true
      this.isOpen = false
      this.draggedElement = e.target
      this.prevIndex = index
    }
  }
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
