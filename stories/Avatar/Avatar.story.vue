<template>
  <div>
    <div v-for="presence in presences" :key="presence">
      <KitAvatar v-for="size in sizes" :key="size" :avatar="avatar" status="approved" :size="size" :presence="presence" />
    </div>
    <div>
      <KitAvatar v-for="size in sizes" :key="size" :avatar="avatar" status="declined" :size="size" presence="online" />
    </div>
  </div>
</template>
<script setup lang="ts">
import faker from 'faker'
import KitAvatar from '@/components/Avatar/KitAvatar'

const avatar = `https://i.pravatar.cc/300?u=${faker.datatype.uuid()}`
const sizes = ['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall']
const presences = ['online', 'busy', 'focus', 'offline', '']
</script>
