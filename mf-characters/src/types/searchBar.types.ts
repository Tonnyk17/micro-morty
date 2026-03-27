import type { CharactersFiltersType } from '@shared-types/character.types'

export type FieldKey = Exclude<keyof CharactersFiltersType, 'page'>

export type SearchOption = {
  label: string
  value: string
}

export type SearchField = {
  key: FieldKey
  label: string
  placeholder?: string
  type: 'text' | 'select'
  options?: SearchOption[]
}
