import React from "react";
import "../../CSS/footer.css";
import { BsFacebook } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

export default function CopyRight() {
  let year = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <div className="container ">
          <span className="text1">
            Created By M.Abdullah &copy; CopyRight {year} All Right Reserved.
          </span>
          <span className="iconss">
           <a href="https://www.facebook.com/profile.php?id=100026635785558&mibextid=ZbWKwL">
            <BsFacebook size={25} className="mx-1 fb" />
            </a> 
           <a href="https://instagram.com/muhammad_abdullah9711?igshid=YTQwZjQ0NmI0OA==">
             <FiInstagram size={25} className="mx-1 ins" />
            </a>
           <a href="https://github.com/Abdullah9715" target="_blank">
             <AiFillGithub size={25} className="mx-1 git" />
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
