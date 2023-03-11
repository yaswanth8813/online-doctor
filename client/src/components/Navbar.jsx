import React from 'react'
import '../App.css'
const Navbar = () => {
  return (
    <>
     <div className='navbar'>
        <div className="title">
            <span className="logo">OnLiNe DocToR</span>
        </div>
        <div className="items">
       <span className='inner_items'><a class="" href="/">HOME</a></span> 
        <span className='inner_items booking'><a class="" href="/home3">Book Now</a></span>
        </div>
     </div>
    </>
  )
}

export default Navbar
