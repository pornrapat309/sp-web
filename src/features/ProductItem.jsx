import { TbCurrencyBaht } from "react-icons/tb";

export default function ProductItem({ allProducts }) {
  return (
    <>
      <div className="flex flex-col justify-between w-48 h-72 my-3 pb-3 border shadow-md">
        <div className="h-40 w-50">
          <img
            src={allProducts.images[0]}
            alt="product-pic"
            className="h-full w-full"
          />
        </div>
        <div className="py-2 px-2 text-sm">{allProducts.title}</div>
        <div className="flex justify-between px-2">
          <div className="flex items-center text-primary">
            <TbCurrencyBaht />
            <span>{allProducts.price}</span>
          </div>
          <div className="text-sm text-gray-400">
            คลัง {allProducts.stock} ชิ้น
          </div>
        </div>
      </div>
    </>
  );
}
