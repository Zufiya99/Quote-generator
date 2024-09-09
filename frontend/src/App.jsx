import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // Fetch a random quote from the backend API using Axios
  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/quotes/random"
      );
      setQuote(response.data.quote);
      setAuthor(response.data.author);
    } catch (error) {
      console.error("Error fetching the quote:", error);
    }
  };

  // Fetch a quote on component mount
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>Quote Generator</h1>
      </header>
      <div className="quote-container">
        <div className="quote-box">
          <p className="quote-text">" {quote} "</p>
          <p className="quote-author">- {author}</p>
          <button className="new-quote" onClick={fetchRandomQuote}>
            Generate New Quote
          </button>
        </div>
      </div>
      <footer className="footer">
        <p>
          &copy; Made by{" "}
          <a className="portfolio-link" href="https://portfolio-99z.web.app/" target="_blank">
            Zufiya Idrisi
          </a>{" "}
          | All rights reserved | 2024
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/zufiyaidrisi9797/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Zufiya99"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://x.com/Zufiya_Idrisi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
