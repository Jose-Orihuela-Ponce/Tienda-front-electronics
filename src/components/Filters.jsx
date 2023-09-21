import React from "react";
import "./Filters.css";
import { ContextState } from "../context/contextProvider";

export function Filters() {
  const { filters, setFilters } = React.useContext(ContextState);
  const minPriceId = React.useId();
  const categoryId = React.useId();

  const handleChangeMinPrice = (e) => {
    setFilters((prev) => ({ ...prev, minPrice: e.target.value }));
  };
  const handleChangeCategory = (e) => {
    setFilters((prev) => ({ ...prev, category: e.target.value }));
  };
  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceId}>Price</label>
        <input
          type="range"
          id={minPriceId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>{filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryId}>Category</label>
        <select id={categoryId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  );
}
