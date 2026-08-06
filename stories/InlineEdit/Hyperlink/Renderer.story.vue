<template>
  <div>
    <p>
      <KitHyperlinkRenderer :link="link" />
    </p>
  </div>
</template>

<script>
import { faker } from '@faker-js/faker'
import KitHyperlinkRenderer from '@/components/field-renderers/KitHyperlinkRenderer'

export default {
  components: { KitHyperlinkRenderer },
  data() {
    faker.seed(1)
    return {
      link: 'https://www.spartez.com'
    }
  }
}
</script>
