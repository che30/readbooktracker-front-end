import React from 'react';
import PropTypes from 'prop-types';

const AlertMeasurement = ({ filter }) => {
  console.log(filter);
  if (filter === 'AL') {
    return (
      <>
        <div className="alert alert-danger">
          You must chose a book name
        </div>
      </>
    );
  }
  return false;
};
AlertMeasurement.propTypes = {
  filter: PropTypes.string.isRequired,
};
export default AlertMeasurement;
