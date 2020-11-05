import * as React from "react";
import { ShoppingCart } from "../../svgs/components";

import "../styles/Basket.scss";

export const Basket: React.FC = () => {
  let productCount: number = 2;
  return (
    <div className="basket">
      <button className="basket__button">
        {productCount > 0 ? <div className="basket__count">{productCount} </div> : null}
        <span className="basket__details">
          <ShoppingCart className="basket__cart" />
          Sepetim
        </span>
      </button>
      <i className="fas fa-shopping-basket basket__logo"></i>
    </div>
  );
};
