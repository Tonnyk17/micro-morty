import { NavLink } from 'react-router-dom'

const spaceBackground = {
  background:
    'radial-gradient(ellipse 120% 80% at 50% 120%, rgba(30, 58, 95, 0.55), transparent 55%), radial-gradient(ellipse 80% 50% at 80% 20%, rgba(132, 204, 22, 0.12), transparent 45%), radial-gradient(ellipse 60% 40% at 15% 30%, rgba(34, 211, 238, 0.1), transparent 40%), #030712',
}

const starField = {
  opacity: 0.35,
  backgroundImage: [
    'radial-gradient(1px 1px at 10% 20%, white, transparent)',
    'radial-gradient(1px 1px at 30% 65%, rgba(255,255,255,0.9), transparent)',
    'radial-gradient(1px 1px at 72% 40%, rgba(255,255,255,0.85), transparent)',
    'radial-gradient(1px 1px at 88% 15%, white, transparent)',
    'radial-gradient(1px 1px at 45% 88%, rgba(255,255,255,0.75), transparent)',
    'radial-gradient(1px 1px at 55% 12%, rgba(255,255,255,0.8), transparent)',
    'radial-gradient(1.5px 1.5px at 92% 72%, rgba(200,230,255,0.9), transparent)',
    'radial-gradient(1px 1px at 22% 42%, white, transparent)',
    'radial-gradient(1px 1px at 65% 58%, rgba(255,255,255,0.7), transparent)',
    'radial-gradient(1px 1px at 40% 30%, white, transparent)',
    'radial-gradient(1px 1px at 50% 50%, rgba(255,255,255,0.5), transparent)',
    'radial-gradient(1px 1px at 75% 25%, white, transparent)',
  ].join(', '),
  backgroundSize: '120% 120%',
}

export default function HomePage() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={spaceBackground}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={starField}
      />

      <div className="relative z-10 flex min-h-[calc(100svh-10rem)] flex-col items-center justify-center gap-10 px-6 py-12 text-center">
        <img
          src="/rick-morty-logo.svg"
          alt="Rick and Morty"
          className="w-full max-w-2xl drop-shadow-[0_0_28px_rgba(34,211,238,0.35)]"
        />

        <p className="max-w-lg text-lg font-medium text-cyan-100/90 md:text-xl">
          Welcome to the multiverse. Explore characters from every dimension.
        </p>

        <NavLink
          to="/characters"
          className="inline-flex items-center justify-center rounded-2xl border-2 border-lime-400/60 bg-linear-to-b from-lime-400/25 to-cyan-500/20 px-10 py-3.5 text-base font-bold text-lime-100 no-underline shadow-[0_0_28px_rgba(132,255,0,0.25)] transition hover:-translate-y-0.5 hover:border-lime-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
        >
          View characters
        </NavLink>
      </div>
    </>
  )
}
