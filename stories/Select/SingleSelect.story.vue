<template>
  <div class="wrapper">
    <KitFieldGroup data-cy="field-group" label="Single Select">
      <KitSelect v-model="value" data-cy="input-component" append-to-body :options="cities" placeholder="Select city..." />
    </KitFieldGroup>
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
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import { cities } from '../api-mocks/fake-data'
import KitSelect from '@/components/Select/KitSelect.vue'

const value = ref()
</script>
<style scoped>
.wrapper {
  padding: 20px;
  width: 245px;
  overflow: hidden;
}
</style>
