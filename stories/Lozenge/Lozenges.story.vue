<template>
  <div>
    <h3>Normal</h3>
    <p v-for="appearance in appearances">
      <KitLozenge :appearance="appearance" :key="appearance">
        {{ appearance }}
      </KitLozenge>
      <button style="all: unset; cursor: pointer">
        <KitLozenge :appearance="appearance"> {{ appearance }} (button) </KitLozenge>
      </button>
      with some text
    </p>
    <h3>Subtle</h3>
    <p v-for="appearance in appearances">
      <KitLozenge :appearance="appearance" subtle :key="appearance"> {{ appearance }} </KitLozenge> with some text
    </p>
    <h3>Long text</h3>
    <p>
      <KitLozenge> Lorem ipsum dolor sit amet consectetur adipisicing elit. </KitLozenge>
    </p>
  </div>
</template>

<script setup lang="ts">
import KitLozenge from '@components/Lozenge/KitLozenge.vue'

const appearances = ['default', 'success', 'yellow', 'removed', 'inprogress', 'new', 'moved', 'brown']
</script>
