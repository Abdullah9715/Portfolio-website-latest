import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { BiLogoCss3 } from "react-icons/bi";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaBootstrap ,FaReact} from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";

import "../CSS/services.css";

export default function Services() {
   const cards=[
       {
           icon:<AiOutlineHtml5 size={50}/>,
           heading:"HTML5",
        des:"With a strong foundation in HTML, I craft the structure of web content, ensuring it's accessible and engaging for users across various platforms and devices."
    },
    ,{
        icon:<BiLogoCss3 size={50}/>,
        heading:"CSS3",
        des:"CSS is my palette, allowing me to bring life to websites. I style and design with precision, enhancing user experiences through intuitive interfaces and captivating visuals."
    },
        {
    icon:<CgCPlusPlus size={50}/>,
    heading:"C++",
    des:"With a firm grasp of C++, I develop robust and efficient applications. Its versatility and performance make it a cornerstone for creating high-quality software solutions." },
                 {       icon:<FaBootstrap size={50}/>,
                        heading:"Bootstrap",
                        des:"Utilizing Bootstrap, I swiftly create responsive, mobile-first websites. Its powerful framework enables me to deliver sleek designs and seamless functionality."    },
                             {       icon:<TbBrandJavascript size={50}/>,
                        heading:"JavaScript",
                        des:"JavaScript is the heartbeat of dynamic web applications. I leverage its potential to enhance interactivity, optimize performance, and provide users with a smooth browsing experience."  },{       icon:<FaReact size={50}/>,
                        heading:"React Js",
                        des:"In the realm of front-end development, React.js stands tall. I architect scalable and interactive user interfaces, ensuring seamless integration and exceptional performance." },
]
  return (
    <>
      <div className="container-fluid" id="services">
        <div className="container">
          <h3 style={{ color: "White" }} className="text-center">
            Services
          </h3>
          <div className="hr-container">
            <div className="circle"></div>
            <hr />
            <div className="circle"></div>
          </div>
          <div className="row  my-5">
            {cards.map((card, index) => (
              <div key={index} className="col-sm-12 col-md-4 my-3 animate__zoomInLeft">
                <div className="card">
                  <i className="icon">{card.icon}</i>
                  <div className="heading">
                    <h3>{card.heading}</h3>
                  </div>
                  <div className="des">
                    <p>{card.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
   




          {/* <div className="row my-5">
            <div className="col">
              <div className="card">
                <i className="icon">
                  <MdComputer size={50} />
                </i>
                <div className="heading">
                  <h3>Web Developer</h3>
                </div>
                <div className="des">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    a veritatis blanditiis dolorum recusandae! Dicta porro, quo
                    laudantium velit, architecto numquam omnis ab eos eius saepe
                    perspiciatis nostrum incidunt exceptu
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="col">
              <div className="card">
                <i className="icon">
                  <MdComputer size={50} />
                </i>
                <div className="heading">
                  <h3>Web Developer</h3>
                </div>
                <div className="des">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    a veritatis blanditiis dolorum recusandae! Dicta porro, quo
                    laudantium velit, architecto numquam omnis ab eos eius saepe
                    perspiciatis nostrum incidunt exceptu
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="col">
              <div className="card">
                <i className="icon">
                  <MdComputer size={50} />
                </i>
                <div className="heading">
                  <h3>Web Developer</h3>
                </div>
                <div className="des">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    a veritatis blanditiis dolorum recusandae! Dicta porro, quo
                    laudantium velit, architecto numquam omnis ab eos eius saepe
                    perspiciatis nostrum incidunt exceptu
                  </p>
                </div>
              </div>
            </div>
          </div>  
           <div className="row mb-5">
            <div className="col">
              <div className="card">
                <i className="icon">
                  <MdComputer size={50} />
                </i>
                <div className="heading">
                  <h3>Web Developer</h3>
                </div>
                <div className="des">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    a veritatis blanditiis dolorum recusandae! Dicta porro, quo
                    laudantium velit, architecto numquam omnis ab eos eius saepe
                    perspiciatis nostrum incidunt exceptu
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="col">
              <div className="card">
                <i className="icon">
                  <MdComputer size={50} />
                </i>
                <div className="heading">
                  <h3>Web Developer</h3>
                </div>
                <div className="des">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    a veritatis blanditiis dolorum recusandae! Dicta porro, quo
                    laudantium velit, architecto numquam omnis ab eos eius saepe
                    perspiciatis nostrum incidunt exceptu
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="col">
              <div className="card">
                <i className="icon">
                  <MdComputer size={50} />
                </i>
                <div className="heading">
                  <h3>Web Developer</h3>
                </div>
                <div className="des">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    a veritatis blanditiis dolorum recusandae! Dicta porro, quo
                    laudantium velit, architecto numquam omnis ab eos eius saepe
                    perspiciatis nostrum incidunt exceptu
                  </p>
                </div>
              </div>
            </div>
          </div> */}
         </>
  );
}
