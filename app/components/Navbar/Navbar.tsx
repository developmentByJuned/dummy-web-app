"use client"

import { useState } from 'react'

import { NAV_ITEMS } from '../../constants';

import { HorizontalStrip } from '../HorizontalStrip'

/**
 * Navbar component displays a navigation menu with a hamburger icon for mobile devices.
 * The menu can be toggled by clicking on the hamburger icon, revealing the navigation links.
 *
 * @returns {JSX.Element} The JSX element representing the Navbar component.
 */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Common link class used for navigation items
  const linkClass =
    "flex justify-between font-semibold px-3 py-2 md:p-0 md:px-2 hover:bg-green-600"

  /**
   * Toggles the visibility of the hamburger menu.
   */
  const toggleHamburgerMenu = () => {
    setMenuOpen(!menuOpen)
  }
  
  return (
    <div>
        <input
          onClick={toggleHamburgerMenu}
          type="checkbox"
          id="menu-toggle"
          className="hidden"
        />
        <label
          htmlFor="menu-toggle"
          className="block px-3 pb-1 cursor-pointer sm:hidden"
        >
          <svg
            id="menu-icon"
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 18h16" />
            )}
          </svg>
        </label>
        <nav
          className={`menu sm:hidden ${
            menuOpen
              ? "block absolute h-[85%] left-0 w-screen bg-black"
              : "hidden"
          } py-2 flex flex-col justify-center`}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.redirectTo}
              className={`${linkClass} ${
                item.unavailable ? "text-gray-500" : ""
              }`}
            >
              <span>{item.title}</span>
              {item.unavailable ? <span>COMING SOON</span> : null}
            </a>
          ))}
        </nav>
        <div className="w-full sm:hidden">
          {menuOpen ? <HorizontalStrip text="LOREM IPSUM" /> : null}
        </div>
      </div>
  )
}

export default Navbar;