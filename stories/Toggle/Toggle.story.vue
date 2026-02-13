<template>
  <div>
    <h3>Default</h3>
    <KitToggle v-model="regular" data-cy="toggle" />
    &nbsp;
    <KitToggle v-model="large" size="large" />
    &nbsp;
    <KitToggle v-model="disabled" disabled />
    &nbsp;
    <KitToggle v-model="disabled" disabled size="large" />

    <h3>Primary</h3>
    <KitToggle v-model="regular" appearance="primary" />
    &nbsp;
    <KitToggle v-model="large" appearance="primary" size="large" />
    &nbsp;
    <KitToggle v-model="disabled" appearance="primary" disabled />
    &nbsp;
    <KitToggle v-model="disabled" appearance="primary" disabled size="large" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitToggle from '@/components/Toggle/KitToggle.vue'

const regular = ref(false)
const large = ref(false)
const disabled = ref(true)
</script>

<style scoped></style>
