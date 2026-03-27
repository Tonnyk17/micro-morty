import type {
  SearchFieldType,
} from '../types/filter.types'

type Props<TFilters extends Record<string, unknown>> = {
  filters: TFilters
  fields: SearchFieldType<Extract<keyof TFilters, string>>[]
  onChange: (key: Extract<keyof TFilters, string>, value: string | undefined) => void
  onReset: () => void
}

export default function SearchBar<TFilters extends Record<string, unknown>>({
  filters,
  fields,
  onChange,
  onReset,
}: Props<TFilters>) {

  const handleChange = (key: Extract<keyof TFilters, string>, nextValue: string) => {
    onChange(key, nextValue || undefined)
  }

  return (
    <section className="w-full max-w-5xl rounded-2xl border border-cyan-300/30 bg-cyan-900/20 p-4 md:p-6 shadow-lg shadow-cyan-900/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {fields.map((field) => {
          const rawValue = filters[field.key]
          const value = typeof rawValue === 'string' ? rawValue : ''
          
          return (
            field.type === 'text' ? (
              <input
                key={field.key}
                type="text"
                aria-label={field.label}
                placeholder={field.placeholder ?? field.label}
                value={value}
                onChange={(event) => handleChange(field.key, event.target.value)}
                className="w-full rounded-xl border border-cyan-300/40 bg-slate-900/60 px-4 py-2 text-sm text-cyan-100 outline-none transition-colors focus:border-cyan-200"
              />
            ) : (
              <select
                key={field.key}
                aria-label={field.label}
                value={value}
                onChange={(event) => handleChange(field.key, event.target.value)}
                className="w-full rounded-xl border border-cyan-300/40 bg-slate-900/60 px-4 py-2 text-sm text-cyan-100 outline-none transition-colors focus:border-cyan-200"
              >
                <option value="">
                  {field.placeholder ?? `All ${field.label.toLowerCase()}`}
                </option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )
          )
        })}

        <button
          type="button"
          onClick={onReset}
          className="w-full rounded-xl border border-cyan-300 bg-cyan-700/70 px-4 py-2 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-600"
        >
          Reset filters
        </button>
      </div>
    </section>
  )
}
