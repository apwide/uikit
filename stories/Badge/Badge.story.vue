<template>
  <div>
    <div v-for="appearance in appearances" :key="appearance">
      {{ appearance }}
      <Badge value="22" :appearance="appearance" />
    </div>
  </div>
</template>

<script>
import KitBadge from '@components/Badge/KitBadge.vue'

export default {
  name: 'BadgeStory',
  components: { Badge: KitBadge },
  data() {
    return {
      appearances: ['added', 'default', 'important', 'primary', 'removed']
    }
  }
}
</script>
