// components/FetchQuote.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchQuote } from '../redux/quoteActions';

const FetchQuote = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(fetchQuote())}>
      Get New Quote
    </button>
  );
};

export default FetchQuote;
