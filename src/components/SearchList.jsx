import { useState, useEffect } from "react";

export default function SearchList({ searchInput }) {
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

  let searchArr = data?.products?.filter((el) =>
    el.title.toLowerCase().startsWith(searchInput.toLowerCase())
  );
  if (searchInput.length === 0) {
    searchArr = [];
  }

  return (
    <div>
      {searchArr.length > 0 && (
        <ul className="absolute bg-white z-50 w-[50rem]">
          {searchArr.map((item) => (
            <li className="p-2">{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
