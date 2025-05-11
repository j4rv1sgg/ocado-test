import React from 'react'
import styles from './OrderList.module.css'
import type { CartItem } from '@/features/cart/types'

interface OrderSummaryProps {
  items: CartItem[];
}

const OrderList: React.FC<OrderSummaryProps> = ({ items }) => {
  return (
      <div className={styles.orderDetails}>
      <div className={styles.orderItems}>
        <div className={styles.orderItem}>
          <strong className={styles.itemName}>Produkt</strong>
          <strong className={styles.itemUnitPrice}>Cena</strong>
          <strong className={styles.itemQuantity}>Ilość</strong>
          <strong className={styles.itemPrice}>Suma</strong>
        </div>
        
        {items.map(item => {
          const itemPrice = item.product.price.main + item.product.price.fractional / 100;
          const totalItemPrice = itemPrice * item.quantity;
          
          return (
            <div key={item.product.id} className={styles.orderItem}>
              <span className={styles.itemName}>{item.product.name}</span>
              <span className={styles.itemUnitPrice}>{itemPrice}</span>
              <span className={styles.itemQuantity}>x {item.quantity}</span>
              <span className={styles.itemPrice}>{totalItemPrice.toFixed(2)}</span>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default OrderList
