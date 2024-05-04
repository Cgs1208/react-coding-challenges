import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
//currencies = https://api.frankfurter.app/currencies - from frankfurter.app
//currencies conversion = https://api.frankfurter.app/latest?amount=1&from=USD&to=INR

const CurrencyConvertor = () => {
  const [currency, setCurrency] = useState([]);
  const [convertedAmount, setConvertedAmount] = useState(1);

  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");

  const fetchCurrencies = async () => {
    try {
      const response = await fetch("https://api.frankfurter.app/currencies");
      const data = await response.json();
      const dataArray = Object.keys(data);
      setCurrency(dataArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  console.log(currency);

  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-6 text-2xl font-semibold text-gray-700">
        CurrencyConvertor
      </h2>
      <div>
        <Dropdown currencies={currency} title="From:" />
        <Dropdown currencies={currency} title="To:" />
      </div>
      <div className="mt-4">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Amount:
        </label>
        <input
          type="number"
          value={convertedAmount}
          onChange={(e) => setConvertedAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 hover:ring-indigo-500 mt-1"
        />
      </div>

      <div className="flex justify-end mt-6">
        <button
          className={`px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700`}
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
