import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

//currencies = https://api.frankfurter.app/currencies - from frankfurter.app
//currencies conversion = https://api.frankfurter.app/latest?amount=1&from=USD&to=INR

const CurrencyConvertor = () => {
  const [currency, setCurrency] = useState([]);
  const [amount, setAmount] = useState(1);

  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");

  const [convertedAmount, setConvertedAmount] = useState("");
  const [isConverting, setIsConverting] = useState(false);

  const [favourites, setFavourites] = useState(
    localStorage.getItem("favourites") || ["INR", "USD"]
  );

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

  const handleFavourites = (currency) => {
    //add or remove favourites
  };

  const handleConversion = async () => {
    //conversion logic
    if (!amount) return;
    setIsConverting(true);
    try {
      const response = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await response.json();
      setConvertedAmount(data.rates[toCurrency] + " " + toCurrency);
    } catch (error) {
      console.log(error);
      setIsConverting(false);
    } finally {
      setIsConverting(false);
    }
  };

  const handleSwapCurrency = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-6 text-2xl font-semibold text-gray-700">
        Currency converter
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-2">
        <Dropdown
          currencies={currency}
          title="From:"
          handleFavourites={handleFavourites}
          currency={fromCurrency}
          setCurrency={setFromCurrency}
          favourites={favourites}
        />
        {/* swap currency button start*/}
        <div className="flex justify-center items-center">
          <button
            onClick={handleSwapCurrency}
            className="bg-gray-300 rounded-full p-2 hover:bg-gray-400 -mb-5"
          >
            <FaArrowRightArrowLeft />
          </button>
        </div>
        {/* swap currency button end*/}
        <Dropdown
          currencies={currency}
          title="To:"
          handleFavourites={handleFavourites}
          currency={toCurrency}
          setCurrency={setToCurrency}
          favourites={favourites}
        />
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
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 hover:ring-indigo-500 mt-1"
        />
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={handleConversion}
          className={`px-5 py-2 bg-indigo-600 text-white rounded-md hover:outline-none hover:ring-2 hover:ring-indigo-500 hover:ring-offset-2
          ${isConverting ? "animate-ping" : ""} `}
        >
          Convert
        </button>
      </div>

      {convertedAmount && (
        <div className="mt-4 text-lg font-medium text-right text-green-600">
          Converted Amount: {convertedAmount}
        </div>
      )}
    </div>
  );
};

export default CurrencyConvertor;
