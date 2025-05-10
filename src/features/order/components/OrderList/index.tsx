import React from 'react'
import styles from './OrderList.module.css'
import type { CartItem } from '@/features/cart/types'

interface OrderSummaryProps {
  items: CartItem[];
}

const OrderList: React.FC<OrderSummaryProps> = ({ items }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
       {items.map(item => (
          <li className={styles.item} key={item.product.id}>
            <span>{item.product.name}</span>
            <span>{item.product.price.main}.{item.product.price.fractional} zł</span>
            <span>{item.quantity} szt.</span>
            <b className={styles.totalPrice}>
          {(
            (item.product.price.main + item.product.price.fractional / 100) *
            item.quantity
          ).toFixed(2) + ' zł'}
        </b>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OrderList
