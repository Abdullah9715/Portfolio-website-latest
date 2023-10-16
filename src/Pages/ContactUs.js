import React from "react";
import "../CSS/Contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { CiLocationOn,CiMail } from "react-icons/ci";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function ContactUs() {
    const sendEmail = (e) => {
        e.preventDefault();
        
        const { name, email, message } = e.target;
        
        // Check if any of the input fields are empty
        if (!name.value || !email.value || !message.value) {
            toast.error("Please fill in all fields.");
            return;
        }
        // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your EmailJS details
        emailjs
          .sendForm(
            "service_t5f2u9l",
            "template_r27guj5",
            e.target,
            "FXMT47vz5iIK6X5aj"
          )
          .then(
            (result) => {
                toast.success("Email sent successfully.");
              console.log("Email sent successfully:", result.text);
            },
            (error) => {
                toast.error("Error sending email:");

              console.error("Error sending email:", error.text);
            }
          );
          e.target.reset();
      };
  return (
    <>
      <div className="container-fluid" id="contactus">
        <div className="container">
        <h3 style={{ color: "White" }} className="text-center">
              Contact Us
            </h3>
            <div className="hr-container">
              <div className="circle"></div>
              <hr />
              <div className="circle"></div>
            </div>
            <div className="row">
          <div className="col-md-4 cont">
            <div className="home-icon">

<CiMail className="iconnn"/>
<a  href="mailto:muftimuhammadabdullah225@gmail.com?body=My custom mail body" targer="_blank">Contact on Mail</a>
            </div>
            <div className="call-icon">

<BsWhatsapp className="iconnn"/>
<a href="https://wa.me/+923119715121 " target="_blank">Whatsapp</a>
            </div>
            <div className="location-icons">

<CiLocationOn className="iconnn"/> 
<address>Chiniot Punjab,Pakistan</address>
            </div>
          </div>
          <div className="col-md-8 form">
          <form onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-md-6">
                        
            <input name="name" placeholder="Enter Name" />
                    </div>
                    <div className="col-md-6">

            <input name="email" placeholder="Enter Email"/>
                    </div>
                </div>
            <div className="row">
                <div className="col">
<textarea name="message" cols="30" rows="5" placeholder="Enter Message"></textarea>
<button type="submit" className="btn">Send Message</button>
                </div>
            </div>

            </form>
          </div>
        </div>
            </div>
      </div>
      <ToastContainer />
    </>
  );
}
