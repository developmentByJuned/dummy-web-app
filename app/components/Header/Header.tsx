"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"

import { NAV_ITEMS, PUBLIC_IMAGES } from "@/constants"

import { Navbar } from "../Navbar"

/**
 * Interface for the props of the Header component.
 */
interface IHeaderProps {
  /**
   * This prop is used to show dynamic title for different pages.
   */
  title?: string
}

/**
 * Header component displays the header of the web page with company logo and title.
 * @returns {JSX.Element} The JSX element representing the Header component.
 */
export default function Header({ title }: IHeaderProps) {
  const currentRoute = usePathname()
  const currentNavigation = NAV_ITEMS.find(
    (item) => item.redirectTo === currentRoute
  )

  return (
    <div className="flex items-center justify-between sm:px-12 px-4 py-6">
      <div className="flex">
        <Image
          alt="Company Logo"
          width={40}
          height={40}
          src={PUBLIC_IMAGES.logo}
        />
        <h2 className="text-xl pl-5">
          {title || currentNavigation?.title?.toUpperCase()}
        </h2>
      </div>
      <Navbar />
    </div>
  )
}
