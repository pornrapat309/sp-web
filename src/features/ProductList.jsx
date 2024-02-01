import ProductItem from "./ProductItem";

export default function ProductList({ allProducts }) {
  return (
    <div>
      <ProductItem allProducts={allProducts} />
    </div>
  );
}
