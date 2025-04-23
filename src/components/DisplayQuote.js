import React from 'react';
import { useSelector } from 'react-redux';

const DisplayQuote = () => {
  const quoteState = useSelector(state => state.quote);
  const { quote, author, loading, error } = quoteState;

  console.log('Redux quote state:', quoteState);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!quote) return <p>No quote fetched yet.</p>;

  return (
    <div>
      {/* <h3>Random Quote</h3> */}
      <blockquote>
        “{quote}”
        <footer>— {author}</footer>
      </blockquote>
    </div>
  );
};

export default DisplayQuote;
