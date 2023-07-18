"use client"

import Image from "next/image"

import { IAccordionListData, PUBLIC_IMAGES } from "@/constants"

/**
 * Interface for the props of the Accordion component.
 */
interface IAccordionProps {
  /**
   * The data representing the information to be displayed in the accordion.
   */
  accordionInfo: IAccordionListData;

  /**
   * Callback function triggered when the accordion is clicked.
   * @param dataId - The unique identifier of the clicked accordion item.
   */
  onAccordionClickAction: (dataId: number) => void;
}

/**
 * Accordion component displays an individual accordion item with a toggleable description.
 * @param {IAccordionProps} props - The props for the Accordion component.
 * @param {IAccordionListData} props.accordionInfo - The data representing the information to be displayed in the accordion.
 * @param {Function} props.onAccordionClickAction - Callback function triggered when the accordion is clicked.
 * @returns {JSX.Element} The JSX element representing the Accordion component.
 */
function Accordion({ accordionInfo, onAccordionClickAction }: IAccordionProps) {
  /**
   * Callback function triggered when the accordion is clicked.
   * This function calls the `onAccordionClickAction` callback with the `id` of the clicked accordion item.
   */
  const handleAccordionClickAction = () => {
    onAccordionClickAction(accordionInfo.id)
  }

  return (
    <div className="flex flex-col">
      <button
        onClick={handleAccordionClickAction}
        className="w-screen flex items-center justify-between py-1 px-2 lg:px-56 bg-gradient-to-r from-purple-500 to-green-400"
      >
        <h2>{accordionInfo.title.toUpperCase()}</h2>
        {accordionInfo.isOpen ? (
          <Image
            alt="accordion minus icon"
            src={PUBLIC_IMAGES.minus}
            width={15}
            height={15}
          />
        ) : (
          <Image
            alt="accordion plus icon"
            src={PUBLIC_IMAGES.plus}
            width={15}
            height={15}
          />
        )}
      </button>
      <div
        className={`w-screen px-2 py-2 lg:px-56 ${
          accordionInfo.isOpen ? "h-full opacity-100" : "h-0 opacity-0"
        } transition-all duration-500 ease-linear`}
      >
        <p className="tracking-wide text-gray-400 text-xs">
          {accordionInfo.description}
        </p>
      </div>
    </div>
  )
}

export default Accordion;
