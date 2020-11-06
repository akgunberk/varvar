import React from "react";
import WithCategory from "./hoc/WithCategory";

import { CategoryNames } from "../../constants/categories";
import "../styles/Categories.scss";

export const Categories: React.FC = () => {
  return (
    <div className="categories">
      <i className="fas fa-bars categories__hamburger"></i>
      <div className="categories__buttons">
        {CategoryNames.map((category, index) => (
          <WithCategory key={index} name={category} />
        ))}
      </div>
    </div>
  );
};
