<template>
  <div>
    <h5>Normal state:</h5>
    <p>
      <KitUserRenderer :user="user" />
    </p>
    <h5>Avatar only:</h5>
    <p>
      <KitUserRenderer :user="user" :avatar-only="true" />
    </p>
  </div>
</template>

<script>
import { createPerson } from '../../api-mocks/people'
import KitUserRenderer from '@/components/field-renderers/KitUserRenderer.vue'

export default {
  components: { KitUserRenderer },
  data() {
    return {
      user: createPerson()
    }
  }
}
</script>
