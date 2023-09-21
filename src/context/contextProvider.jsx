import React from "react";

export const ContextState = React.createContext();

export function ProviderFunction({ children }) {
  const [filters, setFilters] = React.useState({
    category: "all",
    minPrice: 0,
  });
  const [cart, setCart] = React.useState([]);

  const addToCart = (product) => {
    const productInCart = cart.findIndex((item) => item.id == product.id);
    if (productInCart >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCart].quantity += 1;
      setCart(newCart);
    } else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const productInCart = cart.filter((item) => item.id != product.id);
    setCart(productInCart);
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <ContextState.Provider
      value={{
        filters,
        setFilters,
        cart,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </ContextState.Provider>
  );
}
