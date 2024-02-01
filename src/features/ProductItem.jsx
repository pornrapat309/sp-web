import { TbCurrencyBaht } from "react-icons/tb";

export default function ProductItem() {
  return (
    <div className="flex flex-col justify-between w-48 my-3 pb-3 border shadow-md">
      <div className="h-40">images</div>
      <div className="pb-4">productName</div>
      <div className="flex justify-between">
        <div className="flex items-center text-primary">
          <TbCurrencyBaht />
          <span>X</span>
        </div>
        <div className="text-sm text-gray-400">ขายแล้ว xxx ชิ้น</div>
      </div>
    </div>
  );
}
