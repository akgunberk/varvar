import React from "react";

import "../styles/SearchBar.scss";

export interface Props {
  banner?: boolean;
}

export const SearchBar: React.FC<Props> = ({ banner = false }) => {
  const bannerClass = banner ? "search-bar--banner" : "search-bar";
  return (
    <form className={bannerClass}>
      {!banner ? <i className="fas fa-search search-bar__magnifier"></i> : null}
      <input
        type="text"
        className={bannerClass + "__input"}
        placeholder="Ürün veya kategori ara"
      ></input>
      <button className={bannerClass + "__submit"}>Ara</button>
    </form>
  );
};
