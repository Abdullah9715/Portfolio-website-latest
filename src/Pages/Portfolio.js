import React, { useRef } from 'react';
import '../CSS/portfolio.css';
import {AiFillGithub} from "react-icons/ai"
import IMG1 from "../assets/IMAGES/browser.PNG"
import IMG2 from "../assets/IMAGES/table.PNG"
import IMG3 from "../assets/IMAGES/stickwall.PNG"
import IMG4 from "../assets/IMAGES/calculater.PNG"
import IMG5 from "../assets/IMAGES/javaTODO.png"
import IMG6 from "../assets/IMAGES/portfolio-2.png"
const data=[
    {id:1,
      image:IMG1,
  title:'Basic of JavaScript',
      github:'https://github.com/Abdullah9715',
      demo:'https://alerts.surge.sh'
    
    },{id:2,
      image:IMG2,
  title:'Table With Dark and Light mode',
      github:'https://github.com/Abdullah9715',
      demo:'https://TableSaylani.surge.sh'
    
    },{id:3,
      image:IMG3,
  title:'Stickwakk',
      github:'https://github.com/Abdullah9715',
      demo:'https://stickwall-47685.web.app'
    
    },{id:4,
      image:IMG4,
  title:'Calculater',
      github:'https://github.com/Abdullah9715',
      demo:'https://calllculater.surge.sh'
    
    },{id:5,
      image:IMG5,
  title:'JavaScript TODO',
      github:'https://github.com/Abdullah9715',
      demo:'https://TodoinJAVASCRIPT.surge.sh'
    
    },{id:6,
      image:IMG6,
  title:'Portfolio',
      github:'https://github.com/Abdullah9715',
      demo:'https://porfolio-ae720.web.app'
    
    }
  ]
  
export default function Portfolio() {

  return (
    <div className="container-fluid" id='portfolio'>
      <div className="container">
        <h3 style={{ color: 'white' }} className="text-center">
          Portfolio
        </h3>
        <div className="hr-container">
          <div className="circle"></div>
          <hr />
          <div className="circle"></div>
        </div>
        <div className="row">
        {data.map(({id,image, title,github,demo})=>{
    return(
      <div key={id} className='portfolio-item col-md-6 col-sm-12'>
      <div className="portfolio_item-image">
      <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <a href={github} className='btn'><AiFillGithub />GitHub</a>
      <a href={demo} className='btn' target='_blank'>Live Demo</a>
        </div>
    )
  })}
        </div>
      </div>
    </div>
  );
}
