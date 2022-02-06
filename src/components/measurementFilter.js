/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import getAllBooks from '../apirequests/GetAllBooks';

const MeasurementFilter = () => {
  const [book, setBook] = useState();
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    getAllBooks().then((data) => {
      setBook(data);
      setIsLoading(false);
    });
  }, []);

  if (isloading) {
    return (
      <>
        <div>
          Loading data
        </div>
      </>
    );
  }
  if (book === null) {
    return (
      <>
        <div>
          <div>
            No books yet
          </div>
          <div>
            Create books to measure progress
          </div>
        </div>
      </>
    );
  }
  return (
    <div>
      { book.map((elt) => (
        <div className="d-flex justify-content-around" key={elt.id}>
          <div>
            {elt.name}
          </div>
          <div>
            {elt.author}
          </div>
          <div>
            {elt.isbn}
          </div>
        </div>
      ))}

    </div>
  );
};

export default MeasurementFilter;
