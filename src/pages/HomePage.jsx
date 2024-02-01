import ProductList from "../features/ProductList";

export default function HomePage() {
  // fetch("https://dummyjson.com/products")
  //   .then((res) => res.json())
  //   .then(console.log);
  return (
    <div className="w-[80vw] mx-auto min-h-[60vh]">
      <div className="sticky top-[20vh] py-4 border-b-4 border-primary text-primary text-center bg-white">
        สินค้าแนะนำประจำวัน
      </div>
      <ProductList />
    </div>
  );
}
