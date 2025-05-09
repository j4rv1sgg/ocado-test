import React from 'react'
import type { Product } from '../types'
import { useCart } from '../hooks/useCart'


interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <div className="product-card">
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.price.main}.{product.price.fractional}</p>
        <button onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard
