<template>
  <div>
    <KitButton @click="showSpolight = true">Start</KitButton>
    <KitDropdown label="Drop down menu" ref="menuRef">
      <KitDropdownItem data-cy="simple-dropdown-item"> First item </KitDropdownItem>
      <KitDropdownItem>Second item</KitDropdownItem>
      <KitDropdownItem disabled> Lorem ipsum dolor sit amet consectetur adipisicing elit </KitDropdownItem>
    </KitDropdown>
    <KitSpotlight v-if="showSpolight" :steps="steps" @close="showSpolight = false" />
  </div>
</template>

<script setup lang="ts">
import KitSpotlight from '@components/Spotlight/KitSpotlight.vue'
import { Component, ref } from 'vue'
import KitDropdown from '@components/Dropdown/KitDropdown.vue'
import { KitSpotlightStep } from '@components/Spotlight/spotlight-helpers'
import KitDropdownItem from '@components/Dropdown/KitDropdownItem.vue'
import KitButton from '@components/Button/KitButton.vue'

const showSpolight = ref(false)
const menuRef = ref<Component>()

const steps: KitSpotlightStep[] = [
  {
    elements() {
      return [menuRef.value.$el]
    },
    title: 'Step 1',
    p: ['Click on next and the dropdown will open.', 'The spotlight will shift to contain the opened dropdown.']
  },
  {
    before() {
      return new Promise((resolve) => {
        console.log('printed before step 2')
        menuRef.value.$el.querySelector('button').click()
        let count = 0
        const interval = setInterval(() => {
          if (count > 50) {
            console.log('Something is broken')
            clearInterval(interval)
          } else if (document.querySelector('.kit-popup')) {
            clearInterval(interval)
            resolve()
          }
          count += 1
        }, 100)
      })
    },
    elements() {
      return [menuRef.value.$el, document.querySelector('.kit-popup')]
    },
    cleanup() {
      return new Promise((resolve) => {
        if (document.querySelector('.kit-popup')) {
          menuRef.value.$el.querySelector('button').click()
        }
        let count = 0
        const interval = setInterval(() => {
          if (count > 50) {
            console.log('Something is broken')
            clearInterval(interval)
          } else if (!document.querySelector('.kit-popup')) {
            clearInterval(interval)
            resolve()
          }
          count += 1
        }, 100)
      })
    },
    title: 'Step 2',
    p: [
      'Each step enables to run action before (before) and after (cleanup)',
      'All action done in before should be undone in cleanup to allow smooth transition between steps.'
    ]
  },
  {
    elements() {
      return [menuRef.value.$el]
    },
    title: 'Step 3',
    p: ['Thanks for watching!']
  }
]
</script>

<style scoped>
.hint * {
  color: white;
}
</style>
