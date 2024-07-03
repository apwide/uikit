export type Value<T> = {
  id: string
  label: string
  value: T
  disabled: boolean
}

export type Normalizer<T> = (value: unknown) => Value<T>

export type ConfirmationCallback<T> = (value: T) => Promise<boolean>

export type FilterPredicate = (label: string, input: string) => boolean
