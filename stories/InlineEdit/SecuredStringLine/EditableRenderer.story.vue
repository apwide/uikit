<template>
  <div style="max-width: 600px">
    <h5>Editable:</h5>
    <p>
      <SecureSingleLineEditableRenderer data-cy="editable" :value="value" @save-requested="onSave" />
    </p>
    <h5>Editable - callback with error:</h5>
    <p>
      <SecureSingleLineEditableRenderer data-cy="editable-error" :value="value" @save-requested="onSaveError" />
    </p>
    <h5>Limited width:</h5>
    <p class="limited-width">
      <SecureSingleLineEditableRenderer :value="value" @save-requested="onSave" />
    </p>
    <h5>Non-editable:</h5>
    <p>
      <SecureSingleLineEditableRenderer data-cy="non-editable" :value="value" :editable="false" />
    </p>
    <h5>Without confirmation:</h5>
    <p>
      <SecureSingleLineEditableRenderer
        :value="value"
        :confirm="false"
        align="end"
        :icon="false"
        type="number"
        @save-requested="onSave" />
    </p>
  </div>
</template>

<script>
import faker from 'faker'
import SecureSingleLineEditableRenderer from '../../../src/components/field-renderers/SecureStringLineEditableRenderer'

export default {
  components: { SecureSingleLineEditableRenderer },
  data() {
    faker.seed(1)
    return {
      value: faker.lorem.sentence()
    }
  },
  methods: {
    onSave(value, callback) {
      this.value = value
      callback()
    },

    onSaveError(value, callback) {
      callback(new Error('Something went wrong'))
    }
  }
}
</script>

<style scoped>
.limited-width {
  width: 300px;
}
</style>
