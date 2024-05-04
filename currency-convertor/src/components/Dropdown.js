import React from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi";

const Dropdown = ({
  currencies,
  currency,
  setCurrency,
  favourites,
  handleFavourites,
  title = "",
}) => {
  const isFavourites = (currency) => favourites.includes(currency);
  return (
    <div>
      <label htmlFor={title} className="my-2 block text-sm text-gray-700">
        {title}
      </label>
      <div className="mt-1 relative">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="border border-gray-400 shadow-sm rounded-md w-full p-2 
        focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {/* favourites */}
          {favourites.map((currency) => (
            <option key={currency} value={currency} className="bg-gray-300">
              {currency}
            </option>
          ))}
          <hr />
          {currencies
            .filter((currency) => !favourites.includes(currency))
            .map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
        </select>

        <button
          className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5"
          onClick={() => handleFavourites(currency)}
        >
          {isFavourites(currency) ? <HiStar /> : <HiOutlineStar />}
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
