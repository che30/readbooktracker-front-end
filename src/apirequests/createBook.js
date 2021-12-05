// import axios from 'axios';
import data from '../helpers/data';

const createNewBook = async (book, id) => {
  console.log(book);
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
// const createNewBook = async (book, id) => {
//   const user = data();
//   try {
//     const result = await axios.post('http://127.0.0.1:3001/cats/1/books', {
//       name: book.name,
//       author: book.author,
//       isbn: book.isbn,
//       number_of_pages: book.numberOfPages,
//       cat_id: id,

//     },
//     { headers: { Authorization: `Bearer ${user.auth_token}` } });
//     return result;
//   } catch (err) {
//     return err;
//   }
// };
export default createNewBook;
