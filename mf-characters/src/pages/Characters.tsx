import { useState } from 'react'
import CharactersList from '../components/CharactersList'
import Pagination from '../components/Pagination'
import SearchBar from '../components/SearchBar'
import type { SearchFieldType } from '../types/filter.types'
import { useCharacters } from '../hooks/useCharacters'
import { isCharacterStatusType } from '../utils/status'
import type {
  CharactersFiltersType,
} from '@shared-types/character.types'

type CharacterFilterKey = Exclude<keyof CharactersFiltersType, 'page'> & string

const fields: SearchFieldType<CharacterFilterKey>[] = [
  {
    key: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Search by name',
  },
  {
    key: 'species',
    label: 'Species',
    type: 'select',
    placeholder: 'All species',
    options: [
      { label: 'Human', value: 'Human' },
      { label: 'Alien', value: 'Alien' },
      { label: 'Humanoid', value: 'Humanoid' },
      { label: 'Mythological Creature', value: 'Mythological Creature' },
      { label: 'Poopybutthole', value: 'Poopybutthole' },
      { label: 'Cronenberg', value: 'Cronenberg' },
    ],
  },
  {
    key: 'status',
    label: 'Status',
    type: 'select',
    placeholder: 'All status',
    options: [
      { label: 'Alive', value: 'Alive' },
      { label: 'Dead', value: 'Dead' },
      { label: 'Unknown', value: 'unknown' },
    ],
  },
]

export default function CharactersPage() {
  const [filters, setFilters] = useState<CharactersFiltersType>({
    page: 1,
  })

  const { data, isLoading, error } = useCharacters(filters)

  return (
    <main className="w-full h-full flex flex-col items-center gap-20 p-4 md:p-8">
      <SearchBar
        filters={filters}
        fields={fields}
        onChange={(key, value) => {
          if (key === 'status') {
            setFilters((prev) => ({
              ...prev,
              page: 1,
              status:
                value && isCharacterStatusType(value) ? value : undefined,
            }))
            return
          }

          setFilters((prev) => ({
            ...prev,
            page: 1,
            [key]: value,
          }))
        }}
        onReset={() => {
          setFilters({ page: 1 })
        }}
      />

      {isLoading && <p className="text-cyan-300">Loading characters...</p>}
      {error && !isLoading && (
        <p className="text-red-300">No results found for current filters.</p>
      )}

      {!isLoading && data && (
        <div className="w-full flex flex-col items-center gap-10">
          <CharactersList characters={data.results} />
          <Pagination
            currentPage={filters.page ?? 1}
            totalPages={data.info.pages}
            hasPrev={!!data.info.prev}
            hasNext={!!data.info.next}
            onPageChange={(page) => {
              setFilters((prev) => ({ ...prev, page }))
            }}
          />
        </div>
      )}
    </main>
  )
}