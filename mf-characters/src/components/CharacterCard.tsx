import CharacterStatus from "./CharacterStatus";
import type { CharacterType } from '@shared-types/character.types'

type Props = {
  character: CharacterType
}

export default function CharacterCard({ character }: Props) {
  return <a
    href={`/characters/${character.id}`}
    className="block w-full h-auto rounded-3xl shadow-md bg-cyan-800/60 border border-cyan-300 shadow-cyan-700/80 hover:shadow-cyan-400 transition-all duration-300 p-1 flex flex-col gap-2 cursor-pointer text-left no-underline"
  >
      <img src={character.image} alt="" className="w-full object-cover aspect-square rounded-3xl" />
        <h3 className="text-white font-bold">{character.name}</h3>
        <div className="w-full h-full flex justify-between items-end p-2">
          <p className="text-cyan-300 text-sm first-letter:capitalize shadow-cyan-200/50">{character.gender}</p>
          <CharacterStatus status={character.status} />
        </div>
    </a>
}
