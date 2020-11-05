import React from "react";

import "../styles/SearchBar.scss";

export interface Props {
  banner?: boolean;
}

export const SearchBar: React.FC<Props> = ({ banner = false }) => {
  const bannerClass = banner ? "search-bar--banner" : "search-bar";
  return (
    <form className={bannerClass}>
      <input
        type="text"
        className="search-bar__input"
        placeholder="Ürün veya kategori ara"
      ></input>
      <button className="search-bar__submit">Ara</button>
    </form>
  );
};
