import axios from 'axios';
import data from '../helpers/data';

const sendLoginRequest = async (email, password) => {
  try {
    const result = await axios.post('http://127.0.0.1:3001/auth/login', {
      email,
      password,
    });
    localStorage.setItem('data',
      JSON.stringify(result.data));

    const token = data();
    const books = await axios.get('http://127.0.0.1:3001/allbooks',
      { headers: { Authorization: `Bearer ${token.auth_token}` } });
    localStorage.setItem('books', JSON.stringify(books.data));
    const cats = await axios.get('http://127.0.0.1:3001/cats',
      { headers: { Authorization: `Bearer ${token.auth_token}` } });
    localStorage.setItem('categories', JSON.stringify(cats.data));
    return result;
  } catch (error) {
    return error;
  }
};
export default sendLoginRequest;
