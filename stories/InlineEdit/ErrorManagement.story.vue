<template>
  <div>
    <h3>Simple error</h3>
    <p>
      <KitStringLineEditableRenderer :value="value" @save-requested="onSaveError" />
    </p>
    <h3>General error</h3>
    <p>Might be useful when there is an error unrelated with current edition.</p>
    <h4>Width 100%</h4>
    <p>
      <KitStringLineEditableRenderer :value="value" @save-requested="onGeneralError" />
    </p>
    <h4>Width 300px</h4>
    <p style="width: 300px">
      <KitStringLineEditableRenderer :value="value" force-is-editing @save-requested="onGeneralError" />
    </p>
    <h4>On secured single line</h4>
    <p style="width: 300px">
      <KitSecureStringLineEditableRenderer :value="value" force-is-editing @save-requested="onGeneralError" />
    </p>
    <h4>On Multi line</h4>
    <p style="width: 300px">
      <KitMultiLineEditableRenderer :value="value" force-is-editing @save-requested="onGeneralError" />
    </p>
    <h4>In a bigger parent element</h4>
    <div style="font-weight: 500; font-size: 20px">
      <KitSecureStringLineEditableRenderer :value="value" @save-requested="onGeneralError">
        {{ value }}
      </KitSecureStringLineEditableRenderer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GeneralError from '@components/Form/GeneralError'
import KitStringLineEditableRenderer from '@components/field-renderers/KitStringLineEditableRenderer.vue'
import KitSecureStringLineEditableRenderer from '@components/field-renderers/KitSecureStringLineEditableRenderer.vue'
import KitMultiLineEditableRenderer from '@components/field-renderers/KitMultiLineEditableRenderer.vue'

const value = ref('This is the default text, try to edit me.')

function onSaveError(newValue, callback) {
  callback(new Error('Something went wrong'))
}

function onGeneralError(newValue, callback) {
  const error = new GeneralError(
    'General Error',
    'Something went wrong, your request was refused by the big boss of the database. ' +
      'The issue is unrelated to the current edition, make sure to check you entries.'
  )
  callback(error)
}
</script>
