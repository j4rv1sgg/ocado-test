import ProductList from "../features/cart/components/ProductList";
import { products } from "../features/cart/data/products";

const MainPage: React.FC = () => {
  return (
    <>
      <ProductList products={products}></ProductList>
    </>
  );
};

export default MainPage;
