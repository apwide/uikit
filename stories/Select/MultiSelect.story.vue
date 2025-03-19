<template>
  <div class="wrapper">
    <KitFieldGroup class="multiselect" label="MultiSelect">
      <KitSelect v-model="basic" multi :options="cities" placeholder="Select city..." data-cy="multiselect-simple" />
    </KitFieldGroup>
  </div>
</template>

<script setup lang="ts">
import faker from 'faker'
import { ref } from 'vue'
import { many } from '../api-mocks/helpers'
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import KitSelect from '@/components/Select/KitSelect.vue'

const cities = many(faker.address.city)({}, 10)

const basic = ref([])
</script>
<style scoped>
.wrapper {
  padding: 20px;
}

.multiselect {
  max-width: 500px;
}
</style>
