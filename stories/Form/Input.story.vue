<template>
  <div>
    <FieldGroup data-cy="field-group" label="Label" required>
      <Input v-model="message" should-fit-container placeholder="Click here to input" />
      The message is: {{ message }}
    </FieldGroup>
    <FieldGroup label="Label" required>
      <Input
        v-model="number"
        type="number"
        min="1"
        max="3"
        allowed-values="[^0-9\.]"
        should-fit-container
        placeholder="Click here to input" />
      The number is: {{ number }}
    </FieldGroup>
    <FieldGroup label="Disabled input" required>
      <Input v-model="message" should-fit-container placeholder="Click here to input" disabled />
      The message is: {{ message }}
    </FieldGroup>
    <FieldGroup label="Icon after" required>
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
      <Input
        v-model="number"
        type="number"
        min="1"
        max="3"
        allowed-values="[^0-9\.]"
        should-fit-container
        placeholder="Click here to input" />
      The number is: {{ number }}
    </FieldGroup>
  </div>
</template>

<script setup lang="ts">
import Input from '@/components/Form/Input'
import FieldGroup from '@/components/Form/FieldGroup'
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
