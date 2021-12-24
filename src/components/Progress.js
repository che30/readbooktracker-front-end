import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Progress = (props) => {
  const {
    size,
    progress,
    strokeWidth,
    circleOneStroke,
    circleTwoStroke,
    unit,
  } = props;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, [progress, circumference, offset]);
  return (
    <>
      <svg
        className="circular_progress_one"
        width={size}
        height={size}
      >
        <circle
          className="circular_bg_one"
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="circle_bg_two"
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text
          x={center}
          y={center}
          className="percentage"
        >
          {progress}

          {unit}

        </text>
      </svg>
    </>
  );
};
Progress.defaultProps = {
  size: 200,
  progress: '0',
  strokeWidth: '15',
  circleOneStroke: '#d9edfe',
  circleTwoStroke: '#7ea9e1',
  unit: '',

};
Progress.propTypes = {
  size: PropTypes.string,
  progress: PropTypes.string,
  strokeWidth: PropTypes.string,
  circleOneStroke: PropTypes.string,
  circleTwoStroke: PropTypes.string,
  unit: PropTypes.string,
};
export default Progress;
