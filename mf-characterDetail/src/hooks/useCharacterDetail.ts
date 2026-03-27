import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'
import type { CharacterDetailType } from '@shared-types/character.types'

export function useCharacterDetail(characterId: string | undefined) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['character-detail', characterId],
    queryFn: async (): Promise<CharacterDetailType> => {
      if (!characterId) throw new Error('Missing character id')
      const response = await api.characters.getDetail(characterId)
      return response.data
    },
    enabled: Boolean(characterId),
  })

  return { data, isLoading, error }
}
