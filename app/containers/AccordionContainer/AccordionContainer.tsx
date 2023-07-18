"use client"

import { IAccordionListData } from "@/constants";

import { AccordionList } from "./components/AccordionList";

/**
 * Interface for the props of the AccordionContainer component.
 */
interface IAccordionContainerProps {
  /**
   * The title to be displayed in the AccordionContainer.
   */
  title: string;
  /**
   * The list to render the card info component.
   */
  accordionListData: IAccordionListData[];
}

/**
 * AccordionContainer component represents a container for an accordion section.
 *
 * This component renders the container for an accordion section, which can be
 * used to display collapsible content with headings and expandable panels.
 *
 * @param {IAccordionContainerProps} props - The props for the AccordionContainer component.
 * @param {string} props.title - The title of the accordion section.
 * @param {IAccordionListData[]} props.accordionListData - The array of data representing the information to be displayed in the accordion items.
 * @returns {JSX.Element} The JSX element representing the AccordionContainer component.
 */
export default function AccordionContainer({ title, accordionListData}: IAccordionContainerProps) {
  return (
    <div className="mb-16 sm:mb-64 mt-16 sm:mt-32">
      <div className="flex flex-col mx-2 lg:mx-56">
        <h1 className="tracking-wider text-3xl sm:text-3xl md:text-3xl lg:text-7xl font-bold">
          {title.toUpperCase()}
        </h1>
      </div>
      <AccordionList accordionListData={accordionListData} />
    </div>
  )
}
