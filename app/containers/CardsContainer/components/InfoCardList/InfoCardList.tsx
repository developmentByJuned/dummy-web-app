import { ICardListData } from "@/constants"

import { InfoCard } from "../InfoCard"

/**
 * Interface for the props of the InfoCardList component.
 */
interface IInfoCardListProps {
  /**
   * An array containing data representing the cards to be displayed.
   */
  cardListData: ICardListData[];
}

/**
 * InfoCardList component represents a list of information cards.
 *
 * This component renders a list of information cards based on the data provided
 * through the `cardListData` prop. Each card in the list is rendered using the
 * InfoCard component.
 *
 * @param {IInfoCardListProps} props - The props for the InfoCardList component.
 * @param {ICardListData[]} props.cardListData - An array containing data representing the cards to be displayed.
 * @returns {JSX.Element} The JSX element representing the InfoCardList component.
 */
const InfoCardList = ({ cardListData }: IInfoCardListProps) => {
  return (
    <div className="flex flex-wrap gap-12 mt-4 p-1">
      {cardListData.map((cardInfo: ICardListData) => (
        <InfoCard key={cardInfo.iconUrl} cardInfo={cardInfo} />
      ))}
    </div>
  )
}

export default InfoCardList;
