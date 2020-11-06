import React, { useState } from "react";
import { baseEnhancerHoc } from "./BaseEnhancer";

interface withCardProps {
  name: string;
  price: number;
}

const Card = (props: withCardProps) => {
  let [count, setCount] = useState(0);
  return (
    <div>
      {props.name}

      <button
        className={`categories__button `}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
};

export default baseEnhancerHoc(Card);
