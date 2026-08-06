<template>
  <div>
    <h5>Editable:</h5>
    <p>
      <KitStringLineEditableRenderer data-cy="editable" :value="value" @save-requested="onSave" />
    </p>
    <h5>Editable - callback with error:</h5>
    <p>
      <KitStringLineEditableRenderer data-cy="editable-error" :value="value" @save-requested="onSaveError" />
    </p>
    <h5>Limited width:</h5>
    <p class="limited-width">
      <KitStringLineEditableRenderer :value="value" @save-requested="onSave" />
    </p>
    <h5>Non-editable:</h5>
    <p>
      <KitStringLineEditableRenderer data-cy="non-editable" :value="value" :editable="false" />
    </p>
    <h5>Without confirmation:</h5>
    <p>
      <KitStringLineEditableRenderer
        :value="value"
        :confirm="false"
        align="end"
        :icon="false"
        type="number"
        @save-requested="onSave" />
    </p>
    <h5>Custom renderer</h5>
    <p>Useful when value is to be presented differently than just text</p>
    <p>
      <KitStringLineEditableRenderer :value="value" @save-requested="onSave">
        <KitLozenge>{{ value }}</KitLozenge>
      </KitStringLineEditableRenderer>
    </p>
    <h5>Custom renderer (when none-editable)</h5>
    <p>
      <KitStringLineEditableRenderer :editable="false" @save-requested="onSave">
        <KitLozenge>{{ value }}</KitLozenge>
      </KitStringLineEditableRenderer>
    </p>
    <h5>In a bigger parent element</h5>
    <div style="font-weight: 500; font-size: 20px">
      <KitStringLineEditableRenderer :value="value" @save-requested="onSave">
        {{ value }}
      </KitStringLineEditableRenderer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import KitLozenge from '@components/Lozenge/KitLozenge.vue'
import { ref } from 'vue'
import KitStringLineEditableRenderer from '@/components/field-renderers/KitStringLineEditableRenderer.vue'

faker.seed(1)

const value = ref(faker.lorem.sentence())

function onSave(v, callback) {
  value.value = v
  callback()
}

function onSaveError(value, callback) {
  callback(new Error('Something went wrong'))
}
</script>

<style scoped>
.limited-width {
  width: 300px;
}
</style>
