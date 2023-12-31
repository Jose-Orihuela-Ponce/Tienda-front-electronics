import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import React from "react";
import { ContextState } from "../context/contextProvider";
import { useFilter } from "../hooks/useFilter";

export function Products() {
  const { state, addToCart, removeFromCart } = React.useContext(ContextState);

  const products = useFilter();

  const isInTheCart = (item) => {
    const isThere = state.some((el) => el.id == item.id);
    return isThere;
  };

  return (
    <main className="products">
      <ul>
        {products ? (
          products.map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                {isInTheCart(product) ? (
                  <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => removeFromCart(product)}
                  >
                    <RemoveFromCartIcon />
                  </button>
                ) : (
                  <button onClick={() => addToCart(product)}>
                    <AddToCartIcon />
                  </button>
                )}
              </div>
            </li>
          ))
        ) : (
          <p>no hay productos : Error</p>
        )}
      </ul>
    </main>
  );
}
