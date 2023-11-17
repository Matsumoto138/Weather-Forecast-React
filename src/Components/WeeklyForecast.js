import React, { useState, useEffect } from 'react';
import '../Style/WeeklyForecast.css';
import ThunderIcon from '../Images/ThunderIcon.svg';
import SunnyIcon from '../Images/SunnyIcon.svg';
import SunnyCloud from '../Images/SunnyCloud.svg';
import SunnyRainIcon from '../Images/SunnyRainIcon.png';
import RainyIcon from '../Images/RainyIcon.svg';

const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

export default function WeeklyForecast({ data }) {
  const [selectedWeekIndex, setSelectedWeekIndex] = useState(1);
  const [animationKey, setAnimationKey] = useState(0);

  if (!data) {
    return <>Loading...</>;
  }

  const prevClick = () => {
    setSelectedWeekIndex((i) => Math.max(i - 1, 0));
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const nextClick = () => {
    setSelectedWeekIndex((i) => Math.min(i + 1, 2));
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const selectIcon = (type) => {
    switch (type) {
      case "sunny":
        return SunnyIcon;
      case "rainy":
        return RainyIcon;
      case "sunny rainy":
        return SunnyRainIcon;
      case "thunder":
        return ThunderIcon;
      case "sunny cloudy":
        return SunnyCloud;
      default:
        return null;
    }
  };

  const selectedWeekKey = ["previous", "current", "next"][selectedWeekIndex];
  const selectedWeekData = data[selectedWeekKey];

  return (
    <div className="WeeklyForecast">
      <div className="Prev-Btn">
        <button onClick={prevClick}>&lt;</button>
      </div>
      <div className="Forecast-List" key={animationKey}>
        {days.map((day, index) => (
          <div className='List' key={day} style={{ animationDelay: `${index * 100}ms` }}>
            <p className='Day'>{day}</p>
            {selectIcon(selectedWeekData[day].type) && (
              <img src={selectIcon(selectedWeekData[day].type)} alt="" />
            )}
            <p>{selectedWeekData[day].degree}°</p>
          </div>
        ))}
      </div>
      <div className="Next-Btn">
        <button onClick={nextClick}>&gt;</button>
      </div>
    </div>
  );
}
