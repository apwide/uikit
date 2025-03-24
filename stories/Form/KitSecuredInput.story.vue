<template>
  <div>
    <KitFieldGroup data-cy="field-group" label="Label" required>
      <KitSecuredInput v-model="message" should-fit-container placeholder="Click here to input" />
      The message is: {{ message }}
    </KitFieldGroup>
    <KitFieldGroup label="Disabled input" required>
      <KitSecuredInput v-model="message" should-fit-container placeholder="Click here to input" disabled />
      The message is: {{ message }}
    </KitFieldGroup>
  </div>
</template>

<script setup lang="ts">
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import { ref } from 'vue'
import KitSecuredInput from '@/components/Form/KitSecuredInput'

const message = ref('')
</script>
<style scoped>
.icon {
  transform: translateY(25%);
}
</style>
