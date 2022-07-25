<template>
  <div>
    <FieldGroup data-cy="field-group" label="Simple version" required>
      <KitRadioGroup v-model="value" :values="availableValues" />
    </FieldGroup>
    <p>Current selected value: {{ value }}</p>

    <FieldGroup data-cy="field-group" label="With normalizer" required>
      <KitRadioGroup v-model="value" :values="availableValues" :normalizer="normalizer" />
    </FieldGroup>
    <p>Current selected value: {{ value }}</p>

    <FieldGroup data-cy="field-group" label="With default value" required>
      <KitRadioGroup v-model="defaultValue" :values="availableValues" :normalizer="normalizer" />
    </FieldGroup>
    <p>Current selected value: {{ defaultValue }}</p>
  </div>
</template>

<script>
import faker from 'faker'
import KitRadioGroup from '../../src/components/Radio/KitRadioGroup'
import FieldGroup from '@/components/Form/FieldGroup'

const values = Array.from({ length: 10 }).map(() => faker.internet.email())

export default {
  name: 'InputStory',
  components: {
    KitRadioGroup,
    FieldGroup
  },
  data() {
    return {
      value: '',
      defaultValue: values[0]
    }
  },
  computed: {
    availableValues() {
      return values
    }
  },
  methods: {
    normalizer(value) {
      return {
        // the unique key
        key: value,
        // what will be displayed
        label: `Normalized ${value}`,
        // what will be return upon selection
        value
      }
    }
  }
}
</script>
