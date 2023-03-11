import React from 'react'
import Navbar from '../components/Navbar';
const Home3 = () => {
  return (
    <div>
    <Navbar></Navbar>
    <div className='outer_container'>
    <div className="inner_container">
       <span className="logo_login">Book Oppointment</span>
       <span className="title2">Fill Form for your available Time</span>
         <form  method="POST" action="http://localhost:8000/user_inf" >
          <input type="text" name="username" id="" placeholder='Patient Name'/>
          <input type="number" name="age" id="" placeholder='patient Age'/>
          <input type="email" name="email" id="" placeholder='email id' />
          <input type="text" name="description" id=""placeholder='please describe your problem'/>
          <input type="date" name="Date" id="" />
           <button redirect>submit</button>
         </form>
    </div>
  </div>
    </div>
  )
}

export default Home3
