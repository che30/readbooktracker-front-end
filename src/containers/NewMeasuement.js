import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pagesRead } from '../actions';

const newMeasurement = ({ savePagesRead, pgRead }) => {
  const handleChange = (e) => {
    savePagesRead(e.target.value);
  };
  console.log(pgRead);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form>
        <input
          type="text"
          value={pgRead}
          onChange={handleChange}
          placeholder="pages read"
          id="pages-read"
        />
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </>
  );
};
newMeasurement.defaultProps = {
  savePagesRead() {},
  pgRead: '',
};
newMeasurement.propTypes = {
  savePagesRead: PropTypes.func,
  pgRead: PropTypes.string,
};
const mapStateProps = (state) => ({
  pgRead: state.measurementReducer.pagesRead,
});
const mapDispatchToProps = (dispatch) => ({
  savePagesRead: (pg) => dispatch(pagesRead(pg)),
});
export default connect(mapStateProps, mapDispatchToProps)(newMeasurement);
