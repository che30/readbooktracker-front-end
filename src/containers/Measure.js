import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { dateEntered, pagesRead } from '../actions';
import newMeasurementApi from '../apirequests/CreateNewMeasurementApi';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Measure = (props) => {
  const {
    location, savePagesRead, pgRead, date, dateEnt,
  } = props;
  const [status, setStatus] = useState(false);
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
    newMeasurementApi(pgRead, location.state.id,
      date).then((data) => {
      console.log(Object.keys(data).length);
      if (Object.keys(data).length === 8) {
        setStatus(true);
      }
      console.log(data);
    });
  };
  if (status === true) {
    return (
      <>
        <Redirect to="/books" />
      </>
    );
  }
  return (
    <div>
      <Navbar />
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
    </div>
  );
};
Measure.defaultProps = {
  location: {},
  savePagesRead() {},
  dateEnt() {},
  pgRead: '',
  date: '',
};
Measure.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.string.isRequired,
      authord: PropTypes.string.isRequired,
      isbn: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }),
  savePagesRead: PropTypes.func,
  dateEnt: PropTypes.func,
  pgRead: PropTypes.string,
  date: PropTypes.string,
};
const mapStateProps = (state) => ({
  pgRead: state.measurementReducer.pagesRead,
  date: state.measurementReducer.date,
});
const mapDispatchToProps = (dispatch) => ({
  savePagesRead: (pg) => dispatch(pagesRead(pg)),
  dateEnt: (date) => dispatch(dateEntered(date)),
});
export default connect(mapStateProps, mapDispatchToProps)(Measure);
