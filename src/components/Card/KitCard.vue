<template>
  <div class="kit-card" :elevation="elevation">
    <div class="kit-card-body">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'KitCard',
  props: {
    elevation: {
      type: [Number, String],
      default: 1
    }
  }
}
</script>
<style scoped>
.kit-card {
  border-radius: 3px;
  background-color: white;
}
.kit-card[elevation='1'] {
  box-shadow: none;
  border: 1px solid #e0e2e6;
}
.kit-card[elevation='2'] {
  box-shadow: 0 2px 6px -2px rgba(9, 30, 66, 0.31), 0 0 1px rgba(9, 30, 66, 0.31);
}
.kit-card[elevation='3'] {
  box-shadow: 0 4px 8px -2px rgba(9, 30, 66, 0.31), 0 0 1px rgba(9, 30, 66, 0.31);
}
.kit-card[elevation='4'] {
  box-shadow: 0 6px 10px -2px rgba(9, 30, 66, 0.31), 0 0 1px rgba(9, 30, 66, 0.31);
}
.kit-card[elevation='5'] {
  box-shadow: 0 8px 12px -2px rgba(9, 30, 66, 0.31), 0 0 1px rgba(9, 30, 66, 0.31);
}
.kit-card-body {
  border: none;
  padding: 10px;
}
</style>
