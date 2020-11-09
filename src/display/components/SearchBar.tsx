import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Products } from "../../constants/products";
import { ACTIONS } from "../../store/actions";

import "../styles/SearchBar.scss";

export interface Props {
  banner?: boolean;
}

export const SearchBar: React.FC<Props> = ({ banner = false }) => {
  const dispatch = useDispatch();
  const bannerClass = banner ? "search-bar--banner" : "search-bar";

  let [text, setText] = useState("");
  const searchProducts = () => {
    let matched: string[] = [];
    let keywords = text
      .split(" ")
      .map((word: string) => word.toLowerCase())
      .filter((word) => !!word);
    if (keywords.length >= 3) {
      Products.forEach((product) => {
        let searchedWords = product.name.split(" ");
        let keyMatched = searchedWords.some((word: string) =>
          keywords.includes(word.toLowerCase())
        );
        if (keyMatched) {
          return matched.push(product.name);
        }
      });
    }
    dispatch({ type: ACTIONS.SEARCH, payload: matched });
  };
  const handleSearch = (text: string) => {
    setText(text);
  };
  return (
    <form className={bannerClass}>
      <div className="input-container">
        {!banner ? (
          <i className="fas fa-search search-bar__magnifier"></i>
        ) : null}
        <input
          onChange={(e) => handleSearch(e.target.value)}
          onKeyUp={searchProducts}
          type="text"
          className={bannerClass + "__input"}
          placeholder="Ürün veya kategori ara"
        ></input>
        <button className={bannerClass + "__submit"}>Ara</button>
      </div>
    </form>
  );
};
