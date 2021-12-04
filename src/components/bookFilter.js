/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const BookFilter = ({ changeFilter }) => {
  const categories = JSON.parse(localStorage.getItem('categories'));
  console.log(categories);
  return (
    <div className="categories">
      <label>
        <select className="catFilter py-2 " onChange={(e) => { changeFilter(e.target.value); }}>
          {categories.map((cat) => (<option key={cat.id} value={cat.name}>{cat.name}</option>))}
        </select>
      </label>
    </div>

  );
};
BookFilter.defaultProps = {
  changeFilter() {},
};
BookFilter.propTypes = {
  changeFilter: PropTypes.func,
};
export default BookFilter;
