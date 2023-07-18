"use client"

import Image from "next/image"

import { ICardListData } from "@/constants"

/**
 * Interface for the props of the InfoCard component.
 */
interface IInfoCardProps {
  /**
   * The data representing the information to be displayed in the card.
   */
  cardInfo: ICardListData;
}

/**
 * InfoCard component represents a card displaying information.
 *
 * This component renders a card displaying information such as title, description,
 * card image (if available), and an icon.
 *
 * @param {IInfoCardProps} props - The props for the InfoCard component.
 * @param {ICardListData} props.cardInfo - The data representing the card information.
 * @returns {JSX.Element} The JSX element representing the InfoCard component.
 */
function InfoCard({ cardInfo }: IInfoCardProps) {
  let containerClass =
    cardInfo.cardImageDirection === "left"
      ? "flex-col lg:max-w-xl lg:flex-row ml-auto"
      : "w-80 flex-col"

  return (
    <div className={`flex gap-4 ${containerClass}`}>
      {cardInfo.cardImageUrl ? (
        <Image
          alt="Card Image"
          className="h-72"
          width={400}
          height={400}
          src={cardInfo.cardImageUrl}
        />
      ) : null}
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-xl font-bold">{cardInfo.title}</h1>
          <p className="text-xs text-gray-400 tracking-wide">
            {cardInfo.description}
          </p>
        </div>
        <Image alt="Card Icon" width={15} height={15} src={cardInfo.iconUrl} />
      </div>
    </div>
  )
}

export default InfoCard
