import React from 'react'
import '../Style/SidebarMenu.css'
import Logo from '../Images/Logo.png'
import SunnyRainIcon from '../Images/SunnyRainIcon.png'
import Explore from '../Images/Explore.png'
import Location from '../Images/Location.png'
import Settings from '../Images/Settings.png'

function SidebarMenu() {
  return (
    <div className='SidebarMenu'>
      <div className="Menu">
        <img src={Logo} alt="" id='Logo' />
        <nav>
          <ul>
            <li>
              <img className='Menu-Item Active' src={SunnyRainIcon} alt="" />
              <p>weather</p>
            </li>
            <li>
              <img className='Menu-Item' src={Explore} alt="" />
              <p>explore</p>
            </li>
            <li>
              <img className='Menu-Item' src={Location} alt="" />
              <p>cities</p>
            </li>
            <li>
              <img className='Menu-Item' src={Settings} alt="" />
              <p>settings</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default SidebarMenu