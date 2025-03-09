import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product";

function App() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const productsData = await data.json();
    setProducts(productsData.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return !products.length > 0 ? (
    <span>No products fetched</span>
  ) : (
    <div className="products-container">
      {products.map((prod) => (
        <Product key={prod.id} image={prod.thumbnail} title={prod.title} />
      ))}
    </div>
  );
}

export default App;
