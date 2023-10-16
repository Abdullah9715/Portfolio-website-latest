import React, { useState } from "react";
import "../CSS/About.css";
import IMG1 from "../assets/IMAGES/ME.png";
import { Button } from "antd";
import CV from "../assets/Documents/CV.pdf";

export default function About() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true); // Set loading to true when the button is clicked

    // Simulate an asynchronous action (e.g., downloading CV)
    setTimeout(() => {
      // After the action is complete, reset loading to false
      setLoading(false);
    }, 2000); // Replace with the actual duration of your action
  };
  return (
    <>
      <div className="container-fluid" id="about">
        <div className="container">
            <h3 style={{ color: "White" }} className="text-center">
              About ME
            </h3>
            <div className="hr-container">
              <div className="circle"></div>
              <hr />
              <div className="circle"></div>
            </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 col-sm-offset-2 image-side animate__fadeInTopLeft">
              <img className="about-img" src={IMG1} alt="" />
            </div>
            <div className="col-md-6 col-sm-12 col-sm-offset-2 about-text animate__fadeInTopRight">
              <h4>
                I am Muhammad Abdullah React Js Developer From Punjab,Pakistan
              </h4>
              <p>
              "As a skilled React.js developer, I specialize in crafting dynamic and efficient user interfaces for web applications. React.js is the heart of modern web development, and I harness its power to build interactive, responsive, and visually stunning websites. With a strong grasp of React.js, I seamlessly integrate components, manage state, and ensure optimal performance, resulting in delightful user experiences. By utilizing this cutting-edge technology, I bring your digital vision to life, delivering solutions that stand out and engage your audience."
              </p>
              <strong>  <p>  Name : Muhammad Abdullah</p> </strong> 
              <strong>  <p>  Nationality : Pakistan</p> </strong> 
              <strong>  <p>  Phone : +923119715121</p> </strong> 
              <strong > <p>  Email : thegreatabdullah4@gmail.com</p> </strong> 
              <a href={CV}>
                <Button
                  className="down"
                  loading={loading}
                  onClick={handleClick}
                >
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
