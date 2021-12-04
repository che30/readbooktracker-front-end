/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
const YearFilter = ({ changeFilter }) => {
  const categories = JSON.parse(localStorage.getItem('categories'));
  return (
    <div className="categories">
      <label>
        <select className="catFilter py-2 " onChange={(e) => { changeFilter(e.target.value); }}>
          {categories.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
        </select>
      </label>
    </div>

  );
};
YearFilter.defaultProps = {
  changeFilter() {},
};
YearFilter.propTypes = {
  changeFilter: PropTypes.func,
};
export default YearFilter;
