import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CurrentUserMeasurement from '../apirequests/CurrentUserMeasurement';
import getAllBooks from '../apirequests/GetAllBooks';
import Progress from '../components/Progress';
import '../assets/Dashboard.css';
import {
  setBooksFromApi, setFinishedStaus, setMeasurementApi, setMeasurementStatus,
} from '../actions';

const Dashboard = ({
  books,
  finished,
  measurments,
  measureStatus,
  bookfetch,
  bookFetchComplete,
  measurementFetch,
  measurmentComplete,
}) => {
  const testvar = [];
  const todayMeasureMents = [];
  const yesterdayMeasurement = [];
  const dateOfToday = new Date().toISOString();
  const timeStamp = new Date().getTime();
  const yesterdayTimeStamp = timeStamp - 24 * 60 * 60 * 1000;
  const yesterdayDate = new Date(yesterdayTimeStamp).toISOString();
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
  const ids = {};
  if (measureStatus) {
    for (let i = 0; i <= books.length; i += 1) {
      measurments.forEach((measurement) => {
        if (measurement.book_id === i) {
          ids[i] = measurement.pages_read;
        }
      });
    }
    Object.keys(ids).forEach((val) => {
      measurments.forEach((measurement) => {
        if ((measurement.pages_read > ids[val])
        && parseInt(val, 10) === measurement.book_id) {
          ids[val] = measurement.pages_read;
        }
      });
    });
    Object.keys(ids).forEach((val, index) => {
      measurments.forEach((measure) => {
        if ((parseInt(val, 10) === measure.book_id) && (ids[val] === measure.pages_read)) {
          testvar.push({
            pagesRead: measure.pages_read,
            bookdId: measure.book_id,
            createdAt: measure.created_at,
            bookname: books[index].name,
            bookNumberOfPages: books[index].number_of_pages,
            bookIsbn: books[index].isbn,
          });
        }
      });
    });
  }
  testvar.forEach((info) => {
    if (info.createdAt.slice(0, 10) === dateOfToday.slice(0, 10)) {
      todayMeasureMents.push(info);
    }
    if (info.createdAt.slice(0, 10) === yesterdayDate.slice(0, 10)) {
      yesterdayMeasurement.push(info);
    }
  });
  const todayFunc = (params) => {
    if (params.length > 0) {
      return ' Today';
    }
    return '';
  };
  const yesterdayFunc = (params) => {
    if (params.length > 0) {
      return 'Yesterday';
    }
    return '';
  };
  if (finished) {
    return (
      <div>
        <div className="welcome__text text-center mx-auto py-2">
          Welcome, Track your readings. Don
          <span>&apos;</span>
          t Know? hover over me
        </div>
        <div className="grey__background">
          <div className="">
            <div className="container">
              <div className="row bg-white margin__top">
                <div className="col-12">
                  <div>
                    {todayFunc(todayMeasureMents)}
                  </div>
                </div>
              </div>
              {todayMeasureMents.map((elt) => (
                <div className="row align-items-center" key={elt.createdAt}>
                  <div className="col-4 col-md-3 col-lg-3">
                    <div className="dropdown">
                      <div>{elt.bookIsbn}</div>
                      <div className="dropdown-content">
                        <a className="text-decoration-none" href="/books">
                          <span className="book__name">Name of book: </span>
                          {elt.name}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <Progress
                      size={55}
                      progress={Math.round((elt.pagesRead / elt.bookNumberOfPages) * 100)}
                      strokeWidth={10}
                      circleOneStroke="#A0A0A0"
                      circleTwoStroke="#9400D3"
                      unit="%"
                    />
                  </div>
                  <div className="col-3">
                    {elt.createdAt.slice(0, 10)}
                  </div>
                  <div className="col-2">
                    {elt.bookNumberOfPages}
                  </div>

                </div>
              ))}
            </div>
          </div>

          <div>

            <div className="container">
              <div className="row bg-white mb-2 border__bottom__last__week">
                <div className="col-12">
                  <div>
                    {yesterdayFunc(yesterdayMeasurement)}
                  </div>
                </div>
              </div>
              {yesterdayMeasurement.map((elt) => (
                <div className="row align-items-center pt-1 pb-4 " key={elt.createdAt}>
                  <div className="col-4 col-md-3 col-lg-3 ">
                    <div className="dropdown">
                      <div>{elt.bookIsbn}</div>
                      <div className="dropdown-content">
                        <a className="text-decoration-none" href="/books">
                          <span className="book__name">Name of book: </span>
                          {elt.name}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <Progress
                      size={55}
                      progress={Math.round((elt.pagesRead / elt.bookNumberOfPages) * 100)}
                      strokeWidth={10}
                      circleOneStroke="#A0A0A0"
                      circleTwoStroke="#9400D3"
                      unit="%"
                    />
                  </div>
                  <div className="col-3">
                    {elt.createdAt.slice(0, 10)}
                  </div>
                  <div className="col-2">
                    {elt.bookNumberOfPages}
                  </div>

                </div>
              ))}
            </div>
          </div>
          <div className="container">
            <div className="row bg-white border__bottom__last__week">
              <div className="col-12">
                <div> last week</div>
              </div>
            </div>
            { testvar.map((val) => {
              if (val.createdAt.slice(0, 10) !== yesterdayDate.slice(0, 10)
            && val.createdAt.slice(0, 10) !== dateOfToday.slice(0, 10)) {
                return (
                  <div className="row align-items-center border__bottom__last__week pb-3 pt-2" key={val.id}>
                    <div className="col-4 col-md-3 col-lg-3 maximum__width">
                      <div className="dropdown">
                        <div>{ val.bookIsbn}</div>
                        <div className="dropdown-content">
                          <a className="text-decoration-none" href="/books">
                            <span className="book__name">Name of book: </span>
                            { val.bookname }
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div>
                        <Progress
                          size={55}
                          progress={Math.round((val.pagesRead / val.bookNumberOfPages) * 100)}
                          strokeWidth={10}
                          circleOneStroke="#A0A0A0"
                          circleTwoStroke="#9400D3"
                          unit="%"
                        />
                      </div>
                    </div>
                    <div className="col-3">
                      {val.createdAt.slice(0, 10)}
                    </div>
                    <div className="col-2">
                      {val.bookNumberOfPages}
                    </div>

                  </div>
                );
              }
              return false;
            })}
          </div>

        </div>
      </div>
    );
  }
  return (
    <>
      <div className="text-center" />
    </>
  );
};
Dashboard.defaultProps = {
  bookFetchComplete() {},
  bookfetch() {},
  measurementFetch() {},
  measurmentComplete() {},
  books: [],
  measurments: [],
};
Dashboard.propTypes = {
  bookFetchComplete: PropTypes.func,
  bookfetch: PropTypes.func,
  measurementFetch: PropTypes.func,
  measurmentComplete: PropTypes.func,
  finished: PropTypes.bool.isRequired,
  measureStatus: PropTypes.bool.isRequired,
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
  finished: state.DashboardReducer.finished,
  measurments: state.DashboardReducer.measurements,
  measureStatus: state.DashboardReducer.measurmentStatus,
});
const mapDispatchToProps = (dispatch) => ({
  bookfetch: (result) => dispatch(setBooksFromApi(result)),
  bookFetchComplete: (res) => dispatch(setMeasurementStatus(res)),
  measurementFetch: (res) => dispatch(setMeasurementApi(res)),
  measurmentComplete: (res) => dispatch(setFinishedStaus(res)),
});
export default connect(mapStateProps, mapDispatchToProps)(Dashboard);
