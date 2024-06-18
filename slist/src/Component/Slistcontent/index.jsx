import React from 'react'
import downarrow from '../Images/Arrow - Down 2.png'
import Cal from '../Images/Calendar2.png'
import time from '../Images/Time Circle.png'
import location from '../Images/Location.png'
import edit from '../Images/Edit.png'
import del from '../Images/Delete.png'

import './index.css'

const SListDetails =[
    {
        date:"12 Dec, 2021",
        time:"10.15AM",
        todo:"Office Meeting",
        
    },
    {
        date:"10 Dec, 2021",
        time:"11.20AM",
        todo:"Home",
        
    },
    {
        date:"9 Dec, 2021",
        time:"11.45AM",
        todo:"Friends Zone",
        
    }, {
        date:"8 Dec, 2021",
        time:"12.15PM",
        todo:"Office Meeting",
        
    }, {
        date:"7 Dec, 2021",
        time:"01.20PM",
        todo:"Home",
        
    }, {
        date:"5 Dec, 2021",
        time:"10.15AM",
        todo:"Meeting Outside",
        
    }, {
        date:"4 Dec, 2021",
        time:"11.15AM",
        todo:"Office Meeting",
        
    }, {
        date:"4 Dec, 2021",
        time:"01.25PM",
        todo:"Home",
        
    }, {
        date:"2 Dec, 2021",
        time:"10.15AM",
        todo:"Friends",
        
    }, {
        date:"1 Dec, 2021",
        time:"04.30PM",
        todo:"Meeting Outside",
        
    }
]


const Slistcontent = () => {
  return (
    <div >
       
      <div className='Slist-filter-section'>
     <div className='Slist-filter-section-1'>
     <input className='Slist-content-checkbox' type="checkbox" />
     <span>Date <img src={downarrow} /></span>

     </div>
       
        <span>Time <img src={downarrow} /> </span>
        <span>Location <img src={downarrow} /> </span>
      </div>

<div>
    {SListDetails.map(each=><div className='Slist-content'>
<input className='Slist-content-checkbox' type="checkbox" />

<div className='Slist-content-item-div'><img className='me-2' src={Cal} /><span>{each.date}</span></div>

<div className='Slist-content-item-div'><img className='me-2' src={time} /><span>{each.time}</span></div>

<div className='Slist-content-location-block'><img className='me-2' src={location} /><span>{each.todo}</span></div>

<div className='d-flex flex-row Slist-edit'> <div className='Slist-edit-del Slist-yellow'><img src={edit}/></div> <div className='Slist-edit-del'><img src={del}/></div> </div>
         
</div>

    )}
</div>


    </div>
  )
}

export default Slistcontent
