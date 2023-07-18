import { IAccordionListData } from "@/constants"

import { Accordion } from "../Accordion"
import { useState } from "react"

/**
 * Interface for the props of the AccordionList component.
 */
interface IAccordionListProps {
  /**
   * The array of data representing the information to be displayed in the accordion items.
   */
  accordionListData: IAccordionListData[];
}

/**
 * AccordionList component renders a list of Accordion components based on the provided data.
 * @param {IAccordionListProps} props - The props for the AccordionList component.
 * @param {IAccordionListData[]} props.accordionListData - The array of data representing the information to be displayed in the accordion items.
 * @returns {JSX.Element} The JSX element representing the AccordionList component.
 */
const AccordionList = ({ accordionListData }: IAccordionListProps) => {
  const [accordionList, setAccordionList] = useState<IAccordionListData[]>([
    ...accordionListData,
  ]);

  /**
   * Callback function triggered when an accordion is clicked.
   * This function updates the state to toggle the open/closed status of the clicked accordion and ensures only one accordion can be open at a time.
   * @param {number} dataId - The unique identifier of the clicked accordion item.
   */
  const onAccordionClickAction = (dataId: number) => {
    const updatedList = accordionList.map((item) => {
      if(item.id === dataId) {
        return {...item, isOpen: !item.isOpen};
      }
      return {...item, isOpen: false};
    });

    setAccordionList(updatedList);
  }

  return (
    <div className="flex flex-wrap gap-4 mt-4 p-1">
      {accordionList.map((accordionInfo: IAccordionListData) => (
        <Accordion onAccordionClickAction={onAccordionClickAction} key={accordionInfo.id} accordionInfo={accordionInfo} />
      ))}
    </div>
  )
}

export default AccordionList;
