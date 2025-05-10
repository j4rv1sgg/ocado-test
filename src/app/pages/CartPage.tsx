import CartItemList from "@/features/cart/components/CartItemList";
import { useCart } from "@/features/cart/hooks/useCart";

const Cart: React.FC = () => {
  const { items, updateQuantity, getTotalPrice, removeFromCart } = useCart();
  return (
    <>
      <h1>Koszyk</h1>
      <CartItemList items={items} onChangeQuantity={updateQuantity} onRemoveItem={removeFromCart}/>
      <p>Łączna cena: {getTotalPrice()} zł</p>
    </>
  );
};

export default Cart;
