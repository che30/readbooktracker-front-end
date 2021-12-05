// import axios from 'axios';
import data from '../helpers/data';

const createNewBook = async (book, id) => {
  const user = data();
  try {
    const rawResponse = await fetch(`http://127.0.0.1:3001/cats/${id}/books`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.auth_token}`,
      },
      body: JSON.stringify({
        name: book.name,
        author: book.author,
        isbn: book.isbn,
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
