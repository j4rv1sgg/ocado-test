import { Routes, Route } from 'react-router-dom';
// import OrderSummary from '../pages/OrderSummary.tsx';
// import OrderConfirmation from '../pages/OrderConfirmation.tsx';
import CartPage from '../features/cart/pages/CartPage.tsx';
import ProductListPage from '../features/products/pages/ProductListPage.tsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<ProductListPage />} path="/" />
      <Route element={<CartPage />} path="/cart" />
      {/* <Route element={<OrderSummary />} path="/order-summary" />
      <Route element={<OrderConfirmation />} path="/order-confirmation" /> */}
    </Routes>
  );
};

export default AppRoutes;