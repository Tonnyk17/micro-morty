import '../index.css'
import CharacterCard from "./CharacterCard";
import type { CharacterType } from '@shared-types/character.types'

type Props = {
  characters: CharacterType[]
}

export default function CharactersList({ characters }: Props) {
  return <>
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  </>
}
