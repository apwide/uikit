<template>
  <div>
    <h5>Editable:</h5>
    <p>
      <KitCheckboxEditableRenderer :value="value" @save-requested="onSave" />
    </p>
    <h5>Editable - callback with error:</h5>
    <p>
      <KitCheckboxEditableRenderer :value="value" @save-requested="onSaveError" />
    </p>
    <h5>Non-editable:</h5>
    <p>
      <KitCheckboxEditableRenderer :value="value" :editable="false" />
    </p>
  </div>
</template>

<script>
import { faker } from '@faker-js/faker'
import KitCheckboxEditableRenderer from '@/components/field-renderers/KitCheckboxEditableRenderer.vue'

export default {
  components: { KitCheckboxEditableRenderer },
  data() {
    faker.seed(1)
    return {
      value: true
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
