import React from "react";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../redux/actions";
import { FaEye, FaPlus } from "react-icons/fa6";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="bg-white rounded-xl relative group overflow-hidden col-span-3 shadow-lg transform transition hover:shadow-2xl cursor-pointer duration-300">
      <div className="border-b border-gray-200 pb-3 overflow-hidden">
        <img
          src={product.image}
          className="mx-auto h-72 group-hover:scale-110 duration-300 object-cover rounded-t-xl"
          alt={product.name}
        />
        <div className="flex flex-col absolute top-5 group-hover:right-5 -right-full duration-300 shadow-xl">
          <div
            className="size-10 text-xl text-white flex items-center justify-center bg-rose-500 hover:bg-rose-600"
            onClick={() =>
              dispatch({ type: ACTIONS.SAVE_TO_CART, payload: product.id })
            }
          >
            <FaPlus />
          </div>
          <div className="size-10 text-xl text-neutral-500 flex items-center justify-center bg-white">
            <FaEye />
          </div>
        </div>
      </div>
      <div className="p-5 flex flex-col justify-between">
        <h2 className="text-2xl font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>
        <p className="text-gray-500 line-clamp-4 my-3">{product.description}</p>
        <p className="text-lg font-bold text-gray-800 mt-auto">
          ${product.price}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
