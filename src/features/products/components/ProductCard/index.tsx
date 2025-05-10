import React from 'react'
import { useCart } from '@/features/cart/hooks/useCart';
import styles from './ProductCard.module.css';
import type { Product } from '../../types';

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
