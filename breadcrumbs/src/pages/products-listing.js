import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductsListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllProducts = async () => {
    setLoading(true);
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
    setLoading(false);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  if (loading)
    return (
      <h3 style={{ display: "flex", justifyContent: "center" }}>Loading...</h3>
    );

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Products Listing
      </h2>
      <div className="products-grid">
        {products?.map((product) => {
          return (
            <div key={product.id} className="product-card">
              <Link to={`/products/${product.id}`}>
                <img src={product.thumbnail} alt="product-pic" />
                <h3>{product.title}</h3>
                <h3>${product.price}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsListing;
