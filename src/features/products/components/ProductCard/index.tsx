import React from 'react'
import type { Product } from '../../../cart/types'
import { useCart } from '../../../cart/hooks/useCart'
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <div className={styles.card}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.price}>Cena: {product.price.main}.{product.price.fractional} zł</p>
        <button className={styles.button} onClick={() => addToCart(product)}>Dodaj do koszyka</button>
    </div>
  )
}

export default ProductCard
