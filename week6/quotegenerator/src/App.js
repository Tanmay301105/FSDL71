import React, { useState } from "react";
import Quote from "./components/Quote";
import "./styles.css";

const App = () => {
  const quotes = [
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "You miss 100% of the shots you don’t take.",
    "Believe you can and you’re halfway there."
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="container">
      <h1>Random Quote Generator</h1>
      <Quote text={currentQuote} />
      <button onClick={generateQuote}>New Quote</button>
    </div>
  );
};

export default App;
