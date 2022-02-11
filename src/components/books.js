import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import getAllBooks from '../apirequests/GetAllBooks';

const Book = () => {
  const history = useHistory;
  const [book, setBook] = useState([]);
  useEffect(() => {
    getAllBooks().then((res) => {
      console.log(res);
      setBook(res);
    });
  }, []);
  if (book.message) {
    return (
      <>
      </>
    );
  }
  if (Object.keys(book).length !== 0) {
    return (
      <div>
        <ul className="d-flex justify-content-around list-unstyled">
          <li>book number</li>
          <li>book name</li>
          <li>book author</li>
          <li>book number of pages</li>
          <li>isbn</li>
        </ul>
        {book.map((elt) => (
          <ul
            key={elt.id}
            className="d-flex
          justify-content-around list-unstyled"
          >
            <li>
              {elt.id}
            </li>
            <li>
              {elt.name}
            </li>
            <li>
              {elt.author}
            </li>
            <li>
              {elt.number_of_pages}
            </li>
            <li>
              {elt.isbn}
            </li>
          </ul>
        ))}
        <div className="mx-auto text-center">
          <button type="button" onClick={history.goBack}>Back</button>
        </div>
      </div>
    );
  }
  return (
    <div className="text-center">
      Fetching books
    </div>
  );
};
export default Book;
