import { LOWER_CARD_LIST_DATA, UPPER_CARD_LIST_DATA } from "./constants"
import {
  AboutContainer,
  AccordionContainer,
  CardsContainer,
} from "./containers"

/**
 * Home component represents the home page of the application.
 *
 * This component renders the main content for the home page, including sections
 * like cards, about, and accordion.
 *
 * @returns {JSX.Element} The JSX element representing the Home component.
 */
export default function Home() {
  return (
    <main className="flex flex-col gap-12">
      <CardsContainer title="Lorem Ipsum" cardListData={UPPER_CARD_LIST_DATA} />
      <CardsContainer title="Lorem Ipsum dolor set" cardListData={LOWER_CARD_LIST_DATA}/>
      {/* <AboutContainer />
      <AccordionContainer /> */}
    </main>
  )
}
