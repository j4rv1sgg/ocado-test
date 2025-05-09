import React from 'react'
import CartItem from '../CartItem'
import type { CartItem as CartItemType } from '../../types'

type CartItemListProps = {
  items: CartItemType[]
  onChangeQuantity: (productId: number, quantity: number) => void
}

const CartItemList: React.FC<CartItemListProps> = ({ items, onChangeQuantity }) => {
  return (
    <ul className="cartItemList">
      {items.map(item => (
        <li key={item.product.id}>
          <CartItem item={item} onChangeQuantity={onChangeQuantity} />
        </li>
      ))}
    </ul>
  )
}

export default CartItemList
