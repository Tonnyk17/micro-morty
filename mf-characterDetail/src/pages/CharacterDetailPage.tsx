import CharacterDetailCard from '../components/CharacterDetailCard'
import { useCharacterDetail } from '../hooks/useCharacterDetail'

type Props = {
  characterId?: string
}

export default function CharacterDetailPage({ characterId }: Props) {
  const { data, isLoading, error } = useCharacterDetail(characterId)

  if (!characterId) {
    return (
      <p className="text-center text-cyan-200/80">No character selected.</p>
    )
  }

  if (isLoading) {
    return (
      <div className="flex w-full justify-center py-12">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-lime-400/30 border-t-lime-400" />
      </div>
    )
  }

  if (error || !data) {
    return (
      <p className="text-center text-red-300">
        Could not load this character. Try again later.
      </p>
    )
  }

  return (
    <div className="flex w-full justify-center px-2">
      <CharacterDetailCard character={data} />
    </div>
  )
}
