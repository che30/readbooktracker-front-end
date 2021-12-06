import React, { useState, useEffect } from 'react';
import getAllBooks from '../apirequests/GetAllBooks';

const Book = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    getAllBooks().then((res) => {
      setBook(res);
    });
  }, []);
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

      </div>
    );
  }
  return (
    <div>
      no books yet
    </div>
  );
};
export default Book;
