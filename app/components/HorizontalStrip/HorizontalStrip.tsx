"use client"

import { ReactNode, useEffect, useRef, useState } from "react";

/**
 * Interface for the props of the HorizontalStrip component.
 */
interface IHorizontalStripProps {
  /**
   * The text content to be displayed in the horizontally scrolling strip.
   */
  text: string;
  /**
   * ClassName styling for the container of the horizontal strip.
   */
  containerClassName?: string;
}

/**
 * HorizontalStrip component displays a horizontally scrolling text strip with a gradient background.
 * The text strip moves from right to left in a continuous loop.
 *
 * @param {Object} props - The props for the HorizontalStrip component.
 * @param {string} props.text - The text content to be displayed in the scrolling strip.
 * @returns {JSX.Element} The JSX element representing the HorizontalStrip component.
 */
function HorizontalStrip({ text, containerClassName }: IHorizontalStripProps) {
  const stripRef = useRef<HTMLDivElement>(null);
  const [repeatedTextElements, setRepeatedTextElements] = useState<ReactNode[]>([]);

  useEffect(() => {
    const stripElement = stripRef.current;
    if (!stripElement) return;

    // Calculate the width of the strip element
    // const width = stripElement.offsetWidth;
    const width = text.length + 100;
    if(stripElement.parentElement) {
      // Calculate the number of repetitions needed to fill the container width
      const repetitions = Math.ceil(stripElement.parentElement?.offsetWidth / width) + 1;
      const repeatedTextElements = new Array(repetitions).fill(text).map((t, index) => (
        <span key={index} style={{ marginLeft: index === 0 ? 0 : 20 }}>
          {t}
        </span>
      ));
      setRepeatedTextElements(repeatedTextElements);
    }
  }, [text]);

  return (
    <div
      className={`flex bg-gradient-to-r from-purple-500 to-green-400 w-full overflow-hidden ${containerClassName}`}
    >
      <div ref={stripRef} className="inline-block px-4 py-2 whitespace-nowrap text-white animate-leftToRight">
        {repeatedTextElements}
      </div>
    </div>
  );
}

export default HorizontalStrip;
