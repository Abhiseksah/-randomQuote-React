const initialState = {
  quote: '',
  author: '',
  loading: false,
  error: null,
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_QUOTE_START':
      return { ...state, loading: true, error: null };

    case 'FETCH_QUOTE_SUCCESS':
      return {
        ...state,
        quote: action.payload.quote,
        author: action.payload.author,
        loading: false,
        error: null,
      };

    case 'FETCH_QUOTE_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default quoteReducer;
