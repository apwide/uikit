<template>
  <div>
    <h5>Checked</h5>
    <p>
      <KitCheckboxRenderer :value="true" />
    </p>
    <h5>Unchecked</h5>
    <p>
      <KitCheckboxRenderer :value="false" />
    </p>
  </div>
</template>

<script setup lang="ts">
import KitCheckboxRenderer from '@/components/field-renderers/KitCheckboxRenderer.vue'
</script>
