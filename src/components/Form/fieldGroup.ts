import { computed, inject, provide } from 'vue'
import type { ComputedRef } from 'vue'

type FieldGroup = {
  labelId: ComputedRef<string | undefined>
  errorId: ComputedRef<string | undefined>
  required: ComputedRef<boolean>
}

const KEY = Symbol('kitFieldGroup')

export function provideFieldGroup(group: FieldGroup) {
  provide(KEY, group)
}

// aria attributes tying a control to the label and errors of its enclosing KitFieldGroup;
// an aria-label set by the consumer (attrs) keeps precedence over the group label;
// partId: element naming the control's part when a group holds several controls ("Start" + "date" / "time")
export function useFieldGroupAttrs(attrs: Record<string, unknown> = {}, partId?: string) {
  const group = inject<FieldGroup | undefined>(KEY, undefined)
  return computed(() =>
    group
      ? {
          'aria-labelledby':
            attrs['aria-label'] || !group.labelId.value ? undefined : [group.labelId.value, partId].filter(Boolean).join(' '),
          'aria-describedby': group.errorId.value,
          'aria-invalid': group.errorId.value ? true : undefined,
          'aria-required': group.required.value ? true : undefined
        }
      : {}
  )
}
