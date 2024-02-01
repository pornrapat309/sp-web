import { useState } from "react";
import { BsCart } from "react-icons/bs";
import { SiShopee } from "react-icons/si";
import SearchInput from "../features/SearchInput";
import SearchList from "../components/SearchList";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");

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
        <div className="">
          <SearchInput
            placeholder="ลูกค้าใหม่รับเลย โค้ดส่วนลด หรือ โค้ดส่งฟรี*"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <SearchList searchInput={searchInput} />
        </div>
        <BsCart className="text-white w-6 h-6" />
      </div>
    </header>
  );
}
