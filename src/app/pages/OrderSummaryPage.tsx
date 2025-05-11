import { useCart } from '@/shared/hooks/useCart';
import OrderSummary from '@/features/order/components/OrderList';
import { Link } from 'react-router-dom';

const OrderSummaryPage: React.FC = () => {
  const { items, getTotalPrice, saveOrderToLocalStorage, clearCart } = useCart();
    const handlePlaceOrder = () => {
    saveOrderToLocalStorage();
    clearCart();
    window.location.href = '/ocado-test/confirmation.html';
  };
  return (
    <>
      <h1>Podsumowanie zamówienia</h1>
      <OrderSummary items={items} />
      <h3>Łączna kwota: {getTotalPrice()} zł</h3>
      <button onClick={handlePlaceOrder}>Złóż zamówienie</button>
      <br />
      <Link to="/cart">Wróć do koszyka</Link>
    </>
  );
};

export default OrderSummaryPage;
