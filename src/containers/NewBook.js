import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, useHistory } from 'react-router-dom';
import {
  bookCreated,
  FilterCategories,
  NewBookAuthor,
  NewBookIsbn,
  NewBookName,
  NewBookPages,
  ValidateEr,
} from '../actions';
import BookFilter from '../components/bookFilter';
import createNewBook from '../apirequests/createBook';
import Footer from '../components/Footer';
import '../assets/Newbook.css';
import getAllCategories from '../apirequests/GetAllCategories';
import Navbar from '../components/Navbar';
import ErrMsg from './ErrMsg';

const NewBook = ({
  saveAuthor,
  saveIsbn,
  saveName,
  saveNbPg,
  book,
  changeFilter,
  filter,
  created,
  errMsg,
}) => {
  const history = useHistory();
  const handleChange = (e) => {
    switch (e.target.id) {
      case 'name':
        saveName(e.target.value);
        break;
      case 'author':
        saveAuthor(e.target.value);
        break;
      case 'isbn':
        saveIsbn(e.target.value);
        break;
      case 'pages':
        saveNbPg(e.target.value);
        break;
      default:
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const final = await getAllCategories();
    final.data.forEach((element) => {
      if (element.name === filter) {
        createNewBook(book, element.id).then((result) => {
          if (Object.keys(result).length === 9) {
            created(true);
          } else if (result.message) {
            errMsg([result.message]);
          }
        });
      }
    });
  };
  if (book.created) {
    return (
      <div>
        <nav className="bg_color_Pantone w-100 text-white text-center">
          New Book
        </nav>
        <div>
          {' '}
          <button type="button" onClick={history.goBack}>Back</button>
        </div>
        <Redirect to="/books" />
      </div>
    );
  }
  return (
    <div className="main__new__book__container">
      <Navbar Navcontent="New Book" />
      <ErrMsg />
      <div className="new__book__padding__top">
        <div className="text-center w-100 mt-3">
          <BookFilter changeFilter={changeFilter} />
        </div>
        <div>
          <form className="mx-auto new__book__form">
            <div>
              <input
                className="font-helvetica-light"
                type="text"
                id="name"
                placeholder="name"
                value={book.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="font-helvetica-light"
                type="text"
                id="author"
                placeholder="author"
                value={book.author}
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                className="font-helvetica-light"
                type="text"
                id="isbn"
                placeholder="ISBN"
                value={book.isbn}
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                className="font-helvetica-light"
                type="number"
                id="pages"
                placeholder="number of pages"
                value={book.numberOfPages}
                onChange={handleChange}
              />
            </div>
            <div className="text-center mx-auto">
              <button type="submit" className="new__book__submit font-helvetica-bold" onClick={handleSubmit}>
                submit
              </button>
            </div>
          </form>

        </div>
        <div className="mx-auto mt-5 w-50 text-center">
          <button type="button" className="new__book__back font-helvetica-bold" onClick={history.goBack}>Back</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
NewBook.defaultProps = {
  saveName() {},
  saveAuthor() {},
  saveIsbn() {},
  saveNbPg() {},
  changeFilter() {},
  created() {},
  errMsg() {},
  book: {},
  filter: '',
  categories: {},

};
NewBook.propTypes = {
  saveName: PropTypes.func,
  saveAuthor: PropTypes.func,
  saveIsbn: PropTypes.func,
  saveNbPg: PropTypes.func,
  changeFilter: PropTypes.func,
  created: PropTypes.func,
  filter: PropTypes.string,
  errMsg: PropTypes.func,
  book: PropTypes.shape({
    name: PropTypes.string,
    author: PropTypes.string,
    isbn: PropTypes.string,
    pages: PropTypes.number,
    numberOfPages: PropTypes.number,
    created: PropTypes.bool.isRequired,
  }),
  categories: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};
const mapStateProps = (state) => ({
  book: state.saveNewBookReducer,
  categories: state.AllCategories,
  filter: state.bookFilterReducer,
});
const mapDispatchToProps = (dispatch) => ({
  saveName: (name) => dispatch(NewBookName(name)),
  saveAuthor: (author) => dispatch(NewBookAuthor(author)),
  saveIsbn: (isbn) => dispatch(NewBookIsbn(isbn)),
  saveNbPg: (pgs) => dispatch(NewBookPages(pgs)),
  changeFilter: (elt) => dispatch(FilterCategories(elt)),
  created: (status) => dispatch(bookCreated(status)),
  errMsg: (msg) => dispatch(ValidateEr(msg)),
});
export default connect(mapStateProps, mapDispatchToProps)(NewBook);
