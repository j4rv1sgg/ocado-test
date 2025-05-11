import React from 'react';
import type { CartItem as CartItemType } from '../../types';
import styles from './CartItem.module.css';

interface CartItemProps {
  item: CartItemType;
  onChangeQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onChangeQuantity,
  onRemoveItem,
}) => {
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(event.target.value, 10);
    onChangeQuantity(item.product.id, quantity);
  };
  const incrementQuantity = () => {
    if (item.quantity < 99) {
      onChangeQuantity(item.product.id, item.quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      onChangeQuantity(item.product.id, item.quantity - 1);
    }
  };

  return (
    <div className={styles.cartItem}>
      <h3 className={styles.title}>{item.product.name}</h3>
      <p className={styles.price}>
        {item.product.price.main}.{item.product.price.fractional} zł x{' '}
        <button
          className={styles.quantityButton}
          onClick={decrementQuantity}
          disabled={item.quantity >= 99}
        >
          -
        </button>
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          min={1}
          max={99}
          className={styles.input}
        />
        <button
          className={styles.quantityButton}
          onClick={incrementQuantity}
          disabled={item.quantity >= 99}
        >
          +
        </button>
      </p>
      <p className={styles.totalPrice}>
        {(
          (item.product.price.main + item.product.price.fractional / 100) *
          item.quantity
        ).toFixed(2) + ' zł'}
      </p>
      <button
        className={styles.removeButton}
        onClick={() => onRemoveItem(item.product.id)}
      >
        Usuń
      </button>
    </div>
  );
};

export default CartItem;
