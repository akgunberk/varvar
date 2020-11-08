import * as React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store/reducers";
import { ShoppingCart } from "../../svgs/components";
import Thunder from "../../svgs/components/Thunder";

export const Basket: React.FC = () => {
  let { count, price } = useSelector((store: AppState) => {
    //console.log(store);
    if (store.basket.length === 1) {
      let { count, price } = store.basket[0];
      return { count, price: price * count };
    }
    if (store.basket.length > 0)
      return store.basket.reduce((previous, current) => {
        return {
          count: previous.count + current.count,
          name: "totalCount",
          price:
            previous.count * previous.price + current.count * current.price,
        };
      });
  }) ?? { count: 0, price: 0 };

  let priceToCargoFree = Math.ceil(500 - price);
  let bar = (price/500)*100+'%';

  return (
    <div className="basket">
      <button className="basket__button">
        {count > 0 ? <div className="basket__count">{count} </div> : null}
        <span className="basket__details">
          <ShoppingCart className="basket__cart" />
          Sepetim
        </span>
      </button>
      <i className="fas fa-shopping-basket basket__logo"></i>
      <div className="basket__information">
        <div className="basket__thunder">
          <Thunder />
          {priceToCargoFree > 0
            ? `${priceToCargoFree} TL ürün daha ekleyin kargo bedava`
            : "Kargonuz bedava!"}
        </div>
        {priceToCargoFree > 0 ? (
          <div className="basket__bar">
            <div
              className="basket__bar--progress"
              style={{ height: "5px", width: bar}}
            ></div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
