import React from 'react'
import '../Style/AirConditions.css'
import ClockIcon from '../Images/ClockIcon.svg'
import Temp from '../Images/Temp.svg'
import Wind from '../Images/Wind.svg'
import RainChange from '../Images/RainChange.svg'
import UvIcon from '../Images/UV.svg'

function AirConditions({data}) {
  return (
    <div className='AirConditions'>
      <div className="Hour">
        <img src={ClockIcon} alt="" className='Icon'/>
        {data && data.date ? <p id='Hour'>{data.date.split(":")[1]+":"+data.date.split(":")[2]}</p> : <p></p>}
        <div className="Title"><p>AIR CONDITIONS</p></div>
      </div>
      
      <div className="Info-Box1">
        <div className="Temp">
          <img src={Temp} alt="" className='Icon' />
          <div className="Sm-Conditions-Title">
            <p>Real Feel</p>
            {data && data.airConditions ? <p>{data.airConditions.split("::")[0]}°</p> : <p></p>}
          </div>
        </div>
        <div className="Wind">
          <img src={Wind} alt="" className='Icon'/>
          <div className="Sm-Conditions-Title">
            <p>Wind</p>
            {data && data.airConditions ? <p>{data.airConditions.split("::")[2]} km/hr</p> : <p></p>}
          </div>
        </div>
        
      </div>
      <div className="Info-Box2">
        <div className="Rain-Change">
          <img src={RainChange} alt="" className='Icon'/>
          <div className="Sm-Conditions-Title">
            <p>Change of Rain</p>
            {data && data.airConditions ? <p>{data.airConditions.split("::")[1]}%</p> : <p></p>}
          </div>
        </div>
        <div className="UV">
          <img src={UvIcon} alt="" className='Icon' />
          <div className="Sm-Conditions-Title">
            <p>UV Index</p>
            {data && data.airConditions ? <p>{data.airConditions.split("::")[3]}</p> : <p></p>}
          </div>

        </div>
      </div>
    </div>
  )
}

export default AirConditions