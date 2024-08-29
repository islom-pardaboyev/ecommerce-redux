import React from "react";
import { FaAnglesLeft, FaMinus, FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../redux/actions";

function Sidebar() {
  const dispatch = useDispatch();
  const showSideBar = useSelector((state) => state.showSideBar);
  const savedProducts = useSelector((state) => state.savedProducts);
  const total = savedProducts
    .reduce((acc, cur) => acc + cur.price * cur.amount, 0)
    .toFixed(2);
  return (
    <aside
      className={`fixed top-0 h-screen lg:w-[35vw] z-20 w-screen duration-500 shadow-2xl bg-white ${
        showSideBar ? "right-0" : "-right-full"
      }`}
    >
      <header className="flex items-center justify-between p-5">
        <FaAnglesLeft
          className="text-xl cursor-pointer"
          onClick={() => dispatch({ type: ACTIONS.TOGGLE_SIDEBAR })}
        />
        <div className="flex flex-col items-end ">
          <p className="font-bold text-3xl">Total Price ${total}</p>
          <p className="capitalize">({savedProducts.length}) selected items</p>
        </div>
      </header>
      <span className="w-full h-px bg-neutral-500 block"></span>
      <div className="flex flex-col">
        {savedProducts.length ? (
          <div className="p-5 flex flex-col gap-5">
            {savedProducts.map((item, index) => (
              <div
                key={index + 1}
                className="border border-black gap-6 p-5 flex rounded-md items-center justify-between"
              >
                <img src={item.image} width={50} alt="" />
                <div className="flex w-fit items-center border border-black rounded-full p-2">
                    <button
                      type="button"
                      className="bg-neutral-500 hover:bg-neutral-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                      onClick={() =>
                        dispatch({
                          type: ACTIONS.DECREASE_AMOUNT,
                          payload: item.id,
                        })
                      }
                    >
                      <FaMinus />
                    </button>
                    <p className="px-2">{item.amount}</p>
                    <button
                      type="button"
                      className="bg-neutral-500 hover:bg-neutral-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                      onClick={() =>
                        dispatch({
                          type: ACTIONS.INCREASE_AMOUNT,
                          payload: item.id,
                        })
                      }
                    >
                      <FaPlus />
                    </button>
                  </div>
                <div className="flex flex-col items-end">
                  
                  <div className="flex items-end flex-col">
                    <p className="ml-auto">{item.title}</p>
                    <p className="font-bold text-4xl">${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="w-full flex h-screen items-center justify-center text-6xl font-bold text-neutral-400">
            Empty...
          </p>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
