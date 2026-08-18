import { useState } from "react";
import styles from "./ProductInfo.module.css";

// Demonstrates PROPS: name, price and description are passed in from the parent.
function ProductInfo({ name, price, description, imageEmoji }) {
  // Demonstrates STATE: quantity is local state that updates the UI when changed.
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const total = (price * quantity).toFixed(2);

  return (
    <div className={styles.card}>
      <div className={styles.emoji}>{imageEmoji}</div>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price.toFixed(2)} each</p>

      <div className={styles.quantityRow}>
        <button className={styles.qtyButton} onClick={decrement}>
          −
        </button>
        <span className={styles.quantity}>{quantity}</span>
        <button className={styles.qtyButton} onClick={increment}>
          +
        </button>
      </div>

      <p className={styles.total}>Total: ${total}</p>
    </div>
  );
}

export default ProductInfo;
