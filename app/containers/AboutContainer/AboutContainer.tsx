"use client"

import { useState } from "react"
import Image from "next/image"

import { PUBLIC_IMAGES } from "@/constants"

/**
 * AboutContainer component represents a container for the about section.
 *
 * This component renders the container for the about section, which can be used
 * to display information about the website, company, or application.
 *
 * @returns {JSX.Element} The JSX element representing the AboutContainer component.
 */
export default function AboutContainer() {
  const [isHovered, setIsHovered] = useState(false)

  /**
   * Handles the mouse enter event on the about us section.
   */
  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  /**
   * Handles the mouse exit event on the about us section.
   */
  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      className="flex flex-col md:flex-row mx-2 lg:mx-56 mb-16 sm:mb-64 mt-16 sm:mt-32"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col relative sm:w-1/2 my-12">
        <h1 className="sm:w-20 tracking-wider text-3xl sm:text-3xl md:text-3xl lg:text-7xl font-bold">
          ABOUT US
        </h1>
        <ul>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
        {!isHovered ? (
          <Image
            className="hidden lg:block absolute right-1/4 top-16 rounded-full opacity-100 hover:opacity-0 transition-opacity"
            alt="Card Icon"
            width={300}
            height={300}
            src={PUBLIC_IMAGES.aboutImage}
          />
        ) : null}
      </div>
      {isHovered ? (
        <Image
          className="hidden lg:block absolute opacity-0 hover:opacity-100 transition-opacity"
          alt="Card Icon"
          width={1000}
          height={500}
          src={PUBLIC_IMAGES.fullAboutImage}
        />
      ) : null}
      <div className="sm:w-1/2 flex items-end">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A eius,
        pariatur itaque nihil atque sapiente, maiores mollitia quod dicta
        laborum modi sequi tenetur fugiat! Inventore, sit nihil. Ad, atque
        voluptates. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Dolor rerum necessitatibus blanditiis, earum veniam reprehenderit itaque
        voluptatum mollitia quia voluptatibus recusandae laudantium, soluta ex
        totam quis iusto ea fugit eveniet?
      </div>
    </div>
  )
}
