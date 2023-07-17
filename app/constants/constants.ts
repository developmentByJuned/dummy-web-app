import { PUBLIC_IMAGES } from "./images";

/**
 * Interface for a single navigation item in the Navbar component.
 */
interface INavItem {
  /**
   * Unique id for nav item.
   */
  id: number;
  /**
   * Title for the nav link
   */
  title: string;
  /**
   * Redirect route for the nav link
   */
  redirectTo: string;
  /**
   * This prop is used to show the availability of the page.
   */
  unavailable?: boolean;
}

/**
 * Array of navigation items for the Navbar component.
 * Each item represents a link in the navigation menu.
 */
const NAV_ITEMS: INavItem[] = [
  {
    id: 1,
    title: "LOREM IPSUM",
    redirectTo: "#",
  },
  {
    id: 2,
    title: "LOREM IPSUM",
    redirectTo: "#",
  },
  {
    id: 3,
    title: "LOREM IPSUM",
    redirectTo: "#",
  },
  {
    id: 4,
    title: "LOREM IPSUM",
    redirectTo: "#",
  },
  {
    id: 5,
    title: "LOREM IPSUM",
    redirectTo: "#",
  },
  {
    id: 6,
    title: "LOREM IPSUM",
    unavailable: true,
    redirectTo: "#",
  },
];

/**
 * Interface for data representing a single card in the card list.
 */
export interface ICardListData {
  /**
   * The title of the card.
   */
  title: string;

  /**
   * The description of the card.
   */
  description: string;

  /**
   * The optional URL of the card image.
   */
  cardImageUrl?: string;

  /**
   * The optional direction of the card image: 'left' or 'top'.
   */
  cardImageDirection?: 'left' | 'top';

  /**
   * The URL of the card icon.
   */
  iconUrl: string;
}

/**
 * An array containing data for upper card list items.
 *
 * Each item represents a card in the upper section of the card list.
 *
 * @type {ICardListData[]}
 */
const UPPER_CARD_LIST_DATA: ICardListData[] = [{
  title: 'DOLOR SIT',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero error dicta recusandae quos enim inventore alias deleniti iusto vel, eaque deserunt modi consequatur consequuntur corporis dignissimos repellat ullam officiis nobis?',
  iconUrl: PUBLIC_IMAGES.userPlus,
}, {
  title: 'LOREM IPSUM DOLOR SIT',
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero officia eius dolor dignissimos minus! Minus pariatur, sint et voluptatem perferendis eos quos est? Corrupti porro cum, natus earum perspiciatis laboriosam!',
  iconUrl: PUBLIC_IMAGES.server,
}, {
  title: 'LOREM IPSUM DOLOR SIT',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in ullam quod provident? Dolore voluptate repudiandae vero veritatis asperiores, assumenda aspernatur obcaecati deserunt consequuntur fugit. Tempore incidunt eos deserunt eum?',
  cardImageUrl: PUBLIC_IMAGES.girlImage,
  cardImageDirection: 'top',
  iconUrl: PUBLIC_IMAGES.target,
}, {
  title: 'LOREM IPSUM',
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis reiciendis cumque obcaecati. Impedit, voluptatum! Illum assumenda cumque quos voluptas possimus delectus recusandae, voluptatum labore alias, ut minima ad facilis repellat.',
  iconUrl: PUBLIC_IMAGES.percent,
}, {
  title: 'DOLOR SIT AMET',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ex, voluptatum quam aliquid repellat provident quo quas animi, sed harum commodi voluptate laboriosam culpa blanditiis odit illo cupiditate ratione recusandae?',
  iconUrl: PUBLIC_IMAGES.cpuChip,
}, {
  title: 'LOREM IPSUM DOLOR',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, totam omnis. Nemo, accusamus sed. Iusto, quo sit itaque odit facilis error vitae quaerat, unde dolore voluptates maxime magnam reiciendis voluptate!',
  cardImageUrl: PUBLIC_IMAGES.boyImage,
  cardImageDirection: 'left',
  iconUrl: PUBLIC_IMAGES.cube,
}];

/**
 * An array containing data for lower card list items.
 *
 * Each item represents a card in the lower section of the card list.
 *
 * @type {ICardListData[]}
 */
const LOWER_CARD_LIST_DATA: ICardListData[] = [{
  title: 'LOREM IPSUM DOLOR',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate esse asperiores neque aliquam laborum dolor aperiam mollitia numquam veritatis aliquid iure et fuga id voluptas incidunt, obcaecati pariatur repudiandae! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut atque itaque, nesciunt consequatur sapiente aliquid velit. Sit, harum dolorum, inventore porro minus atque perferendis voluptatibus quis cumque rerum fuga.',
  iconUrl: PUBLIC_IMAGES.shieldTick,
}, {
  title: 'DOLOR SIT AMET',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt ea quasi iusto delectus, quas praesentium inventore distinctio nostrum tempora at, illum eius nisi placeat dolorum magnam. Deserunt quo in natus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi doloribus beatae, explicabo culpa deserunt cupiditate veritatis blanditiis consequuntur quos illum repellat quibusdam qui dolorem neque error debitis at laborum adipisci.',
  iconUrl: PUBLIC_IMAGES.dataFlow,
}, {
  title: 'LOREM IPSUM',
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis commodi cum inventore, molestiae magni temporibus facilis? Eos rerum quibusdam, amet itaque soluta iusto error mollitia, fugiat saepe velit excepturi dignissimos! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quasi voluptates soluta distinctio, veniam voluptatibus deserunt nulla ut fugiat culpa est, fugit eos excepturi ea cumque tempora suscipit praesentium exercitationem!',
  cardImageUrl: PUBLIC_IMAGES.dummyImage,
  cardImageDirection: 'left',
  iconUrl: PUBLIC_IMAGES.barChart,
}];

export {NAV_ITEMS, UPPER_CARD_LIST_DATA, LOWER_CARD_LIST_DATA};