import React, { useState } from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar";
import "../css/Background.css"

const CurrencyConvert = () => {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("USD");
    const [convertedAmount, setConvertedAmount] = useState(null);

    const handleAmountChange = (e) => {
        setAmount(parseFloat(e.target.value) || 0);
    };

    const handleFromCurrencyChange = (e) => {
        setFromCurrency(e.target.value);
    };

    const handleToCurrencyChange = (e) => {
        setToCurrency(e.target.value);
    };

    const handleConvert = () => {
        const conversionRates = {
            USD: 1,
            GBP: 0.79,
            EUR: 0.92,
            IDR: 15618,
        };

        const result = (amount / conversionRates[fromCurrency]) * conversionRates[toCurrency];
        setConvertedAmount(result.toFixed(2));
    };

    return (
        <Container>
            <Navbar />
            <div className="d-flex flex-column align-items-center">
                <div className="bg-blue w-80 rounded-md shadow-md shadow-secondary p-5">
                    <h1 className="font-weight-bold text-xl text-center mb-6">Currency Converter</h1>
                    <div className="d-flex gap-3 justify-content-center">
                        <input
                            type="number"
                            className="bg-light w-36 rounded-md"
                            value={amount}
                            onChange={handleAmountChange}
                        />
                        <select
                            name="fromCurrency"
                            id="fromCurrency"
                            className="bg-light rounded-md"
                            value={fromCurrency}
                            onChange={handleFromCurrencyChange}
                        >
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
                            <option value="EUR">EUR</option>
                            <option value="IDR">IDR</option>
                        </select>
                        <h2>TO</h2>
                        <select
                            name="toCurrency"
                            id="toCurrency"
                            className="bg-light rounded-md"
                            value={toCurrency}
                            onChange={handleToCurrencyChange}
                        >
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
                            <option value="EUR">EUR</option>
                            <option value="IDR">IDR</option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <button
                            className="bg-primary font-weight-bold text-white p-2 rounded-md hover-bg-secondary text-sm"
                            onClick={handleConvert}
                        >
                            Convert
                        </button>
                    </div>
                    <div className="d-flex flex-column align-items-center mt-4">
                        <h4>Try output :</h4>
                        <textarea
                            name="output"
                            id="output"
                            className="bg-light w-64 rounded-md mt-2"
                            value={convertedAmount !== null ? convertedAmount : ''}
                            readOnly
                        ></textarea>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CurrencyConvert;
