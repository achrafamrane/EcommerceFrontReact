import React, { useState } from "react";

const CardQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div>
      <form className="max-w-xs mx-auto flex justify-center items-center">
        <div className="relative flex justify-center items-center max-w-[11rem] ">
          <button
            type="button"
            id="decrement-button"
            onClick={handleDecrement}
            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
          >
            -
          </button>
          <input
            type="text"
            id="bedrooms-input"
            aria-describedby="helper-text-explanation"
            className="pt-5  bg-gray-50 border-x-0
         border-gray-300 h-11 font-medium text-center text-gray-900 text-sm
          focus:ring-blue-500 focus:border-blue-500 block w-full pb-6
           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            value={quantity}
            readOnly
            required
          />
          <button
            type="button"
            id="increment-button"
            onClick={handleIncrement}
            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardQuantity;
