import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);

  const fetchItems = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const slicedProducts = data.products.slice(0, 6);
    setTrendingProducts(slicedProducts);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Trending Products 🔥
      </h2>
      <div className="products-grid">
        {trendingProducts.map((product) => {
          return (
            <div key={product.id} className="product-card">
              <Link to={`/products/${product.id}`}>
                <img src={product.thumbnail} alt="product-pic" />
                <h3>{product.title}</h3>
              </Link>
            </div>
          );
        })}
      </div>
      <Link to="/products">
        <button style={{ width: "100%", padding: "10px", fontWeight: "bold" }}>
          View all Products
        </button>
      </Link>
    </div>
  );
};

export default Home;
