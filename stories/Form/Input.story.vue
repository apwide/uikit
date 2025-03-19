<template>
  <div>
    <KitFieldGroup data-cy="field-group" :errors="errors" label="Label" required>
      <KitInput v-model="message" should-fit-container placeholder="Click here to input" />
      The message is: {{ message }}
    </KitFieldGroup>
    <KitFieldGroup label="Label" :errors="errors" required>
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
    <KitFieldGroup label="Disabled input" :errors="errors" required>
      <KitInput v-model="message" should-fit-container placeholder="Click here to input" disabled />
      The message is: {{ message }}
    </KitFieldGroup>
    <KitFieldGroup label="Icon after" :errors="errors" required>
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
    <KitFieldGroup label="danger">
      <KitToggle v-model="danger" />
    </KitFieldGroup>
  </div>
</template>

<script setup lang="ts">
import KitInput from '@components/Form/KitInput.vue'
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import KitInlineDialog from '@components/InlineDialog/KitInlineDialog.vue'
import EditorInfoIcon from '@/components/Icon/aui/EditorInfoIcon'
import { computed, ref } from 'vue'
import KitToggle from '@components/Toggle/KitToggle.vue'

const message = ref('')
const number = ref('')
const danger = ref(false)

const errors = computed(() => danger.value ? ['This field is required. Try entering text in this field.'] : [])

</script>
<style scoped>
.icon {
  transform: translateY(25%);
}
</style>
