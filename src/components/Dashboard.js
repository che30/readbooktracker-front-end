import React, { useEffect, useState } from 'react';
import queryAndCountCategories from '../apirequests/categoiresCount';
import CurrentUserMeasurement from '../apirequests/CurrentUserMeasurement';
import getAllBooks from '../apirequests/GetAllBooks';
import '../assets/Dashboard.css';
// import getBks from '../helpers/getBooks';

import Progress from './Progress';

const Dashboard = () => {
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  console.log(date);
  const [covered, setCovered] = useState(0);
  // const books = getBks();
  const currenUserBooksRead = [];
  const mapBooksToId = {};
  useEffect(async () => {
    const res = await queryAndCountCategories();
    const measurements = await CurrentUserMeasurement();
    measurements.forEach((element) => {
      mapBooksToId[element.book_id] = element.pages_read;
    });
    const ids = Object.keys(mapBooksToId);
    // attach the largets pages read to the book id
    ids.forEach((elementone) => {
      measurements.forEach((elementwo) => {
        if (parseInt(elementone, 10) === elementwo.book_id) {
          if (elementwo.pages_read > mapBooksToId[elementone]) {
            mapBooksToId[elementone] = elementwo.pages_read;
          }
        }
      });
    });
    getAllBooks().then((res) => {
      res.forEach((element, index) => {
        if (mapBooksToId[element.id] !== undefined) {
          res[index].read = mapBooksToId[element.id];
          currenUserBooksRead.push(element);
        }
      });
    });

    currenUserBooksRead.forEach((currentUserIsbn) => {
      measurements.forEach((measure) => {
        if (currentUserIsbn.id === measure.book_id
          && currentUserIsbn.read === measure.pages_read) {
          currenUserBooksRead.created_at = measure.created_at;
        }
      });
    });
    setCovered(Object.keys(res.data[0]).length);
  }, []);
  const stateone = {
    size: 100,
    progress: 10,
    strokeWidth: 10,
    circleOneStroke: '#d9edfe',
    circleTwoStroke: '#71eb34',

  };

  return (
    <div>
      <div className="d-flex w-100">
        <Progress
          size={stateone.size}
          progress={covered}
          strokeWidth={stateone.strokeWidth}
          circleOneStroke={stateone.circleOneStroke}
          circleTwoStroke={stateone.circleTwoStroke}
          unit=""
        />
        <Progress
          size={stateone.size}
          progress={stateone.progress}
          strokeWidth={stateone.strokeWidth}
          circleOneStroke={stateone.circleOneStroke}
          circleTwoStroke={stateone.circleTwoStroke}
          unit="%"
        />
      </div>
      <span className="total__categories_realtive">
        Total: categories
      </span>
      <span className="total__measurement_realtive">
        Total: Measurement
      </span>
    </div>
  );
};
export default Dashboard;
