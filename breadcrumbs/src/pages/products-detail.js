import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllProducts = async (id) => {
    setLoading(true);
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchAllProducts(id);
  }, []);

  if (loading)
    return (
      <h3 style={{ display: "flex", justifyContent: "center" }}>Loading...</h3>
    );

  return (
    <div>
      <h1>Product Detail page</h1>
      {product && (
        <div style={{ display: "flex" }}>
          <img
            style={{ height: "300px" }}
            src={product.thumbnail}
            alt="product-pic"
          />
          <div>
            <h3>{product.title}</h3>
            <h3>${product.price}</h3>
            <span>{product.description}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
