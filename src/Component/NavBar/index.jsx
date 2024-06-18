import React from 'react'
import logo from '../Images/Subtract.png'
import nav1 from '../Images/Category.png'
import nav2 from '../Images/Chart.png'
import nav3 from '../Images/Ticket.png'
import nav4 from '../Images/Document.png'
import nav5 from '../Images/Calendar.png'
import nav6 from '../Images/Activity.png'
import nav7 from '../Images/Notification.png'
import nav8 from '../Images/Setting.png'
import Profile from '../Images/Profile photo.png'
import Logout from '../Images/Logout.png'
import Lamp from '../Images/lamp.png'
import './index.css'

const NavBar = () => {
  return (
    <div className='main-cont-Nav'>
     <div className='title'>
      <img className='img-title' src={logo} />
      <h3 className='title-head'>Base</h3>
     </div>


   <div className='nav-cont'>
    <div className='nav-cont-item'> <img className='nav-img' src={nav1} /> <span>Dashboard</span></div>
    <div className='nav-cont-item'> <img className='nav-img' src={nav2} /> <span>Analytics</span></div>
    <div className='nav-cont-item'> <img className='nav-img' src={nav3} /> <span>Invoice</span></div>
    <div className='nav-cont-item text-primary'> <img className='nav-img' src={nav4} /> <span >Schedule</span></div>
    <div className='nav-cont-item'> <img className='nav-img' src={nav5} /> <span>Calendar</span></div>
    <div className='nav-cont-item'> <img className='nav-img' src={nav6} /> <span>Messages</span></div>
    <div className='nav-cont-item'> <img className='nav-img' src={nav7} /> <span>Notification</span></div>
    <div className='nav-cont-item'> <img className='nav-img' src={nav8} /> <span>Setting</span></div>
   </div>

   <div className='Profile-div-imagelogo'>
    <img className='Profile-div-image-lamp' src={Lamp}  />

    <div className='Profile-button-Upgrade btn btn-primary'><span className='Profile-button-Upgrade-text'>Upgrade Now</span></div>
</div>


   <div className='profile-info'>
    <img src={Profile}/>
    <div className='profile-block'>
    <h6 className='Profile-name'>Easin Arafat</h6>
    <h6 className='Profile-name'>Free Account</h6>
    </div>




    <img className='profile-logout-img' src={Logout}  />
   </div>

    </div>
  )
}

export default NavBar
