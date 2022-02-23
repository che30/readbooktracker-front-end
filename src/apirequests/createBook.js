// import axios from 'axios';
import jwtDecode from 'jwt-decode';

const createNewBook = async (book, id) => {
  const decoded = jwtDecode(JSON.parse(localStorage.getItem('auth_token')));
  try {
    const rawResponse = await fetch(`http://127.0.0.1:3001/api/users/${decoded.user_id}/books`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth_token'))}`,
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
    return content;
  } catch (error) {
    return error;
  }
};
export default createNewBook;
