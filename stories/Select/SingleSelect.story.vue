<template>
  <div class="wrapper">
    <FieldGroup data-cy="field-group" label="Single Select">
      <Select v-model="value" data-cy="input-component" append-to-body :options="cities" placeholder="Select city..." />
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
import FieldGroup from '../../src/components/Form/FieldGroup.vue'
import { cities } from '../api-mocks/fake-data'
import Select from '@/components/Select/KitSelect.vue'

const value = ref()
</script>
<style scoped>
.wrapper {
  padding: 20px;
  width: 245px;
  overflow: hidden;
}
</style>
