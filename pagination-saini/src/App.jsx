import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product";
import { PRODUCTS_PER_PAGE } from "./constants";
import Pagination from "./components/Pagination";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const start = currentPage * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const productsData = await data.json();
    setProducts(productsData.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevState) => prevState - 1);
  };

  const handleNextPAge = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  return !products.length > 0 ? (
    <span>No products fetched</span>
  ) : (
    <div>
      <div className="products-container">
        {products.slice(start, end).map((prod) => (
          <Product key={prod.id} image={prod.thumbnail} title={prod.title} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleNextPAge={handleNextPAge}
        handlePrevPage={handlePrevPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
