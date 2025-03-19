<template>
  <KitFieldGroup label="Label" required>
    <KitTextArea rows="5" v-model="value" />
  </KitFieldGroup>
</template>

<script setup lang="ts">
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import KitTextArea from '@components/Form/KitTextArea.vue'
import { ref } from 'vue'

const value = ref('candy')
</script>
