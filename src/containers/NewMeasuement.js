import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FilterMasurement, pagesRead } from '../actions';
import MeasurementFilter from '../components/measurementFilter';
import getBks from '../helpers/getBooks';
import newMeasurementApi from '../apirequests/CreateNewMeasurementApi';
import Footer from '../components/Footer';

const newMeasurement = ({
  savePagesRead, pgRead, changeFilter, filter,
}) => {
  const history = useHistory();
  const handleChange = (e) => {
    savePagesRead(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const books = getBks();
    books.forEach((element) => {
      if (element.name === filter) {
        newMeasurementApi(pgRead, element.id);
      }
      return false;
    });
  };
  return (
    <>
      <nav className="bg_color_Pantone w-100  w-100 text-white text-center p-2">
        New Measurement
      </nav>
      <MeasurementFilter changeFilter={changeFilter} />
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
      <button type="button" onClick={history.goBack}>Back</button>
      <Footer />
    </>
  );
};
newMeasurement.defaultProps = {
  savePagesRead() {},
  changeFilter() {},
  pgRead: '',
  filter: 'ALL',
};
newMeasurement.propTypes = {
  savePagesRead: PropTypes.func,
  changeFilter: PropTypes.func,
  pgRead: PropTypes.string,
  filter: PropTypes.string,
};
const mapStateProps = (state) => ({
  pgRead: state.measurementReducer.pagesRead,
  filter: state.MeasurementFilterReducer,
});
const mapDispatchToProps = (dispatch) => ({
  savePagesRead: (pg) => dispatch(pagesRead(pg)),
  changeFilter: (elt) => dispatch(FilterMasurement(elt)),
});
export default connect(mapStateProps, mapDispatchToProps)(newMeasurement);
