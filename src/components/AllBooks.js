/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getAllBooks from '../apirequests/GetAllBooks';
import Footer from './Footer';
import Navbar from './Navbar';
import '../assets/allbooks.css';

const AllBooks = () => {
  const [book, setBook] = useState();
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    getAllBooks().then((data) => {
      setBook(data);
      setIsLoading(false);
    });
  }, []);
  const eltColor = (index) => {
    console.log('test succeeds', index);
    if ((index % 2) === 0) {
      return 'even__color';
    }

    return 'odd__color';
  };
  if (isloading) {
    return (
      <>
        <Navbar Navcontent="ALL BOOKS" />
        <div className="text-center">
          Loading data
        </div>
        <Footer />
      </>
    );
  }
  if (book === null) {
    return (
      <>
        <Navbar Navcontent="ALL BOOKS" />
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
      <Navbar Navcontent="ALL BOOKS" />
      <div className="container mt-3">
        <div className="row book__row justify-content-center">

          { book.map((elt, index) => (
            <div className="col-12 col-md-4 col-lg-4" key={elt.id}>
              <Link
                to={{
                  pathname: '/measure',
                  state: {
                    id: elt.id, name: elt.name, author: elt.author, isbn: elt.isbn,
                  },
                }}
                className=" list-unstyled text-decoration-none d-flex"
              >
                <div className={`${eltColor(index)} card`}>
                  <div className="card-body">
                    <h5 className="card-title green__color font-helvetica-bold">
                      <span className="font-helvetica-light">book name: </span>
                      <span>{elt.name}</span>
                    </h5>
                    <p className="card-text">
                      <span className="font-helvetica-light">author: </span>
                      <span>{elt.author}</span>
                    </p>
                    <a href="/measure" className="text-decoration-none">
                      <span className="font-helvetica-bold">isbn: </span>
                      <span className="text-dark font-helvetica-bold">{elt.isbn}</span>
                    </a>
                  </div>
                </div>

              </Link>
            </div>
          ))}

        </div>
      </div>
      <Footer />
    </div>

  );
};

export default AllBooks;
