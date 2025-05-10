import { useCart } from "@/features/cart/hooks/useCart";
import OrderSummary from "@/features/order/components/OrderList";

const OrderSummaryPage: React.FC = () => {
  const { items, getTotalPrice } = useCart();
  return (
    <>
      <h1>Podsumowanie zamówienia</h1>
      <OrderSummary items={items} totalPrice={getTotalPrice()} />
    </>
  );
};

export default OrderSummaryPage;
