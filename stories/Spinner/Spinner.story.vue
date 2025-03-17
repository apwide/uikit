<template>
  <div>
    <Spinner size="icon" />
    <Spinner size="small" />
    <Spinner size="medium" />
    <Spinner size="large" />
  </div>
</template>

<script>
import KitSpinner from '@components/Spinner/KitSpinner.vue'

export default {
  name: 'SpinnerStory',
  components: { Spinner: KitSpinner }
}
</script>
