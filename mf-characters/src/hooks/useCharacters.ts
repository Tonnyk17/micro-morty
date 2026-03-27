import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'
import type {
  CharactersFiltersType,
  CharacterDetailType,
  CharacterListResponseType,
} from '@shared-types/character.types'

export function useCharacters(filters: CharactersFiltersType = {}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['characters', filters],
    queryFn: async (): Promise<CharacterListResponseType> => {
      const response = await api.characters.getList(filters)
      return response.data
    },
  })
  return { data, isLoading, error }
}
export function useCharacterDetail(characterId?: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['character-detail', characterId],
    queryFn: async (): Promise<CharacterDetailType> => {
      const response = await api.characters.getDetail(characterId as string)
      return response.data
    },
    enabled: Boolean(characterId),
  })
  return { data, isLoading, error }
}
