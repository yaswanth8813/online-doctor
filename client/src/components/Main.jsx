import React from 'react'
import '../App.css';
import { useNavigate, Link } from "react-router-dom";
const Main = () => {
  return (
    <>
    <div className="Main">
      <div className='container1'>
        <div className='container1_inner'>
          <div> <span className='content'>Book an appointment with an online doctor</span></div>   
        <div><Link to="/home3" ><button type="submit" className='book'>Book now</button></Link></div>
      </div>
        </div>
      <div className='container2'>
        <img src="https://www.usnews.com/object/image/0000017b-a731-d23a-a37f-bfb3648b0000/210902hckhntelehealth-editorial.jpg?update-time=1630598314667&size=responsive640" alt="" srcset="" />
      </div>
      </div>
    </>
  )
}

export default Main;
