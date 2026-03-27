import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import CharacterDetailPage from '../pages/CharacterDetailPage'
import CharactersPage from 'mf-characters/CharactersPage'


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters">
            <Route
              index
              element={<CharactersPage />}
            />
            <Route path=":id" element={<CharacterDetailPage />} />
          </Route>         
        </Route>
        <Route path="*" element={<Navigate to="/characters" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
