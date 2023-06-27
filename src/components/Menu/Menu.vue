<template>
  <div class="menu">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'KitMenu'
}
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
}
</style>
