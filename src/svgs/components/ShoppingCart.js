import * as React from "react";

function SvgShoppingCart(props) {
  return (
    <svg width={23.41} height={22.862} {...props}>
      <defs>
        <clipPath id="shopping-cart_svg__a">
          <path fill="none" d="M0 0h23.41v22.862H0z" />
        </clipPath>
        <style>{".shopping-cart_svg__c{fill:#fff}"}</style>
      </defs>
      <g clipPath="url(#shopping-cart_svg__a)">
        <path
          className="shopping-cart_svg__c"
          d="M22.614 4.116a2.72 2.72 0 00-1.935-.806H6.389l-.115-.626A3.266 3.266 0 003.058 0H1a1 1 0 100 2h2.058a1.27 1.27 0 011.249 1.043l.228 1.244v.023a1 1 0 00.081.394L6.59 15.466a3.27 3.27 0 003.217 2.684h9.478a1 1 0 000-2H9.807a1.271 1.271 0 01-1.25-1.044l-.024-.133h10.949a2.743 2.743 0 002.679-2.217l1.2-6.193a2.662 2.662 0 00.049-.51 2.719 2.719 0 00-.8-1.937M21.4 6.185l-1.2 6.191a.738.738 0 01-.718.6H8.165L6.757 5.31h13.92a.736.736 0 01.733.74.744.744 0 01-.013.135M10.215 19a1.932 1.932 0 101.932 1.932A1.932 1.932 0 0010.215 19M18.6 19a1.932 1.932 0 101.932 1.932A1.932 1.932 0 0018.6 19"
        />
      </g>
    </svg>
  );
}

export default SvgShoppingCart;
