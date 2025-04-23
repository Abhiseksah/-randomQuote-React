// pages/QuotePage.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchQuote } from '../redux/quoteActions';
import DisplayQuote from '../components/DisplayQuote';
import FetchQuote from '../components/FetchQuote';

const QuotePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuote()); 
  }, [dispatch]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Quote Page</h1>
      <DisplayQuote />
      <FetchQuote /> {}
    </div>
  );
};

export default QuotePage;
