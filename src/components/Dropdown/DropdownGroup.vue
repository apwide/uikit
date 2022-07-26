<template>
  <div class="dropdown-group">
    <div class="header" @mouseover="hover = true" @mouseleave="hover = false">
      <div class="title">
        {{ label }}
      </div>
      <div v-if="$scopedSlots.actions" class="actions">
        <slot name="actions" :hover="hover" />
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      hover: false
    }
  }
}
</script>

<style scoped>
.dropdown-group .title {
  align-items: center;
  color: rgb(107, 119, 140);
  padding: 8px 12px;
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
}
.dropdown-group .header {
  display: flex;
  align-items: center;
  min-height: 33px;
}
</style>
