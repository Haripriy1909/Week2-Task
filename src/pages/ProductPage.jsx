import ProductInfo from "../components/ProductInfo.jsx";

function ProductPage() {
  return (
    <div className="page-container">
      <h1>Product Info</h1>
      <p>This component receives its data via props and manages quantity via state.</p>
      <ProductInfo
        name="Wireless Headphones"
        price={49.99}
        description="Noise-cancelling over-ear headphones with 30-hour battery life."
        imageEmoji="🎧"
      />
    </div>
  );
}

export default ProductPage;
