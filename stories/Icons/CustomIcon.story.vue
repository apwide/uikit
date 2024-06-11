<template>
  <KitIconWrapper size="small">
    <Trash />
  </KitIconWrapper>
</template>

<script>
import KitIconWrapper from '@components/Icon/IconWrapper.vue'
import Trash from '../assets/svgs/trash.svg'

export default {
  name: 'CustomIconStory',
  components: { KitIconWrapper, Trash }
}
</script>
