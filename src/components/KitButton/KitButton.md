## A view of all appearences and types

```[import](./KitButton_appearances.story.vue)
```

## States

```vue
<KitButton is-loading>Is loading</KitButton>
<KitButton is-disabled>Is disabled</KitButton>
```

## Spacing

```[import](./KitButton_spacing.story.vue)
```

## Icon Button

```vue
import KitIcon from '../Icon/KitIcon.vue' 

<KitButton>Pick Date
  <template #icon-after>
    <KitIcon type="calendar-alt" icon-style="regular" slot="icon-after" />
  </template>
</KitButton>
<KitButton>Pick Date 
  <template #icon-before>
    <KitIcon type="calendar-alt" icon-style="regular" slot="icon-before" />  
  </template>
</KitButton>
```

if not text is needed, see [KitIconButton](#/Components/KitButtonGroup).

## Grouping

if not text is needed, see [KitButtonGroup](#/Components/KitButtonGroup).
