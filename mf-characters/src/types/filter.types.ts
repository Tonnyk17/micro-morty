export type SearchOptionType = {
  label: string
  value: string
}

export type SearchFieldType<TKey extends string = string> = {
  key: TKey
  label: string
  placeholder?: string
  type: 'text' | 'select'
  options?: SearchOptionType[]
}

export type FilterStringValueType<T> = Extract<T, string> | undefined
