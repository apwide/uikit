<template>
  <div>
    <SpotlightContext>
      <App />
    </SpotlightContext>
  </div>
</template>

<script>
import SpotlightContext from '@/components/Spotlight/SpotlightContext'
import App from './App'

export default {
  name: 'OnBoardingStory',
  components: { App, SpotlightContext }
}
</script>
