// redux/quoteActions.js
import { getQuote } from '../service/getService';

export const fetchQuote = () => async dispatch => {
  dispatch({ type: 'FETCH_QUOTE_START' });

  try {
    const data = await getQuote();
    console.log('API Response:', data);

    dispatch({
      type: 'FETCH_QUOTE_SUCCESS',
      payload: {
        quote: data.quote,  
        author: data.author
      }
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_QUOTE_ERROR',
      payload: error.message
    });
  }
};
