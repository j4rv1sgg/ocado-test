import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from '../features/cart/context/CartProvider.tsx';
import AppRoutes from './routes.tsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <AppRoutes />
      </Router>
    </CartProvider>
  );
}

export default App;