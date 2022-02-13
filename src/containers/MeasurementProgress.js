import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  setBooksFromApi, setFinishedStaus, setMeasurementApi, setMeasurementStatus,
} from '../actions';
import getAllBooks from '../apirequests/GetAllBooks';
import CurrentUserMeasurement from '../apirequests/CurrentUserMeasurement';

const MeasurementProgress = ({
  books,
  measurments,
  bookfetch,
  bookFetchComplete,
  measurementFetch,
  measurmentComplete,
}) => {
  console.log(books, measurments);
  useEffect(async () => {
    const data = await getAllBooks();
    const measurement = await CurrentUserMeasurement();
    if ((data !== undefined)
     && data.length !== 0
    && (Object.keys(data[0]).length === 9)) {
      bookfetch(data);
    }
    if (measurement !== undefined) {
      measurementFetch(measurement);
    }
    if (data !== undefined) {
      measurmentComplete(true);
    }
    if (measurement !== undefined) {
      bookFetchComplete(true);
    }
  }, []);
  if (measurments) {
    return (
      <>
        <Navbar Navcontent="PROGRESS" />
        <div className="text-center">
          Test site
        </div>
        <div>
          { measurments.map((measurment) => (
            <div key={measurment.created_at} className="d-flex justify-content-around">
              <div>
                {measurment.pages_read}
              </div>
              <div>
                {measurment.created_at.slice(0, 10)}
              </div>
            </div>
          )) }
        </div>
        <Footer />
      </>
    );
  }
  return (
    <div className="text-center">
      Loading ...
    </div>
  );
};
MeasurementProgress.defaultProps = {
  books: [],
  measurments: [],
  bookfetch() {},
  bookFetchComplete() {},
  measurementFetch() {},
  measurmentComplete() {},
};
MeasurementProgress.propTypes = {
  bookfetch: PropTypes.func,
  bookFetchComplete: PropTypes.func,
  measurementFetch: PropTypes.func,
  measurmentComplete: PropTypes.func,
  books: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    number_of_pages: PropTypes.number.isRequired,
    isbn: PropTypes.string,
  })),
  measurments: PropTypes.arrayOf(PropTypes.shape({
    pages_read: PropTypes.number,
    book_id: PropTypes.number,
    created_at: PropTypes.string,
  })),
};
const mapStateProps = (state) => ({
  books: state.DashboardReducer.books,
  measurments: state.DashboardReducer.measurements,
});
const mapDispatchToProps = (dispatch) => ({
  bookfetch: (result) => dispatch(setBooksFromApi(result)),
  bookFetchComplete: (res) => dispatch(setMeasurementStatus(res)),
  measurementFetch: (res) => dispatch(setMeasurementApi(res)),
  measurmentComplete: (res) => dispatch(setFinishedStaus(res)),
});
export default connect(mapStateProps, mapDispatchToProps)(MeasurementProgress);
