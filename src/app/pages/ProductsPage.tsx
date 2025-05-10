import ProductList from "@/features/products/components/ProductList";
import { products } from "@/features/products/data/products";


const ProductsPage: React.FC = () => {
  return (
    <>
      <h1>Produkty</h1>
      <ProductList products={products}></ProductList>
    </>
  );
};

export default ProductsPage;
