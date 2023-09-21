import { CartIcon, ClearCartIcon } from "./Icons";
import React from "react";
import "./Cart.css";
import { ContextState } from "../context/contextProvider";

export function Cart() {
  const cartCheckboxId = React.useId();
  const { state, addToCart, clearCart } = React.useContext(ContextState);

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {state.length == 0 ? (
            <p>No hay nada en tu carrito</p>
          ) : (
            state.map((el) => (
              <li key={el.id}>
                <img src={el.thumbnail} alt={el.title} />
                <div>
                  <strong>{el.title}</strong> -${el.price}
                </div>

                <footer>
                  <small>Qty:{el.quantity}</small>
                  <button onClick={() => addToCart(el)}>+</button>
                </footer>
              </li>
            ))
          )}
        </ul>
        <button className="cart-button-clearCart" onClick={() => clearCart()}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
