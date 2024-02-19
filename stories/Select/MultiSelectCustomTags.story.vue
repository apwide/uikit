<template>
  <div class="wrapper">
    <FieldGroup class="multiselect" label="Custom Tags">
      <KitSelect v-model="value" :multi="true" :options="cities" placeholder="select item">
        <template #tag="{ tag }">
          <span class="custom-tag">🌈 {{ tag.value }}</span>
        </template>
      </KitSelect>
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
import faker from 'faker'
import { ref } from 'vue'
import KitSelect from '@components/Select/KitSelect.vue'
import { many } from '../api-mocks/helpers'
import FieldGroup from '../../src/components/Form/FieldGroup'

const cities = many(faker.address.city)({}, 10)
const [city] = cities

const value = ref([city])
</script>
<style scoped>
.wrapper {
  padding: 20px;
}

.multiselect {
  max-width: 500px;
}

.custom-tag {
  color: magenta;
  font-size: 85%;
  font-weight: bold;
  text-transform: uppercase;
  padding: 2px;
}
</style>
