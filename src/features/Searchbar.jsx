import { IoIosSearch } from "react-icons/io";

export default function Searchbar() {
  return (
    <form className="relative">
      <input
        type="text"
        placeholder="ลูกค้าใหม่รับเลย โค้ดส่วนลด หรือ โค้ดส่งฟรี*"
        className="w-[50rem] px-2 py-[0.6rem] rounded-sm"
      />
      <button className="bg-primary absolute right-1 top-1 px-4 py-2 rounded-sm">
        <IoIosSearch className="text-white flex justify-center items-center w-5 h-5" />
      </button>
    </form>
  );
}
