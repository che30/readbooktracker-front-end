// import axios from 'axios';
import jwtDecode from 'jwt-decode';
import data from '../helpers/data';

const createNewBook = async (book, id) => {
  const token = data();
  const decoded = jwtDecode(token);
  try {
    const rawResponse = await fetch(`https://mysterious-eyrie-66534.herokuapp.com/${decoded.user_id}/books`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: book.name,
        author: book.author,
        isbn: book.isbn,
        user_id: decoded.user_id,
        number_of_pages: book.pages,
        cat_id: id,
      }),
    });
    const content = await rawResponse.json();
    console.log(content);
    return content;
  } catch (error) {
    return error;
  }
};
export default createNewBook;
