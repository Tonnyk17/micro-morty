import type { CharacterStatusType } from '@shared-types/character.types'

export function isCharacterStatusType(
  value: string | CharacterStatusType | undefined,
): value is CharacterStatusType {
  return value === 'Alive' || value === 'Dead' || value === 'unknown'
}
