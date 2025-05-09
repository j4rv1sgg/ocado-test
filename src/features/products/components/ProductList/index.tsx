import React from 'react'
import styles from './ProductList.module.css'
import ProductCard from '../ProductCard'
import type { Product } from '../../../cart/types'

interface ProductListProps {
  products: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
