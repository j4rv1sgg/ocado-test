import CartItemList from '../components/CartItemList';
import { useCart } from '../hooks/useCart';

const Cart: React.FC = () => {
  const { items, updateQuantity, getTotalPrice } = useCart();
  return (
    <>
      <h1>Koszyk</h1>
      <CartItemList items={items} onChangeQuantity={updateQuantity} />
      <p>Łączna cena: {getTotalPrice()} zł</p>
    </>
  );
};

export default Cart;
