const Product = ({ image, title }) => {
  return (
    <div className="product">
      <img src={image} alt="product-image" className="product-image" />
      <span>{title}</span>
    </div>
  );
};

export default Product;
