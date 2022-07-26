<template>
  <div>
    <h3>Simple error</h3>
    <p>
      <StringLineEditableRenderer :value="value" @save-requested="onSaveError" />
    </p>
    <h3>General error</h3>
    <p>Might be useful when there is an error unrelated with current edition.</p>
    <h4>Width 100%</h4>
    <p>
      <StringLineEditableRenderer :value="value" @save-requested="onGeneralError" />
    </p>
    <h4>Width 300px</h4>
    <p style="width: 300px">
      <StringLineEditableRenderer :value="value" force-is-editing @save-requested="onGeneralError" />
    </p>
    <h4>On secured single line</h4>
    <p style="width: 300px">
      <SecureSingleLineEditableRenderer :value="value" force-is-editing @save-requested="onGeneralError" />
    </p>
    <h4>On Multi line</h4>
    <p style="width: 300px">
      <MultiLineEditableRenderer :value="value" force-is-editing @save-requested="onGeneralError" />
    </p>
    <h4>In a bigger parent element</h4>
    <div style="font-weight: 500; font-size: 20px">
      <StringLineEditableRenderer :value="value" @save-requested="onGeneralError">
        {{ value }}
      </StringLineEditableRenderer>
    </div>
  </div>
</template>

<script>
import StringLineEditableRenderer from '../../src/components/field-renderers/StringLineEditableRenderer'
import SecureSingleLineEditableRenderer from '../../src/components/field-renderers/SecureStringLineEditableRenderer'
import MultiLineEditableRenderer from '../../src/components/field-renderers/MultiLineEditableRenderer'

export default {
  components: {
    MultiLineEditableRenderer,
    SecureSingleLineEditableRenderer,
    StringLineEditableRenderer
  },
  data() {
    return {
      value: 'This is the default text, try to edit me.'
    }
  },
  methods: {
    onSave(value, callback) {
      this.value = value
      callback()
    },

    onSaveError(value, callback) {
      callback(new Error('Something went wrong'))
    },
    onGeneralError(value, callback) {
      const error = new Error('General Error')
      error.generalError =
        // eslint-disable-next-line max-len
        'Something went wrong, your request was refused by the big biss of the database. The issue is unrelated to the current edition, make sure to check you entries.'
      callback(error)
    }
  }
}
</script>
