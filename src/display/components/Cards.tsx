import React from "react";
import WithCard from "./hoc/WithCard";

import { CategoryNames } from "../../constants/categories";

export const Cards: React.FC = () => {
  return (
    <div className="categories">
      <div className="categories__buttons">
        {CategoryNames.map((category, index) => (
          <WithCard key={index} name={category} price={index} />
        ))}
      </div>
    </div>
  );
};
