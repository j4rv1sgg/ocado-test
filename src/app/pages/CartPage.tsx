import CartItemList from '@/features/cart/components/CartItemList';
import { useCart } from '@/features/cart/hooks/useCart';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { items, updateQuantity, getTotalPrice, removeFromCart } = useCart();
  return (
    <>
      <h1>Koszyk</h1>
      {items.length === 0 && <p>Twój koszyk jest pusty</p>}
      <CartItemList
        items={items}
        onChangeQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />

      {items.length > 0 && (
        <div>
          <h3>Łączna cena: {getTotalPrice()} zł</h3>
          <Link to="/order-summary">
            <button>Złóż zamówienie</button>
          </Link>{' '}
        </div>
      )}
    </>
  );
};

export default Cart;
