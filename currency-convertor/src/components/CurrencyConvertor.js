import React, { useState } from "react";
//currencies = https://api.frankfurter.app/currencies
//currencies conversion = https://api.frankfurter.app/latest?amount=1&from=USD&to=INR

const CurrencyConvertor = () => {
  const [currnecies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);

  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-5 text-2xl font-semibold text-gray-700">
        CurrencyConvertor
      </h2>
      <div>Dropdowns</div>
      <div className="mt-4">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Amount:
        </label>
        <input
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
        />
      </div>

      <div className="flex justify-emd mt-7">
        <button
          className={`px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        >
          Convert
        </button>
      </div>

      <div className="mt-4 text-lg font-medium text-right text-green-600">
        Converted Amount: 68
      </div>
    </div>
  );
};

export default CurrencyConvertor;
