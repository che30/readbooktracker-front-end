import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
  const [value, onChange] = useState(new Date());
  console.log(value);
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
export default Dashboard;
