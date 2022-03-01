// import axios from 'axios';
import jwtDecode from 'jwt-decode';
import backEndUrl from '../helpers/backendLink';
import data from '../helpers/data';

const createNewBook = async (book, id) => {
  const decoded = jwtDecode(data());
  try {
    const rawResponse = await fetch(`${backEndUrl()}/api/users/${decoded.user_id}/books`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data()}`,
      },
      body: JSON.stringify({
        name: book.name,
        author: book.author,
        isbn: book.isbn,
        user_id: decoded.user_id,
        number_of_pages: book.pages,
        category_id: id,
      }),
    });
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    return error;
  }
};
export default createNewBook;
