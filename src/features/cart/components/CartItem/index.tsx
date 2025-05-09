import React from 'react'
import type { CartItem as CartItemType } from '../../types'
import styles from './CartItem.module.css'

interface CartItemProps {
  item: CartItemType
  onChangeQuantity: (productId: number, quantity: number) => void
}

const CartItem: React.FC<CartItemProps> = ({ item, onChangeQuantity }) => {
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(event.target.value, 10)
    onChangeQuantity(item.product.id, quantity)
  }

  return (
    <div className={styles.cartItem}>
      <h3 className={styles.title}>{item.product.name}</h3>
      <p className={styles.price}>
        {item.product.price.main}.{item.product.price.fractional} PLN x {item.quantity}{' '}
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          min={1}
          max={99}
          className={styles.input}
        />
      </p>
    </div>
  )
}

export default CartItem
