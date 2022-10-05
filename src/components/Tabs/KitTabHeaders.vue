<template>
  <div class="kit-tab-headers">
    <nav>
      <slot />
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'KitTabHeaders',
  inject: {
    select: {
      default: () => () => {
        // eslint-disable-next-line no-console
        console.error('TabKitHeaders: this component can only be used with KitTabProvider.')
      }
    },
    state: {
      from: 'state',
      default: () => ({
        activeTab: undefined
      })
    }
  }
})
</script>

<style scoped>
.kit-tab-headers {
  position: relative;
  margin: 0 -8px 0 -8px;
  width: 100%;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-weight: 500;
}

nav::before {
  content: '';
  border-radius: 2px;
  bottom: 0;
  margin: 0;
  position: absolute;
  width: inherit;
  left: 8px;
  right: 8px;
  background-color: rgb(235, 236, 240);
  height: 2px;
}
</style>
