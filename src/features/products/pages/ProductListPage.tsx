import ProductList from "../components/ProductList";
import { products } from "../../cart/data/products";

const ProductListPage: React.FC = () => {
  return (
    <>
      <h1>Products</h1>
      <ProductList products={products}></ProductList>
    </>
  );
};

export default ProductListPage;
