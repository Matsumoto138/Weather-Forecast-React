import { useEffect, useState } from 'react';
import './App.css';
import Activities from './Components/Activities'
import AirConditions from './Components/AirConditions'
import HourlyForecast from './Components/HourlyForecast'
import SidebarMenu from './Components/SidebarMenu'
import Weather from './Components/Weather'
import WeeklyForecast from './Components/WeeklyForecast'

function App() {

  const [data, setData] = useState({})

  
    const fetchData = async () => {
      try {
        const response = await fetch('/data/ReactProjectData.json', {
          method: "GET",
        });

        const json = await response.json();  
        setData(json);

      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
    fetchData()
    
  }, []);

  
  return (
    <div className="App">
      
      <div className="Top-Section">
        <Weather data={data} />
        <HourlyForecast />
      </div>
      <div className="Bottom-Section">
        <SidebarMenu />
        <div className="Bottom-Mid-Section">
          <Activities />
          <WeeklyForecast data={data.weeklyWeather} />
        </div>
        <AirConditions data={data} />
      </div>
    </div>
  );
}

export default App;
