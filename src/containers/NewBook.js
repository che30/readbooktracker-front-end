import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import {
  bookCreated,
  FilterCategories,
  NewBookAuthor,
  NewBookIsbn,
  NewBookName,
  NewBookPages,
} from '../actions';
import BookFilter from '../components/bookFilter';
import getCategories from '../helpers/categories';
import createNewBook from '../apirequests/createBook';
import Footer from '../components/Footer';
import '../assets/Newbook.css';
import data from '../helpers/data';

const NewBook = ({
  saveAuthor,
  saveIsbn,
  saveName,
  saveNbPg,
  book,
  changeFilter,
  filter,
  created,
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
  const handleSubmit = (e) => {
    const categories = getCategories();
    categories.forEach((element) => {
      if (element.name === filter) {
        createNewBook(book, element.id).then(() => {
          created(true);
        });
      }
      return false;
    });
    e.preventDefault();
  };
  const token = data();
  const decoded = jwtDecode(token.auth_token);
  if (token === null || decoded.exp < Date.now() / 1000) {
    return (
      <>
        <Redirect to="/Login" />
      </>
    );
  }
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
        <Redirect to="/Book" />
      </div>
    );
  }
  return (
    <div>
      <nav className="bg_color_Pantone w-100  w-100 text-white text-center p-2">
        New Book
      </nav>
      <div>
        <BookFilter changeFilter={changeFilter} />
      </div>
      <div>
        <form>
          <div>
            <input
              type="text"
              id="name"
              placeholder="name"
              value={book.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              id="author"
              placeholder="author"
              value={book.author}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="text"
              id="isbn"
              placeholder="ISBN"
              value={book.isbn}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="text"
              id="pages"
              placeholder="number of pages"
              value={book.numberOfPages}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            submit
          </button>
        </form>

      </div>
      <button type="button" onClick={history.goBack}>Back</button>
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
  book: PropTypes.shape({
    name: PropTypes.string,
    author: PropTypes.string,
    isbn: PropTypes.string,
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
});
export default connect(mapStateProps, mapDispatchToProps)(NewBook);
