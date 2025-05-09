import CartItemList from "../components/CartItemList";
import { useCart } from "../hooks/useCart";

const Cart: React.FC = () => {
  const {items, updateQuantity} = useCart();
  return <CartItemList items={items} onChangeQuantity={updateQuantity} />;
};

export default Cart;