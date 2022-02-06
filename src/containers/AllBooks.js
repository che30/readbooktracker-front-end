/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getAllBooks from '../apirequests/GetAllBooks';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AllBooks = () => {
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
        <Navbar />
        <div>
          Loading data
        </div>
        <Footer />
      </>
    );
  }
  if (book === null) {
    return (
      <>
        <Navbar />
        <div>
          <div>
            No books yet
          </div>
          <div>
            Create books to measure progress
          </div>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <div>
      <Navbar />
      { book.map((elt) => (
        <Link
          to={{
            pathname: '/measure',
            state: {
              id: elt.id, name: elt.name, author: elt.author, isbn: elt.isbn,
            },
          }}
          key={elt.id}
          className="text-decoration-none"
        >
          <div className="d-flex justify-content-around">
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

        </Link>
      ))}
      <Footer />
    </div>

  );
};

export default AllBooks;
