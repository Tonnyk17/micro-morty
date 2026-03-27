import { NavLink } from "react-router-dom"

export default function Header() {
  return <>
  <header className="w-full fixed top-0 left-0 z-10 p-5 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.2))] backdrop-blur-sm">
    <nav>
      <ul className="flex items-center justify-end gap-5">
        <li className="text-lg font-medium text-cyan-400 hover:text-cyan-200 transition-colors duration-300 cursor-pointer">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="text-lg font-medium text-cyan-400 hover:text-cyan-200 transition-colors duration-300 cursor-pointer">
          <NavLink to="/characters">Characters</NavLink>
        </li>
      </ul>
    </nav>
  </header>
  </>
}