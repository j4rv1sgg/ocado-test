import ProductList from "../features/cart/components/ProductList";
import { products } from "../features/cart/data/products";

const MainPage: React.FC = () => {
  return (
    <>
      <h1>Products</h1>
      <ProductList products={products}></ProductList>
    </>
  );
};

export default MainPage;
