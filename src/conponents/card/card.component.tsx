import { Monster } from "../../App";

import "./card.styles.css";

type CardProps = {
  monster: Monster;
};

const Card = ({ monster }: CardProps) => {
  const { name, id, email } = monster;
  return (
    <div className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2 key={id}>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
