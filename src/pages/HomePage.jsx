import { useState, useEffect } from "react";
import ProductList from "../features/ProductList";

export default function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAllProduct();
  }, []);

  const fetchAllProduct = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log("data ==> ", data.products);
  return (
    <div className="w-[80vw] mx-auto min-h-[60vh]">
      <div className="sticky top-[20vh] py-4 border-b-4 border-primary text-primary text-center bg-white">
        สินค้าแนะนำประจำวัน
      </div>
      <div className="flex justify-evenly flex-wrap">
        {data?.products?.map((item) => (
          <ProductList key={item.id} allProducts={item} />
        ))}
      </div>
    </div>
  );
}
