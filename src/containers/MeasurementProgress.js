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
import '../assets/MeasurementProgress.css';

const MeasurementProgress = ({
  books,
  measurments,
  bookfetch,
  bookFetchComplete,
  measurementFetch,
  measurmentComplete,
}) => {
  // console.log(books, measurments);
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
        <div className="mt-3">
          { measurments.map((measurment) => {
            for (let i = 0; i < books.length; i += 1) {
              if (measurment.book_id === books[i].id) {
                return (
                  <div
                    key={measurment.created_at}
                    className="d-flex
                   justify-content-around my-1 grey__background__two"
                  >
                    <div>
                      <div className="dropdown">
                        <div>{measurment.pages_read}</div>
                        <div className="dropdown-content">
                          <a className="text-decoration-none" href="/books">
                            <span className="book__name">Latest Page Read: </span>
                            {measurment.pages_read}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      {measurment.created_at.slice(0, 10)}
                    </div>
                    <div>
                      <div className="dropdown">
                        <div>{books[i].isbn}</div>
                        <div className="dropdown-content">
                          <a className="text-decoration-none" href="/books">
                            <span className="book__name">Name of book: </span>
                            {books[i].name}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            }
            return false;
          })}
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
    id: PropTypes.number,
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
