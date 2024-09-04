import Card from "../card/card.component";
import { Monster } from "../../App";

import "./card-list.styles.css";

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map((monster, index) => {
      return <Card key={index} monster={monster} />;
    })}
  </div>
);

export default CardList;
