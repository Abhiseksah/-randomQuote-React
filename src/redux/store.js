// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './quoteReducer';
// import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
//   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export default store;
