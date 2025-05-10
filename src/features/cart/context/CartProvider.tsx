import { useState } from 'react';
import { CartContext } from './CartContext';
import type { CartItem } from '../types';
import type { Product } from '@/features/products/types';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const existingItemIndex = items.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingItemIndex >= 0) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + 1,
      };
      setItems(updatedItems);
    } else {
      setItems([...items, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setItems(items.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setItems(
      items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

 const getTotalPrice = () => {
  const totalPrice = items.reduce(
    (total, item) => total + (item.product.price.main + item.product.price.fractional / 100) * item.quantity,
    0
  );
  return Number(totalPrice.toFixed(2));
};

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
