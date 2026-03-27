import './App.css'
import CharacterDetailPage from './pages/CharacterDetailPage'

function App() {
  return (
    <main style={{ padding: '32px', maxWidth: '960px', margin: '0 auto' }}>
      <CharacterDetailPage characterId="standalone-preview" />
    </main>
  )
}

export default App
