import React from 'react'
import "../CSS/home.css"
import IMG from"../assets/IMAGES/ME.png"
import 'animate.css';

export default function Home() {
  return (
    <>
    <div className="container-fluid" id='home'>
<div className="container">
    <div className="row">
        <div className="col-md-6 col-sm-12 text">
            <span style={{color:"white"}}>Hello'</span>
       <h1>Muhammd Abdulah</h1>
           <h3 id='helo'></h3>
           <a href="#contactus">  <button className='btn w-50' style={{color:"white", backgroundColor:"#F77E17"}}>Hire Me</button> </a> 
        </div>
        <div className="col-md-6 col-sm-12 img ">
            <img className='img-responsive' src={IMG} alt="Its ME" />
        </div>
    </div>
</div>

    </div>
    </>
  )
}
