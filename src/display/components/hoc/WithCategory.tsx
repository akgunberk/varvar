import React, {  useState } from "react";
import { baseEnhancerHoc } from "./BaseEnhancer";

interface withCategoryProps {
  name: string;
}

const Category = (props: withCategoryProps) => {
  let initialState = props.name==='Tüm Kategoriler' ? true : false;
  let [selected, setSelected] = useState(initialState);
  let selectedClass = selected ? "categories__button--selected" : "";
  return (
    <button
      className={`categories__button ` + selectedClass}
      onClick={() => {
        setSelected(!selected);
      }}
    >
      {props.name}
    </button>
  );
};



export default baseEnhancerHoc(Category);
