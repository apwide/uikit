<template>
  <div>
    <h5>Editable:</h5>
    <p>
      <MultiSelectEditableRenderer
        :selected-values="selectedValues"
        :allowed-values="allowedValues"
        :normalizer="normalizer"
        @save-requested="onSave" />
    </p>
    <h5>Editable - callback with error:</h5>
    <p>
      <MultiSelectEditableRenderer
        :selected-values="selectedValues"
        :allowed-values="allowedValues"
        :normalizer="normalizer"
        @save-requested="onSaveError" />
    </p>
    <h5>Limited width:</h5>
    <p class="limited-width">
      <MultiSelectEditableRenderer
        :selected-values="selectedValues"
        :allowed-values="allowedValues"
        :normalizer="normalizer"
        @save-requested="onSave" />
    </p>
    <h5>Non-editable:</h5>
    <p>
      <MultiSelectEditableRenderer
        :selected-values="selectedValues"
        :allowed-values="allowedValues"
        :normalizer="normalizer"
        :editable="false" />
    </p>
    <h5>Custom rendering/style:</h5>
    <p>
      <MultiSelectEditableRenderer
          :selected-values="selectedValues"
          :allowed-values="allowedValues"
          :normalizer="normalizer"
          class="custom-multi-select"
          @save-requested="onSave">
        <template #tag="{ tag }">
          <KitLozenge appearance="success">{{ tag.label }}</KitLozenge>
        </template>
        <template #default>
          <div style="display: flex; gap: 5px">
            <KitLozenge v-for="selectedValue in selectedValues" :key="selectedValue.id" appearance="brown">
              {{ selectedValue.label }}
            </KitLozenge>
          </div>
        </template>
        <template #option="{ option }">
          <KitLozenge appearance="new">{{ option.label }}</KitLozenge>
        </template>
      </MultiSelectEditableRenderer>
    </p>
  </div>
</template>

<script>
import faker from 'faker'
import {options} from '../../api-mocks/options'
import MultiSelectEditableRenderer from '@/components/field-renderers/MultiSelectEditableRenderer'
import KitLozenge from '@/components/Lozenge/Lozenge.vue'

const allowedValues = options

export default {
  components: { MultiSelectEditableRenderer, KitLozenge },
  data() {
    faker.seed(1)
    return {
      selectedValues: allowedValues.slice(0, 3),
      allowedValues
    }
  },
  computed: {
    normalizer() {
      return (value) => ({ ...value, value })
    }
  },
  methods: {
    onSave(value, callback) {
      console.log('save', value)
      this.selectedValues = value
      callback()
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
.custom-multi-select >>> .tag {
}
</style>
