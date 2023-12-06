KitAvatar example:

```vue
import faker from 'faker'

const sizes = ['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall']
const presences = ['online', 'busy', 'focus', 'offline', '']
const avatar = `https://i.pravatar.cc/300?u=${faker.datatype.uuid()}`

<div v-for="presence in presences" :key="presence">
  <span v-for="size in sizes" :key="size">
    <KitAvatar :avatar="avatar" :size="size" status="approved" :size="size" :presence="presence" />
  </span>
</div>
```
