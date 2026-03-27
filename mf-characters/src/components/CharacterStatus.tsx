import { type CharacterStatusType } from '@shared-types/character.types';

type Props = {
  status: CharacterStatusType
}

export default function CharacterStatus({ status }: Props) {
  return <>
    <p className={`
      text-sm font-semibold first-letter:capitalize
      ${status === 'Alive' && 'text-green-400 shadow-green-200/50'} 
      ${status === 'Dead' && 'text-red-400 shadow-red-200/50'} 
      ${status === 'unknown' && 'text-yellow-400 shadow-yellow-200/50'}`}
    >
      {status}
    </p>
  </>

}