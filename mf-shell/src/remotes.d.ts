declare module 'mf-characters/CharactersList' {
  import type { ComponentType } from 'react'
  import type { CharacterType } from '@shared-types/character.types'
  import type { CharactersFiltersType } from '@shared-types/character.types'

  type CharactersListProps = {
    characters?: CharacterType[]
    filters?: CharactersFiltersType
  }

  const CharactersList: ComponentType<CharactersListProps>
  export default CharactersList
}

declare module 'mf-characters/CharactersPage' {
  import type { ComponentType } from 'react'

  const CharactersPage: ComponentType
  export default CharactersPage
}

declare module 'mf-characterdetail/CharacterDetailPage' {
  import type { ComponentType } from 'react'

  type CharacterDetailPageProps = {
    characterId?: string
  }

  const CharacterDetailPage: ComponentType<CharacterDetailPageProps>
  export default CharacterDetailPage
}
