<template>
  <div>
    <h3>Boolean value</h3>
    <KitCheckbox v-model="checked"> Basic Checkbox </KitCheckbox>
    <p>value: {{ checked }}</p>
    <h3>Array value</h3>
    <KitCheckbox v-model="checkedValues" value="foo"> foo </KitCheckbox>
    <KitCheckbox v-model="checkedValues" value="bar"> bar </KitCheckbox>
    <KitCheckbox v-model="checkedValues" value="baz"> baz </KitCheckbox>
    <p>value: {{ checkedValues }}</p>
    <h3>Disabled</h3>
    <KitCheckbox v-model="checked" :disabled="true"> Basic Checkbox </KitCheckbox>
  </div>
</template>

<script>
import KitCheckbox from '@/components/Checkbox/KitCheckbox.vue'

export default {
  name: 'CheckboxBasic',
  components: { KitCheckbox },
  data() {
    return {
      checked: true,
      checkedValues: []
    }
  }
}
</script>
