<template>
  <div>
    <h5>Normal state:</h5>
    <p>
      <UserRenderer :user="user" />
    </p>
    <h5>Avatar only:</h5>
    <p>
      <UserRenderer :user="user" :avatar-only="true" />
    </p>
  </div>
</template>

<script>
import { createPerson } from '../../api-mocks/people'
import UserRenderer from '@/components/field-renderers/UserRenderer'

export default {
  components: { UserRenderer },
  data() {
    return {
      user: createPerson()
    }
  }
}
</script>
