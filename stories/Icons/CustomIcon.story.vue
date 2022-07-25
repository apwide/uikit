<template>
  <IconWrapper size="small">
    <Trash />
  </IconWrapper>
</template>

<script>
import Trash from '../assets/svgs/trash.svg'
import IconWrapper from '@/components/Icon/IconWrapper'

export default {
  name: 'CustomIconStory',
  components: { IconWrapper, Trash }
}
</script>
