import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { backendUrl, currency } from "../App";

const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(backendUrl + "/api/product/list");
        if (response.data.success) {
          setList(response.data.products);
          console.log(list);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    };
    fetchList();
  }, []);
  return (
    <>
      <p className="mb-2">All Product List</p>

      <div className="flex flex-col gap-2">
        {/* List Table Title */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* Product List */}
        {list.map((item, index) => (
          <div
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
            key={index}
          >
            <img className="w-12" src={item.image[0]} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>
              {currency} {item.price}
            </p>
            <p className="text-right md:text-center cursor-pointer text-lg">
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
export default List;
