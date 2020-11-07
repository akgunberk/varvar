import React from "react";
import WithCard from "./hoc/WithCard";

import { Products } from "../../constants/products";
import "../styles/Card.scss";
import { useSelector } from "react-redux";
import { AppState } from "../../store/reducers";

export const Cards: React.FC = () => {
  const selectedCategories = useSelector((store: AppState) => store.selected);
  return (
    <div className="cards">
      {Products.map((card, index) =>
        selectedCategories.includes(card.category) ||
        selectedCategories.length === 0 ? (
          <WithCard key={index} card={card} />
        ) : null
      )}
    </div>
  );
};
