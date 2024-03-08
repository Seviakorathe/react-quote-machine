import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote({ text: data.content, author: data.author });
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  const tweetQuote = () => {
    const tweetText = `"${quote.text}" - ${quote.author}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}`;
    window.open(tweetUrl, "_blank");
  };

  return (
    <div id="quote-box" className="text-center">
      <div id="text" className="my-4">
        "{quote.text}"
      </div>
      <div id="author" className="mb-4">
        - {quote.author}
      </div>
      <div className="button">
      <button
        id="new-quote"
        className="btn btn-primary mx-2"
        onClick={fetchQuote}
      >
        New Quote
      </button>
      <a
        id="tweet-quote"
        className="btn btn-info"
        href="#"
        onClick={tweetQuote}
      >
        Tweet Quote
      </a>
      </div>
    </div>
  );
};

export default App;
