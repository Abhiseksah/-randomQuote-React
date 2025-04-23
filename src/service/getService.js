import axios from 'axios';

export const getQuote = async () => {
  const response = await axios.get('https://dummyjson.com/quotes/random');
  // console.log('RAW response:', response.data);
  return response.data;
};
