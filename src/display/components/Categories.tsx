import React from "react";
import WithCategory from "./hoc/WithCategory";

import { CategoryNames } from "../../constants/categories";
import "../styles/Categories.scss";
import { useSelector } from "react-redux";
import { AppState } from "../../store/reducers";

export const Categories: React.FC = () => {
  let selectedCategories = useSelector((store: AppState) => store.selected);

  return (
    <div className="categories">
      <i className="fas fa-bars categories__hamburger"></i>
      <div className="categories__buttons">
        {CategoryNames.map((category, index) => {
          let selected =
            selectedCategories.length > 0 
              ? selectedCategories.includes(category)
              : !index ? true :false;

          return <WithCategory key={index} name={category} selected={selected} />;
        })}
      </div>
    </div>
  );
};
