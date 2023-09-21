import React from "react";
import { initialState, reducer } from "../hooks/useReducer";
export const ContextState = React.createContext();

export function ProviderFunction({ children }) {
  const [filters, setFilters] = React.useState({
    category: "all",
    minPrice: 0,
  });
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <ContextState.Provider
      value={{
        filters,
        setFilters,
        state,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </ContextState.Provider>
  );
}
