import React, { useState } from "react";
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
  let [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  let source = images("./" + props.card.image + ".png")
  return (
    <div className="card">
      <img src={source.default} alt={props.card.name} width="244px" height="242px" />
      <div className="card__name">{props.card.name} </div>
      <div className="card__cargo-free">Ücretsiz Teslimat</div>
      <div className="card__price">{props.card.price} TL</div>
      {count > 0 ? (
        <div className="card__basket-count">
          <i onClick={decrement} className="fas fa-minus"></i>
          {count}
          <i onClick={increment} className="fas fa-plus"></i>
        </div>
      ) : (
        <button
          className="card__add-basket"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Sepete Ekle
        </button>
      )}
    </div>
  );
};

export default baseEnhancerHoc(Card);
