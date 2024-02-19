<template>
  <div class="wrapper">
    <FieldGroup class="createable" label="Createable">
      <KitSelect v-model="value" data-cy="simple" createable multi placeholder="Type something and press enter..." />
    </FieldGroup>
    <FieldGroup class="createable" label="Limited number of tags">
      <KitSelect v-model="value" data-cy="limited" :max="3" createable multi placeholder="Maximum 3 elements.." />
    </FieldGroup>
    <FieldGroup class="createable" label="Minimum number of elements, plus validation">
      <KitSelect
        v-model="minmax"
        data-cy="validated"
        multi
        createable
        :is-valid-option="validateTimer"
        :min="1"
        :max="3"
        placeholder="KitSelect city..." />
    </FieldGroup>
    <table>
      <thead>
        <tr>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitSelect from '@components/Select/KitSelect.vue'
import FieldGroup from '../../src/components/Form/FieldGroup.vue'

const value = ref([])
const minmax = ref([10])

function validateTimer(value) {
  return /^\d+$/.test(value)
}
</script>
<style scoped>
.wrapper {
  padding: 20px;
}

.createable {
  max-width: 500px;
}
</style>
