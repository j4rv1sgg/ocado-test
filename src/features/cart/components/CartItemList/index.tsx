import React from 'react'
import CartItem from '../CartItem'
import type { CartItem as CartItemType } from '../../types'
import styles from './CartItemList.module.css'

type CartItemListProps = {
  items: CartItemType[]
  onChangeQuantity: (productId: number, quantity: number) => void
  onRemoveItem: (productId: number) => void
}

const CartItemList: React.FC<CartItemListProps> = ({ items, onChangeQuantity, onRemoveItem }) => {
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item.product.id}>
          <CartItem item={item} onChangeQuantity={onChangeQuantity} onRemoveItem={onRemoveItem} />
        </li>
      ))}
    </ul>
  )
}

export default CartItemList
