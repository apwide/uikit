<template>
  <div>
    <KitFieldGroup data-cy="field-group" label="Simple version" required>
      <KitRadioGroup v-model="value" :values="availableValues" />
    </KitFieldGroup>
    <p>Current selected value: {{ value }}</p>

    <KitFieldGroup data-cy="field-group" label="With normalizer" required>
      <KitRadioGroup v-model="value" :values="availableValues" :normalizer="normalizer" />
    </KitFieldGroup>
    <p>Current selected value: {{ value }}</p>

    <KitFieldGroup data-cy="field-group" label="With default value" required>
      <KitRadioGroup v-model="defaultValue" :values="availableValues" :normalizer="normalizer" />
    </KitFieldGroup>
    <p>Current selected value: {{ defaultValue }}</p>
  </div>
</template>

<script setup lang="ts">
import faker from 'faker'
import KitRadioGroup from '../../src/components/Radio/KitRadioGroup'
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import { computed, ref } from 'vue'

const values = Array.from({ length: 10 }).map(() => faker.internet.email())

const value = ref('')
const defaultValue = ref(values[0])
const availableValues = computed(() => values)

function normalizer(value) {
  return {
    // the unique key
    key: value,
    // what will be displayed
    label: `Normalized ${value}`,
    // what will be return upon selection
    value
  }
}
</script>
