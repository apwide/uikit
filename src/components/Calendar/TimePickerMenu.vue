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
<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import KitButton from '../Button/KitButton.vue'

type Props = {
  value?: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (event: 'time-selected', data: string)
}>()

const selectedOption = ref<Element>()
const highlightedOption = ref<Element>()
const me = ref<HTMLDivElement>()

watch(() => props.value, value => {
  selectedOption.value = findOption(me.value.children, value)
  highlightAndScrollTo(selectedOption.value)
})

const options = computed(() => {
  const options = []
  for (let i = 0; i < 24; i++) {
    const hour = padStart(i, 2, 0)
    options.push(`${hour}:00`, `${hour}:30`)
  }
  return options
})

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
  selectedOption.value = findOption(me.value.children, props.value)
  setTimeout(() => highlightAndScrollTo(selectedOption.value), 30)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeyDown)
})

function padStart(value, length, char) {
  while (`${value}`.length < length) {
    value = `${char}${value}`
  }
  return value
}

function findOption(htmlCollection: HTMLCollection, optionText?: string) {
  for (let i = 0; i < htmlCollection.length; i++) {
    if (htmlCollection.item(i).innerText === optionText) {
      return htmlCollection.item(i)
    }
  }
  return null
}

function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    e.stopPropagation()
    moveDown()
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    e.stopPropagation()
    moveUp()
  } else if (e.key === 'Enter') {
    e.preventDefault()
    e.stopPropagation()
    onTimeSelected(highlightedOption.value?.innerText)
  }
}

function isHighlighted(optionValue) {
  return highlightedOption.value?.innerText === optionValue
}

function mouseOver(e: MouseEvent) {
  if (e.target !== highlightedOption.value) {
    highlight(e.target)
  }
}

function moveDown() {
  if (!highlightedOption.value) {
    highlightAndScrollTo(me.value.children[0])
  } else {
    const newIndex = Array.from(me.value.children).indexOf(highlightedOption.value) + 1
    if (newIndex < me.value.children.length) {
      highlightAndScrollTo(me.value.children[newIndex])
    }
  }
}

function highlightAndScrollTo(element: Element) {
  highlight(element)
  if (element) {
    me.value.parentElement.scrollTop = element.offsetTop - element.getBoundingClientRect().height * 3
  }
}

function highlight(element: Element) {
  highlightedOption.value = element
}

function moveUp() {
  if (!highlightedOption.value) {
    highlightAndScrollTo(me.value.children[me.value.children.length - 1])
  } else {
    const newIndex = Array.from(me.value.children).indexOf(highlightedOption.value) - 1
    if (newIndex > -1) {
      highlightAndScrollTo(me.value.children[newIndex])
    }
  }
}

function onTimeSelected(value) {
  emit('time-selected', value)
}

</script>
<style scoped>
.kit-time-picker-menu {
  --kit-time-picker-hover-color: #ebecf0;
  --kit-time-picker-selected-color: #A6C5E229;
}

[data-color-mode="dark"] .kit-time-picker-menu {
 --kit-time-picker-hover-color: #A1BDD914;
 --kit-time-picker-selected-color: #A6C5E229;
}

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
  background-color: var(--kit-time-picker-selected-color);
  border-color: var(--kit-time-picker-selected-color);
}

.kit-time-picker-menu >>> button[appearance='subtle']:not([disabled]):not([selected]):not([data-highlight]):hover {
  background-color: unset;
}
.kit-time-picker-menu >>> button[data-highlight] {
  background-color: var(--kit-time-picker-selected-color);
  border-color: var(--kit-time-picker-selected-color);
}
</style>
