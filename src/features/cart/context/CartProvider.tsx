import { useState } from "react";
import type { CartItem, Product } from "../types";
import { CartContext } from "./CartContext";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  
  const addToCart = (product: Product) => {
    setItems([...items, { product, quantity: 1 }]);
  };
  
  const removeFromCart = (productId: number) => {
    setItems(items.filter(item => item.product.id !== productId));
  };
  
  const updateQuantity = (productId: number, quantity: number) => {
    setItems(items.map(item => item.product.id === productId ? { ...item, quantity } : item));
  };
  
  const clearCart = () => {
    setItems([]);
  };
  
  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.product.price.main * item.quantity, 0);
  };
  
  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};