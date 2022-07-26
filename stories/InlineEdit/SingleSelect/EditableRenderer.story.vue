<template>
  <div class="wrapper">
    <h5>Editable:</h5>
    <p>
      <SingleSelectEditableRenderer :value="selectedValue" :allowed-values="allowedValues" @save-requested="onSave" />
    </p>
    <h5>Editable - callback with error:</h5>
    <p>
      <SingleSelectEditableRenderer
        :value="selectedValue"
        :allowed-values="allowedValues"
        @save-requested="onSaveError" />
    </p>
    <h5>Limited width:</h5>
    <p class="limited-width">
      <SingleSelectEditableRenderer :value="selectedValue" :allowed-values="allowedValues" @save-requested="onSave" />
    </p>
    <h5>Non-editable:</h5>
    <p>
      <SingleSelectEditableRenderer :value="selectedValue" :allowed-values="allowedValues" :editable="false" />
    </p>
    <h5>With complex objects</h5>
    <p>
      <SingleSelectEditableRenderer
        :normalizer="normalizer"
        :value="complexSelectedValue"
        :allowed-values="complexAllowedValues"
        :editable="true"
        @save-requested="saveComplexSelection" />
    </p>
  </div>
</template>

<script>
import faker from 'faker'
import SingleSelectEditableRenderer from '@/components/field-renderers/SingleSelectEditableRenderer'

const allowedValues = Array.from({ length: 10 }, () => faker.lorem.word())
const [selected] = allowedValues

const complexAllowedValues = allowedValues.map((value, key) => ({ key, value }))
const [complexSelectedValue] = complexAllowedValues

export default {
  components: { SingleSelectEditableRenderer },
  data() {
    faker.seed(1)
    return {
      selectedValue: selected,
      allowedValues,
      complexAllowedValues,
      complexSelectedValue
    }
  },
  methods: {
    normalizer(valueToNormalize) {
      return {
        id: valueToNormalize.key,
        label: valueToNormalize.value,
        value: valueToNormalize
      }
    },
    onSave(value, callback) {
      this.selectedValue = value
      callback()
    },
    saveComplexSelection(value, callback) {
      this.complexSelectedValue = value
      setTimeout(() => {
        callback()
      }, 1000)
    },
    onSaveError(value, callback) {
      setTimeout(() => callback(new Error('Something went wrong')), 100)
    }
  }
}
</script>

<style scoped>
.limited-width {
  width: 300px;
}

.wrapper {
  padding: 20px;
}
</style>
