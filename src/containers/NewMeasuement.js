import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { dateEntered, FilterMasurement, pagesRead } from '../actions';
import MeasurementFilter from '../components/measurementFilter';
import getBks from '../helpers/getBooks';
import newMeasurementApi from '../apirequests/CreateNewMeasurementApi';
import Footer from '../components/Footer';
import AlertMeasurement from '../components/AlertMeasurement';
import data from '../helpers/data';

const newMeasurement = ({
  savePagesRead, pgRead, changeFilter, filter, date, dateEnt,
}) => {
  const history = useHistory();
  const handleChange = (e) => {
    if (e.target.id === 'pages-read') {
      savePagesRead(e.target.value);
    }
    if (e.target.id === 'date') {
      dateEnt(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const books = getBks();
    console.log(filter);
    books.forEach((element) => {
      if (element.name === filter) {
        newMeasurementApi(pgRead, element.id, date);
      }
      return false;
    });
  };
  const token = data();
  const decoded = jwtDecode(token.auth_token);
  if (token === null || decoded.exp < Date.now() / 1000) {
    return (
      <>
        <Redirect to="/Login" />
      </>
    );
  }
  return (
    <>
      <nav className="bg_color_Pantone w-100  w-100 text-white text-center p-2">
        New Measurement
      </nav>
      <AlertMeasurement filter={filter} />
      <MeasurementFilter changeFilter={changeFilter} />
      <form>
        <input
          type="text"
          value={pgRead}
          onChange={handleChange}
          placeholder="pages read"
          id="pages-read"
        />
        <input
          type="date"
          value={date}
          onChange={handleChange}
          placeholder="pages read"
          id="date"
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
  dateEnt() {},
  pgRead: '',
  filter: 'ALL',
  date: '',
};
newMeasurement.propTypes = {
  savePagesRead: PropTypes.func,
  changeFilter: PropTypes.func,
  dateEnt: PropTypes.func,
  pgRead: PropTypes.string,
  filter: PropTypes.string,
};
const mapStateProps = (state) => ({
  pgRead: state.measurementReducer.pagesRead,
  filter: state.MeasurementFilterReducer,
  date: state.measurementReducer.date,
});
const mapDispatchToProps = (dispatch) => ({
  savePagesRead: (pg) => dispatch(pagesRead(pg)),
  changeFilter: (elt) => dispatch(FilterMasurement(elt)),
  dateEnt: (date) => dispatch(dateEntered(date)),
});
export default connect(mapStateProps, mapDispatchToProps)(newMeasurement);
