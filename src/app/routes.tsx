import { Routes, Route } from 'react-router-dom';
import ProductList from '../pages/ProductList.tsx';
import Cart from '../pages/Cart.tsx';
import OrderSummary from '../pages/OrderSummary.tsx';
import OrderConfirmation from '../pages/OrderConfirmation.tsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order-summary" element={<OrderSummary />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
    </Routes>
  );
};

export default AppRoutes;