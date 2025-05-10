import { Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage.tsx';
import ProductListPage from './pages/ProductsPage.tsx';
import OrderSummaryPage from './pages/OrderSummaryPage.tsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<ProductListPage />} path="/" />
      <Route element={<CartPage />} path="/cart" />
      <Route element={<OrderSummaryPage />} path="/order-summary" />
      {/* <Route element={<OrderConfirmation />} path="/order-confirmation" /> */}
    </Routes>
  );
};

export default AppRoutes;