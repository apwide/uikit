<template>
  <div class="kit-menu">
    <slot />
  </div>
</template>
<script setup lang="ts">

defineOptions({ compatConfig: { COMPONENT_V_MODEL: false } })

</script>

<style scoped>
.kit-menu {
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
}
</style>
