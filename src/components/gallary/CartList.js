import React from "react";
import { useGallary } from "../../contexts/gallary-context";

const CartList = () => {
  const { cartItems, removeFromCart } = useGallary();
  return (
    <div className="flex flex-col items-start gap-5 px-5 py-10">
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <div
            className="inline-flex items-center justify-between gap-x-5"
            key={item.id}
          >
            <img
              src={item.url}
              alt=""
              className="object-cover w-10 h-10 rounded-lg"
            />
            <button
              className="p-3 text-sm font-semibold text-white bg-red-400 rounded-lg"
              onClick={() => removeFromCart(item.id)}
            >
              {" "}
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default CartList;
