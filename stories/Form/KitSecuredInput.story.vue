<template>
  <div>
    <FieldGroup data-cy="field-group" label="Label" required>
      <KitSecuredInput v-model="message" should-fit-container placeholder="Click here to input" />
      The message is: {{ message }}
    </FieldGroup>
    <FieldGroup label="Disabled input" required>
      <KitSecuredInput v-model="message" should-fit-container placeholder="Click here to input" disabled />
      The message is: {{ message }}
    </FieldGroup>
  </div>
</template>

<script>
import KitSecuredInput from '@/components/Form/KitSecuredInput'
import FieldGroup from '@/components/Form/FieldGroup'

export default {
  name: 'KitSecuredInputStory',
  components: {
    FieldGroup,
    KitSecuredInput
  },
  data() {
    return {
      message: '',
      number: ''
    }
  }
}
</script>
<style scoped>
.icon {
  transform: translateY(25%);
}
</style>
