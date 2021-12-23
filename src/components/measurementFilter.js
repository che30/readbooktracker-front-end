/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const MeasurementFilter = ({ changeFilter }) => {
  const data = JSON.parse(localStorage.getItem('books'));
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
};
MeasurementFilter.defaultProps = {
  changeFilter() {},
};

MeasurementFilter.propTypes = {
  changeFilter: PropTypes.func,
};
export default MeasurementFilter;
