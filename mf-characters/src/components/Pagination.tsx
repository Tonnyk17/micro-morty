import { getVisiblePages } from '../utils/pagination'

type Props = {
  currentPage: number
  totalPages: number
  hasPrev: boolean
  hasNext: boolean
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  hasPrev,
  hasNext,
  onPageChange,
}: Props) {
  const visiblePages = getVisiblePages(currentPage, totalPages)

  return (
    <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
      <button
        type="button"
        className="rounded-xl border border-lime-300/70 bg-linear-to-b from-lime-300/30 to-cyan-500/25 px-4 py-2 text-sm font-semibold text-lime-100 shadow-[0_0_15px_rgba(132,255,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(80,255,180,0.45)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-40"
        disabled={!hasPrev}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {'<'}
      </button>

      <div className="flex items-center gap-2">
        {visiblePages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`min-w-10 rounded-lg border px-3 py-1 text-sm font-bold transition-all duration-300 ${
              page === currentPage
                ? 'border-cyan-200 bg-cyan-400/30 text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.45)] animate-pulse'
                : 'border-lime-300/60 bg-lime-300/20 text-lime-100 hover:-translate-y-0.5 hover:bg-lime-300/30'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="rounded-xl border border-lime-300/70 bg-linear-to-b from-lime-300/30 to-cyan-500/25 px-4 py-2 text-sm font-semibold text-lime-100 shadow-[0_0_15px_rgba(132,255,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(80,255,180,0.45)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-40"
        disabled={!hasNext}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {'>'}
      </button>
    </div>
  )
}
