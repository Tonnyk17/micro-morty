import RemoteCharacterDetailPage from 'mf-characterdetail/CharacterDetailPage'
import { useParams } from 'react-router-dom'

export default function CharacterDetailPage() {
  const { id } = useParams()
  
  return (
    <section className="w-full h-full flex justify-center items-center">
      <RemoteCharacterDetailPage characterId={id} />
    </section>
  )
}
