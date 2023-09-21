import { products as initialProducts } from "../mocks/products.json";
import React from "react";
import { ContextState } from "../context/contextProvider";
export const useFilter = () => {
  const { filters, setFilters } = React.useContext(ContextState);

  const filterdProducts = initialProducts.filter((prod) => {
    if (prod.price >= filters.minPrice) {
      if (filters.category === "all") {
        return true;
      } else {
        return prod.category === filters.category;
      }
    }
  });
  return { filterdProducts, setFilters };
};
