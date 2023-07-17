<template>
  <div>
    <div v-for="presence in presences" :key="presence">
      <Avatar v-for="size in sizes" :key="size" :avatar="avatar" status="approved" :size="size" :presence="presence" />
    </div>
  </div>
</template>

<script>
import faker from 'faker'
import Avatar from '@/components/Avatar/Avatar'

export default {
  name: 'AvatarStory',
  components: { Avatar },
  data() {
    return {
      avatar: `https://i.pravatar.cc/300?u=${faker.datatype.uuid()}`,
      sizes: ['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall'],
      presences: ['online', 'busy', 'focus', 'offline', '']
    }
  }
}
</script>

<style scoped></style>
