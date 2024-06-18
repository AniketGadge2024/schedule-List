import React from 'react'
import NavBar from '../NavBar'
import Slist from '../SList'
import './index.css'
const MainPage = () => {
  return (
    <div className='main-cont row'>
     <div className='section col-md-2'><NavBar/></div> 
    
     <div className='section col-md-10'><Slist/></div>  
    </div>
  )
}

export default MainPage
