<template>
  <span class="outline">
    <slot />
  </span>
</template>

<script setup lang="ts">
</script>

<style scoped>
.outline {
  padding: 2px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

[size='xlarge'] {
  height: 14px;
  width: 14px;
}

[size='large'] {
  height: 11px;
  width: 11px;
}

[size='medium'] {
  height: 10px;
  width: 10px;
}

[size='small'] {
  height: 8px;
  width: 8px;
}
</style>
