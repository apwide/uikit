<template>
  <div class="kit-breadcrumb" :with-icon="$slots.icon">
    <span class="kit-item">
      <slot name="icon" />
      <slot name="link">
        <a :href="link" :target="target">{{ text }}</a>
      </slot>
    </span>
  </div>
</template>

<script setup lang="ts">

type Props = {
  link?: string
  text?: string
  target?: string
}

withDefaults(defineProps<Props>(), {
  link: '#',
  text: '',
  target: '_self'
})

</script>

<style scoped>
.kit-breadcrumb {
  --kit-breadcrumb-link-color: #6b778c;
  --kit-breadcrumb-link-after-color: #7a869a;
}

[data-color-mode="dark"] .kit-breadcrumb {
  --kit-breadcrumb-link-color: var(--kit-header-text);
  --kit-breadcrumb-link-after-color: var(--kit-header-text);
}

.kit-breadcrumb {
  min-width: 45px;
  display: flex;
  align-items: center;
  flex-shrink: 10;
  transition: all ease-out 0.3s;
}

.kit-breadcrumb[with-icon] {
  min-width: 60px;
}

.kit-breadcrumb:first-of-type {
  flex: 0 1 auto;
}

.kit-item {
  display: flex;
  min-width: 0;
  align-items: center;
}

.kit-item :deep(a) {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--kit-breadcrumb-link-color);
  margin-left: 0;
  display: block;
}

[with-icon] :deep(a) {
  margin-left: 5px;
}

.kit-breadcrumb:after {
  display: inline-block;
  content: '/';
  color: var(--kit-breadcrumb-link-after-color);
  flex-shrink: 0;
  text-align: center;
  margin: 0 6px;
  width: 8px;
}

.kit-breadcrumb:last-of-type:after {
  content: none;
}

.kit-breadcrumb:last-child {
  flex: 0 1 auto;
  min-width: auto;
}

.kit-breadcrumb:hover {
  flex: 1 0 auto;
  opacity: 1;
  transition: all ease-out 0.3s;
}
</style>
