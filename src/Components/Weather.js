import React from 'react'
import '../Style/Weather.css'
import LocationIcon from '../Images/LocationIcon.svg'
import ThunderIcon from '../Images/ThunderIcon.svg'

function Weather({data}) {
  return (
    <div className='Weather'>
      <div className="Information">
        <div id="City">
          <img src={LocationIcon} alt="" style={{width: "20px"}}/>
          <p>{data.city}</p>
        </div>
        <div id="Air-Info">
          <h4>{data.type}</h4>
        </div>
        <div id="Degree">
          <h1>{data.degree} °C</h1>
        </div>
      </div>
      <div className="WeatherIcon">
        <img src={ThunderIcon} alt="" />
      </div>
      <div className="Date">
      {data && data.date ? <h4>{data.date.split(":")[0]}</h4> : <h4></h4>}
      </div>
    </div>
  )
}

export default Weather