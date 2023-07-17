"use client"

import { useEffect, useRef } from "react"

/**
 * Interface for the props of the HorizontalStrip component.
 */
interface IHorizontalStripProps {
  /**
   * The text content to be displayed in the horizontally scrolling strip.
   */
  text: string;
}

/**
 * HorizontalStrip component displays a horizontally scrolling text strip with a gradient background.
 * The text strip moves from right to left in a continuous loop.
 *
 * @param {Object} props - The props for the HorizontalStrip component.
 * @param {string} props.text - The text content to be displayed in the scrolling strip.
 * @returns {JSX.Element} The JSX element representing the HorizontalStrip component.
 */
function HorizontalStrip({ text }: IHorizontalStripProps) {
  const stripRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stripElement = stripRef.current
    if (!stripElement) return

    const stripWidth = stripElement.offsetWidth
    const containerWidth = stripElement.parentElement?.offsetWidth || 0

    let animationId: number
    let scrollDistance = 0
    
    /**
     * Animates the horizontal scrolling of the strip element.
     * The strip moves from right to left in a continuous loop.
     */
    const animateStrip = () => {
      animationId = requestAnimationFrame(animateStrip);
    
      // Move the strip left by one pixel per animation frame
      scrollDistance--;
    
      // Check if the strip has moved out of view on the left
      if (scrollDistance <= -stripWidth) {
        // Reset the scroll distance to the right edge of the container,
        // creating a seamless loop effect
        scrollDistance = containerWidth;
      }
    
      // Update the style of the strip element to move it horizontally
      stripElement.style.transform = `translateX(${scrollDistance}px)`;
    };

    animateStrip()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="flex bg-gradient-to-r from-purple-500 to-green-400 w-full absolute bottom-0 right-0 overflow-hidden">
      <span ref={stripRef} className="inline-block px-4 py-2 whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}

export default HorizontalStrip;
