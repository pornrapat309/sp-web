import { BsCart } from "react-icons/bs";
import { SiShopee } from "react-icons/si";
import Searchbar from "../features/Searchbar";

export default function Header() {
  return (
    <header className="flex flex-col justify-evenly w-[80vw] mx-auto min-h-[20vh]">
      <div className="flex justify-end gap-2">
        <div className="border-r-[1px] pr-2 text-white cursor-pointer">
          สมัครใหม่
        </div>
        <div className="text-white cursor-pointer">เข้าสู่ระบบ</div>
      </div>
      <div className="flex justify-evenly items-center">
        <div className="flex gap-3 items-center">
          <SiShopee className="w-12 h-12 text-white" />
          <div className="text-3xl text-white">Shipee</div>
        </div>
        <Searchbar />
        <BsCart className="text-white w-6 h-6" />
      </div>
    </header>
  );
}
