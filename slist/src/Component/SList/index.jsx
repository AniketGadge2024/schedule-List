import React from 'react'
import Cal from '../Images/MCal.png'
import Profile1 from '../Images/Ellipse 96.png'
import Profile2 from '../Images/Ellipse 96 (1).png'
import Profile3 from '../Images/Ellipse 96 (2).png'
import Slistcontent from '../Slistcontent'
import './index.css'


const Slist = () => {
  return (
    <div className='main-cont-Slist'>
    <div className='section-main-slist'>

<h3>Schedule List</h3>
<button className='btn btn-primary'> + Add New</button>

    </div>

    <div className='row'>

    <div className='col-md-3 section-slist1 '>

<div className='btn btn-primary button-shudule'> <h5 className='button-shudule-title'>+ Create Schedule</h5></div>
<img className='cal' src={Cal} alt="" />

<div className='people-finder-slist1'>
  <h6>People</h6>

  <input className='form-control' type="search"  placeholder='Search for People'/>

    <div className='profileinfo-slist1'><div className='Profileimg-div1-sec1'> <img src={Profile1}  /> </div> <div className='profileinfo-name-title-sec1' ><span className='profileinfo-name-title-edit-sec1'>Eddie Lobanovskiy</span> <span className='profileinfo-name-title-edit2-sec1'>laboanovskiy@gmail.com</span> </div> </div>
    <hr />
    <div className='profileinfo-slist1'><div className='Profileimg-div2-sec1'> <img src={Profile2}  /> </div> <div className='profileinfo-name-title-sec1' ><span className='profileinfo-name-title-edit-sec1'>Alexey Stave</span> <span className='profileinfo-name-title-edit2-sec1'>alexeyst@gmail.com</span> </div> </div>
    <hr />
    <div className='profileinfo-slist1'><div className='Profileimg-div3-sec1'> <img src={Profile3}  /> </div> <div className='profileinfo-name-title-sec1' ><span className='profileinfo-name-title-edit-sec1'>Anton Tkacheve</span> <span className='profileinfo-name-title-edit2-sec1'>tkacheveanton@gmail.com</span> </div> </div>
    <hr />
  


    <button className='sec1-button-bottom btn btn-outline-primary'>My Schedule</button>

</div>


    </div>
    <div className='col-md-9 section-slist'>

<Slistcontent/>
    </div>

    </div>
    </div>
  )
}

export default Slist

