import type { CharacterDetailType } from '@shared-types/character.types'

type Props = {
  character: CharacterDetailType
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="group flex flex-col gap-0.5 rounded-lg border border-cyan-400/20 bg-slate-950/40 px-3 py-2 text-left transition-all duration-300 hover:border-lime-400/40 hover:shadow-[0_0_12px_rgba(132,255,0,0.15)]">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-lime-300/80">
        {label}
      </span>
      <span className="text-sm font-medium text-cyan-50 first-letter:capitalize">
        {value || '—'}
      </span>
    </div>
  )
}

export default function CharacterDetailCard({ character }: Props) {
  const episodeCount = character.episode?.length ?? 0

  return (
    <article className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-lime-400/30 bg-linear-to-br from-slate-950/90 via-teal-950/80 to-cyan-950/70 p-1 shadow-[0_0_40px_rgba(34,211,238,0.12)] transition-transform duration-500 hover:scale-[1.01] hover:shadow-[0_0_48px_rgba(132,255,0,0.18)]">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-lime-400/10 blur-3xl animate-pulse"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl"
        aria-hidden
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-[1.35rem] border border-white/5 bg-slate-900/50 p-6 md:grid-cols-[280px_1fr] md:items-start md:gap-8">
        <div className="w-full">
          <div className="relative overflow-hidden rounded-2xl border-2 border-lime-300/50 shadow-[0_0_24px_rgba(163,230,53,0.25)]">
            <img
              src={character.image}
              alt=""
              className="aspect-square w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-4 text-left">
          <header>
            <h2 className="bg-linear-to-r from-lime-200 via-cyan-200 to-teal-200 bg-clip-text text-2xl font-bold tracking-tight text-transparent md:text-3xl">
              {character.name}
            </h2>
            <p className="mt-1 text-sm text-cyan-200/70">
              #{character.id} · {character.species}
              {character.type ? ` · ${character.type}` : ''}
            </p>
          </header>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <InfoRow label="Status" value={character.status} />
            <InfoRow label="Gender" value={character.gender} />
            <InfoRow label="Origin" value={character.origin?.name ?? ''} />
            <InfoRow label="Location" value={character.location?.name ?? ''} />
          </div>

          <div className="rounded-xl border border-cyan-500/25 bg-cyan-950/30 px-3 py-2 text-xs text-cyan-100/90">
            <span className="font-semibold text-lime-300">Episodes: </span>
            {episodeCount} appearance{episodeCount === 1 ? '' : 's'}
          </div>

          <p className="text-[11px] text-slate-400">
            Created: {new Date(character.created).toLocaleString()}
          </p>
        </div>
      </div>
    </article>
  )
}
