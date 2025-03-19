<template>
  <div>
    <KitFieldGroup data-cy="field-group" label="Label" required>
      <KitKitInput v-model="message" should-fit-container placeholder="Click here to input" />
      The message is: {{ message }}
    </KitFieldGroup>
    <KitFieldGroup label="Label" required>
      <KitInput
        v-model="number"
        type="number"
        min="1"
        max="3"
        allowed-values="[^0-9\.]"
        should-fit-container
        placeholder="Click here to input" />
      The number is: {{ number }}
    </KitFieldGroup>
    <KitFieldGroup label="Disabled input" required>
      <KitInput v-model="message" should-fit-container placeholder="Click here to input" disabled />
      The message is: {{ message }}
    </KitFieldGroup>
    <KitFieldGroup label="Icon after" required>
      <template #after>
        <KitInlineDialog placement="right">
          <template v-slot:trigger="{ toggle }">
            <EditorInfoIcon class="icon" size="small" @click.native="toggle" />
          </template>
          <div class="content">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
        </KitInlineDialog>
      </template>
      <KitInput
        v-model="number"
        type="number"
        min="1"
        max="3"
        allowed-values="[^0-9\.]"
        should-fit-container
        placeholder="Click here to input" />
      The number is: {{ number }}
    </KitFieldGroup>
  </div>
</template>

<script setup lang="ts">
import KitInput from '@components/Form/KitInput.vue'
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import KitInlineDialog from '@components/InlineDialog/KitInlineDialog.vue'
import EditorInfoIcon from '@/components/Icon/aui/EditorInfoIcon'
import { ref } from 'vue'

const message = ref('')
const number = ref('')
</script>
<style scoped>
.icon {
  transform: translateY(25%);
}
</style>
