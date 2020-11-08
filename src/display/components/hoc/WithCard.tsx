import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../../store/actions";
import { AppState } from "../../../store/reducers";
import { baseEnhancerHoc } from "./BaseEnhancer";

const images = require.context("../../../pngs", false);

interface withCardProps {
  card: {
    name: string;
    price: number;
    image: string;
  };
}

const Card = (props: withCardProps) => {
  let { name, price, image } = props.card;
  let product = useSelector((store: AppState) => store.basket.filter(el=>el.name===name)[0]);

  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: ACTIONS.ADD_BASKET, payload: { name, price } });
  };
  const decrement = () => {
    dispatch({ type: ACTIONS.REMOVE_BASKET, payload: { name, price } });
  };
  let source = images("./" + image + ".png");
  return (
    <div className="card">
      <img src={source.default} alt={name} width="244px" height="242px" />
      <div className="card__name">{name} </div>
      <div className="card__cargo-free">Ücretsiz Teslimat</div>
      <div className="card__price">{price} TL</div>
      {!!product && product.count > 0 ? (
        <div className="card__basket-count">
          <i onClick={decrement} className="fas fa-minus"></i>
          {product.count}
          <i onClick={increment} className="fas fa-plus"></i>
        </div>
      ) : (
        <button className="card__add-basket" onClick={increment}>
          Sepete Ekle
        </button>
      )}
    </div>
  );
};

export default baseEnhancerHoc(Card);
