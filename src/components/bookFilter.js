/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import getCategories from '../helpers/categories';

const BookFilter = ({ changeFilter }) => {
  const categories = getCategories();
  return (
    <div className="categories">
      <label>
        <select className="catFilter py-2 " onChange={(e) => { changeFilter(e.target.value); }}>
          {categories.map((cat) => (
            <option
              key={cat.id}
              value={cat.name}
              id={cat.id}
            >
              {cat.name}
            </option>
          ))}
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
