/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import getAllBooks from '../apirequests/GetAllBooks';

const MeasurementFilter = ({ changeFilter }) => {
  getAllBooks().then((data) => {
    data.unshift('ALL');
    console.log(data);
    if (data !== null) {
      return (
        <div>
          <label>
            <select onChange={(e) => { changeFilter(e.target.value); }}>
              {data.map((elt) => (
                <>
                  <option
                    key={elt.id}
                    value={elt.name}
                    id={elt.id}
                  >
                    {elt.name}
                  </option>
                </>
              ))}

            </select>
          </label>
        </div>
      );
    }
    return (
      <>
        <div>
          No books yet create a book
        </div>
      </>
    );
  });
  return false;
};
MeasurementFilter.defaultProps = {
  changeFilter() {},
};

MeasurementFilter.propTypes = {
  changeFilter: PropTypes.func,
};
export default MeasurementFilter;
