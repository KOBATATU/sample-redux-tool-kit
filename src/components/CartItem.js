import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  increase,
  decrease,
  calculateTotals,
} from "../features/cart/CartSlice";
import { MinusIcon, PlusIcon } from "../HeroIcons";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}円</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          削除
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increase(id));
          }}
        >
          <PlusIcon />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
            } else {
              dispatch(decrease(id));
            }
          }}
        >
          <MinusIcon />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
