import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  NewBookAuthor,
  NewBookIsbn,
  NewBookName,
  NewBookPages,
} from '../actions';

const NewBook = ({
  saveAuthor,
  saveIsbn,
  saveName,
  saveNbPg,
  book,
}) => {
  const handleChange = (e) => {
    switch (e.target.id) {
      case 'name':
        saveName(e.target.value);
        break;
      case 'author':
        saveAuthor(e.target.value);
        break;
      case 'isbn':
        console.log(e.target.value);
        console.log('working');
        saveIsbn(e.target.value);
        break;
      case 'pages':
        saveNbPg(e.target.value);
        break;
      default:
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('it works here ');
  };
  return (
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
  );
};
NewBook.defaultProps = {
  saveName() {},
  saveAuthor() {},
  saveIsbn() {},
  saveNbPg() {},
  book: {},
};
NewBook.propTypes = {
  saveName: PropTypes.func,
  saveAuthor: PropTypes.func,
  saveIsbn: PropTypes.func,
  saveNbPg: PropTypes.func,
  book: PropTypes.shape({
    name: PropTypes.string,
    author: PropTypes.string,
    isbn: PropTypes.string,
    numberOfPages: PropTypes.number,
  }),
};
const mapStateProps = (state) => ({
  book: state.saveNewBookReducer,
});
const mapDispatchToProps = (dispatch) => ({
  saveName: (name) => dispatch(NewBookName(name)),
  saveAuthor: (author) => dispatch(NewBookAuthor(author)),
  saveIsbn: (isbn) => dispatch(NewBookIsbn(isbn)),
  saveNbPg: (pgs) => dispatch(NewBookPages(pgs)),
});
export default connect(mapStateProps, mapDispatchToProps)(NewBook);
