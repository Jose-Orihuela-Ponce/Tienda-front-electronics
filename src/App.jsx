import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { useFilter } from "./hooks/useFilter";

function App() {
  const { filterdProducts, setFilters } = useFilter();

  return (
    <>
      <Header setFilters={setFilters} />
      <Cart />
      <Products products={filterdProducts} />
    </>
  );
}

export default App;
