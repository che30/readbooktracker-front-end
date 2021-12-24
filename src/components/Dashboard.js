import React, { useEffect, useState } from 'react';
import queryAndCountCategories from '../apirequests/categoiresCount';
import '../assets/Dashboard.css';

import Progress from './Progress';

const Dashboard = () => {
  const [covered, setCovered] = useState(0);
  useEffect(async () => {
    const res = await queryAndCountCategories();
    setCovered(Object.keys(res.data[0]).length);
  }, []);
  const stateone = {
    size: 100,
    progress: 10,
    strokeWidth: 10,
    circleOneStroke: '#d9edfe',
    circleTwoStroke: '#7ea9e1',

  };

  return (
    <div>
      <div className="d-flex">
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
    </div>
  );
};
export default Dashboard;
