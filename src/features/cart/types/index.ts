import type { Product } from "@/features/products/types";

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  saveOrderToLocalStorage: () => void;
}
export interface CartItem {
  product: Product;
  quantity: number;
}