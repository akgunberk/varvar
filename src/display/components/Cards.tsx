import React from "react";
import WithCard from "./hoc/WithCard";

import { Products } from "../../constants/products";
import '../styles/Card.scss';

export const Cards: React.FC = () => {
  return (
    <div className="cards">
        {Products.map((card, index) => (
          <WithCard key={index} card={card} />
        ))}
    </div>
  );
};
