<template>
  <div>
    <p>
      <HyperlinkRenderer :link="link" />
    </p>
  </div>
</template>

<script>
import { faker } from '@faker-js/faker'
import HyperlinkRenderer from '@/components/field-renderers/HyperlinkRenderer'

export default {
  components: { HyperlinkRenderer },
  data() {
    faker.seed(1)
    return {
      link: 'https://www.spartez.com'
    }
  }
}
</script>
