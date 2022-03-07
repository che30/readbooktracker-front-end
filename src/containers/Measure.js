import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { dateEntered, pagesRead, ValidateEr } from '../actions';
import newMeasurementApi from '../apirequests/CreateNewMeasurementApi';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../assets/measure.css';
import ErrMsg from './ErrMsg';

const Measure = (props) => {
  const {
    location, savePagesRead, pgRead, date, dateEnt, errMsg,
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
      if (Object.keys(data).length === 7) {
        setStatus(true);
      } else {
        errMsg([data.message]);
      }
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
    <div className="main__new__book__container">
      <div>
        <Navbar Navcontent="Measure" />
      </div>
      <div>
        <ErrMsg />
      </div>
      <div className="new__measure__padding__top">
        <form className="measure__form mx-auto mt-3 font-helvetica-light">
          <div>
            <input
              type="number"
              value={pgRead}
              onChange={handleChange}
              placeholder="pages read"
              id="pages-read"
              className="text-center font-helvetica-light"
            />
          </div>
          <div>
            <input
              type="date"
              value={date}
              onChange={handleChange}
              placeholder="pages read"
              id="date"
              className="text-center font-helvetica-light"
            />
          </div>
          <div className="mx-auto text-center">
            <button type="submit" className="new__book__submit font-helvetica-bold" onClick={handleSubmit}>
              submit
            </button>
          </div>
        </form>
      </div>
      <div className="mx-auto mt-5 w-50 text-center">
        <button type="button" className="new__book__back font-helvetica-bold" onClick={history.goBack}>Back</button>
      </div>
      <Footer />
    </div>
  );
};
Measure.defaultProps = {
  location: {},
  savePagesRead() {},
  dateEnt() {},
  errMsg() {},
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
  errMsg: PropTypes.func,
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
  errMsg: (msg) => dispatch(ValidateEr(msg)),
});
export default connect(mapStateProps, mapDispatchToProps)(Measure);
