/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getAllCategories from '../apirequests/GetAllCategories';
import '../assets/bookfilter.css';

const BookFilter = ({ changeFilter }) => {
  const [categories, setCategories] = useState();
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    getAllCategories().then((cats) => {
      if (cats !== undefined) {
        setCategories(cats.data);
        setLoading(false);
      }
    });
  }, []);
  if (!Loading) {
    return (
      <div className="categories">
        <div className="text-center">
          {Loading ? <div> Fetching categories </div> : <div />}
        </div>
        <div>
          <label>
            <select className="catFilter   py-2 " onChange={(e) => { changeFilter(e.target.value); }}>
              {categories.map((cat) => (
                <option
                  key={cat.id}
                  value={cat.name}
                  id={cat.id}
                  className="catFilter__dropdown p-5"
                >
                  {cat.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

    );
  }
  return (
    <>
      <div>Fetching data</div>
    </>
  );
};
BookFilter.defaultProps = {
  changeFilter() {},
};
BookFilter.propTypes = {
  changeFilter: PropTypes.func,
};
export default BookFilter;
