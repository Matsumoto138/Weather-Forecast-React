import React from 'react';
import '../Style/HourlyForecast.css'
import { Line } from 'react-chartjs-2';

import {CategoryScale, Chart, LinearScale, PointElement, LineElement} from 'chart.js'; 
Chart.register(CategoryScale, LinearScale, PointElement,LineElement);

function HourlyForecast({ forecast }) {
  if (!forecast) {
    return <>Loading...</>;
  }

  const data = {
    labels: Object.keys(forecast),
    datasets: [
      {
        label: "Temperature",
        data: Object.values(forecast).map(temp => parseInt(temp, 10)),
        borderColor: 'rgba(255,255,255,1)',
        backgroundColor: 'rgba(255,255,255,1)',
      },
    ],
  };

 const options= {
    responsive: true,
    scales: {
      y: {
        ticks: { color: 'white', beginAtZero: true }
      },
      x: {
        ticks: { color: 'white', beginAtZero: true }
      }
    }
  }


  return (
    <div className='HourlyForecast'>
      <Line data={data} options={options} className='HourlyCart' />
    </div>
  );
}

export default HourlyForecast;
