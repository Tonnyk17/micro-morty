import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'
import type { CharacterDetailType } from '@shared-types/character.types'

export function useCharacterDetail(characterId: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['character-detail', characterId],
    queryFn: async (): Promise<CharacterDetailType> => {
      const response = await api.characters.getDetail(characterId)
      return response.data
    },
  })

  return { data, isLoading, error }
}
