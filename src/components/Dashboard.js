import React, { useEffect, useState } from 'react';
import CurrentUserMeasurement from '../apirequests/CurrentUserMeasurement';
import getAllBooks from '../apirequests/GetAllBooks';
import Progress from './Progress';
import '../assets/Dashboard.css';

const Dashboard = () => {
  const testvar = [];
  const todayMeasureMents = [];
  const yesterdayMeasurement = [];
  const dateOfToday = new Date().toISOString();
  const timeStamp = new Date().getTime();
  const yesterdayTimeStamp = timeStamp - 24 * 60 * 60 * 1000;
  const yesterdayDate = new Date(yesterdayTimeStamp).toISOString();
  console.log(yesterdayDate);
  const [books, setBooks] = useState();
  const [finished, setFinished] = useState(false);
  const [measurments, setMeasurements] = useState();
  const [measureStatus, setMeasuredStatus] = useState(false);
  useEffect(async () => {
    const data = await getAllBooks();
    const measurement = await CurrentUserMeasurement();
    if ((data !== undefined) && (Object.keys(data[0]).length === 9)) {
      setBooks(data);
    }
    if (measurement !== undefined) {
      setMeasurements(measurement);
    }
    if (data !== undefined) {
      setMeasuredStatus(true);
    }
    if (measurement !== undefined) {
      setFinished(true);
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
  // console.log(todayMeasureMents);
  if (finished) {
    return (
      <div>
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
                    {elt.bookIsbn}
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
              <div className="row bg-white mb-2">
                <div className="col-12">
                  <div>
                    {yesterdayFunc(yesterdayMeasurement)}
                  </div>
                </div>
              </div>
              {yesterdayMeasurement.map((elt) => (
                <div className="row align-items-center" key={elt.createdAt}>
                  <div className="col-4 col-md-3 col-lg-3 ">
                    {elt.bookIsbn}
                  </div>
                  <div className="col-3">
                    <Progress
                      size={55}
                      progress={Math.round((elt.pagesRead / elt.bookNumberOfPages) * 100)}
                      strokeWidth={10}
                      circleOneStroke="#A0A0A0"
                      circleTwoStroke="##9400D3"
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
            <div className="row bg-white">
              <div className="col-12">
                <div> last week</div>
              </div>
            </div>
            { testvar.map((val) => {
              if (val.createdAt.slice(0, 10) !== yesterdayDate.slice(0, 10)
            && val.createdAt.slice(0, 10) !== dateOfToday.slice(0, 10)) {
                return (
                  <div className="row align-items-center" key={val.id}>
                    <div className="col-4 col-md-3 col-lg-3 maximum__width">
                      { val.bookIsbn}
                      {/* { val.bookname} */}
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
export default Dashboard;
