import { HashRouter as Router } from 'react-router-dom';
import { CartProvider } from '@/features/cart/context/CartProvider.tsx';
import AppRoutes from './routes.tsx';
import { Layout } from './Layout/index.tsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
