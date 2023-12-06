<template>
  <div tabindex="-1" class="kit-time-picker-menu" style="height: 200px; overflow-y: scroll; padding-right: 10px">
    <div ref="me" style="display: flex; flex-direction: column">
      <KitButton
        tabindex="-1"
        :key="option"
        v-for="option in options"
        style="margin-left: 0px"
        appearance="subtle"
        :data-highlight="isHighlighted(option)"
        @mousemove.native="mouseOver"
        @click="onTimeSelected(option)">
        {{ option }}
      </KitButton>
    </div>
  </div>
</template>
<script>
import KitButton from '@components/KitButton/KitButton.vue'

function padStart(value, length, char) {
  while (`${value}`.length < length) {
    value = `${char}${value}`
  }
  return value
}

function findOption(htmlCollection, optionText) {
  for (let i = 0; i < htmlCollection.length; i++) {
    if (htmlCollection.item(i).innerText === optionText) {
      return htmlCollection.item(i)
    }
  }
  return null
}

export default {
  components: {
    KitButton
  },
  props: {
    value: {
      type: String
    }
  },
  data() {
    return {
      selectedOption: null,
      highlightedOption: null
    }
  },
  created() {
    window.addEventListener('keydown', this.onKeyDown)
  },
  destroyed() {
    window.removeEventListener('keydown', this.onKeyDown)
  },
  mounted() {
    this.selectedOption = findOption(this.$refs.me.children, this.value)
    setTimeout(() => this.highlightAndScrollTo(this.selectedOption), 30)
  },
  computed: {
    options() {
      const options = []
      for (let i = 0; i < 24; i++) {
        const hour = padStart(i, 2, 0)
        options.push(`${hour}:00`, `${hour}:30`)
      }
      return options
    }
  },
  watch: {
    value: function () {
      this.selectedOption = findOption(this.$refs.me.children, this.value)
      this.highlightAndScrollTo(this.selectedOption)
    }
  },
  methods: {
    onKeyDown(e) {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        e.stopPropagation()
        this.moveDown()
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        e.stopPropagation()
        this.moveUp()
      } else if (e.key === 'Enter') {
        e.preventDefault()
        e.stopPropagation()
        this.onTimeSelected(this.highlightedOption?.innerText)
      }
    },
    isHighlighted(optionValue) {
      return this.highlightedOption?.innerText === optionValue
    },
    mouseOver(e) {
      if (e.target !== this.highlightedOption) {
        this.highlight(e.target)
      }
    },
    moveDown() {
      if (!this.highlightedOption) {
        this.highlightAndScrollTo(this.$refs.me.children[0])
      } else {
        const newIndex = Array.from(this.$refs.me.children).indexOf(this.highlightedOption) + 1
        if (newIndex < this.$refs.me.children.length) {
          this.highlightAndScrollTo(this.$refs.me.children[newIndex])
        }
      }
    },
    highlightAndScrollTo(element) {
      this.highlight(element)
      if (element) {
        this.$refs.me.parentElement.scrollTop = element.offsetTop - element.getBoundingClientRect().height * 3
      }
    },
    highlight(element) {
      this.highlightedOption = element
    },
    moveUp() {
      if (!this.highlightedOption) {
        this.highlightAndScrollTo(this.$refs.me.children[this.$refs.me.children.length - 1])
      } else {
        const newIndex = Array.from(this.$refs.me.children).indexOf(this.highlightedOption) - 1
        if (newIndex > -1) {
          this.highlightAndScrollTo(this.$refs.me.children[newIndex])
        }
      }
    },
    onTimeSelected(value) {
      this.$emit('time-selected', value)
    }
  }
}
</script>
<style scoped>
.kit-time-picker-menu {
  height: 200px;
  overflow-y: scroll;
  padding-right: 10px;
}
.kit-time-picker-menu > div {
  display: flex;
  flex-direction: column;
}
.kit-time-picker-menu ul {
  list-style-type: none;
  padding: 0;
}
.kit-time-picker-menu li {
  cursor: pointer;
  text-align: center;
  padding: 3px 5px 3px 5px;
}
.kit-time-picker-menu li:hover {
  /*background-color: #ebecf0;*/
  /*border-color: #ebecf0;*/
  /*cursor: pointer;*/
}
.kit-time-picker-menu li[data-highlight='true'] {
  background-color: #ebecf0;
  border-color: #ebecf0;
}

.kit-time-picker-menu >>> button[appearance='subtle']:not([disabled]):not([selected]):not([data-highlight]):hover {
  background-color: unset;
}
.kit-time-picker-menu >>> button[data-highlight] {
  background-color: #ebecf0;
  border-color: #ebecf0;
}
</style>
