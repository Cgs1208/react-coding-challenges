import React from "react";

const Dropdown = ({
  currencies,
  currency,
  setCurrency,
  favourites,
  handleFavourites,
  title = "",
}) => {
  return (
    <div>
      <label htmlFor={title} className="my-2">
        {title}
      </label>
      <div>
        <select className="border border-gray-400 shadow-md rounded-md w-full p-1">
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
