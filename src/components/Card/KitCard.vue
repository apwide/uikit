<template>
  <div class="kit-card" :elevation="elevation">
    <slot />
  </div>
</template>
<script setup lang="ts">
type Props = {
  elevation?: number | string
}
const props = withDefaults(defineProps<Props>(), {
  elevation: 1
})
</script>
<style scoped>
.kit-card {
  --kit-card-bg-color: var(--kit-page-bg-color);
  --kit-card-border-color: #e0e2e6;
  --kit-card-shadow1-color: rgba(9, 30, 66, 0.31);
  --kit-card-shadow2-color: var(--kit-card-shadow1-color);
}
[data-color-mode="dark"] .kit-card {
  --kit-card-bg-color: #282E33;
  --kit-card-border-color: #313a41;
  --kit-card-shadow1-color: #39424a;
  --kit-card-shadow2-color: #0304045c;
}
.kit-card {
  border-radius: 3px;
  background-color: var(--kit-card-bg-color);
  padding: 10px;
}
[data-color-mode="dark"] .kit-card {
  border: 1px solid var(--kit-card-border-color);
}
.kit-card[elevation='1'] {
  box-shadow: none;
  border: 1px solid var(--kit-card-border-color);
}
.kit-card[elevation='2'] {
  box-shadow: 0 2px 6px -2px var(--kit-card-shadow1-color), 0 0 1px var(--kit-card-shadow2-color);
}
.kit-card[elevation='3'] {
  box-shadow: 0 4px 8px -2px var(--kit-card-shadow1-color), 0 0 1px var(--kit-card-shadow2-color);
}
.kit-card[elevation='4'] {
  box-shadow: 0 6px 10px -2px var(--kit-card-shadow1-color), 0 0 1px var(--kit-card-shadow2-color);
}
.kit-card[elevation='5'] {
  box-shadow: 0 8px 12px -2px var(--kit-card-shadow1-color), 0 0 1px var(--kit-card-shadow2-color);
}
</style>
