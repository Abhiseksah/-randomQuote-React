// pages/QuotePage.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchQuote } from '../redux/quoteActions';
import DisplayQuote from '../components/DisplayQuote';
import FetchQuote from '../components/FetchQuote';

const QuotePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuote()); // ✅ Fetch one quote on mount
  }, [dispatch]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Quote Page</h1>
      <DisplayQuote />
      <FetchQuote /> {/* ✅ Add this to show the button */}
    </div>
  );
};

export default QuotePage;
