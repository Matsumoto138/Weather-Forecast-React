import React from 'react'
import '../Style/Activities.css'
import Activity1 from '../Images/Activities1.png'
import Activity2 from '../Images/Activities2.png'
import Activity3 from '../Images/Activities3.png'
import Activity4 from '../Images/Activities4.png'
import HeartIcon from '../Images/HeartIcon.svg'

function Activities() {
  return (
    <div className='Activities'>
      <div className="Title"><img src={HeartIcon} alt="" /> <div>&nbsp;</div> <p> Activities in your area</p></div>
      <div className="Activity-Images">
        <div className="Image-Box"><img src={Activity1} alt="" /></div>
        <div className="Image-Box"><img src={Activity2} alt="" /></div>
        <div className="Image-Box"><img src={Activity3} alt="" /></div>
        <div className="Image-Box"><img src={Activity4} alt="" /></div>
      </div>
    </div>
  )
}

export default Activities