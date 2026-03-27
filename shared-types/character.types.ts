export type CharacterStatusType = 'Alive' | 'Dead' | 'unknown'

export type CharacterGenderType =
  | 'Female'
  | 'Male'
  | 'Genderless'
  | 'unknown'

export type CharacterLocationRefType = {
  name: string
  url: string
}

export type CharacterDetailType = {
  id: number
  name: string
  status: CharacterStatusType
  species: string
  type: string
  gender: CharacterGenderType
  origin: CharacterLocationRefType
  location: CharacterLocationRefType
  image: string
  episode: string[]
  url: string
  created: string
}

export type CharacterType = CharacterDetailType

export type CharacterListResponseType = {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: CharacterType[]
}

export type CharactersFiltersType = {
  page?: number
  name?: string
  species?: string
  status?: CharacterStatusType
}
