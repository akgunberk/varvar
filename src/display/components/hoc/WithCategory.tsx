import React from "react";
import { useDispatch } from "react-redux";
import { baseEnhancerHoc } from "./BaseEnhancer";
import { ACTIONS } from "../../../store/actions";

interface withCategoryProps {
  name: string;
  selected: boolean;
}

const Category = (props: withCategoryProps) => {
  const dispatch = useDispatch();
  let selectedClass = props.selected ? "categories__button--selected" : "";
  return (
    <button
      className={`categories__button ` + selectedClass}
      onClick={() => {
        dispatch({ type: ACTIONS.CATEGORY, payload: props.name });
      }}
    >
      {props.name}
    </button>
  );
};

export default baseEnhancerHoc(Category);
