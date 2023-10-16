import React from "react";
import "../CSS/Skills.css";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 80 },
  { name: "Boostrap", level: 90 },
  { name: "JavaScript", level: 70 },
  { name: "React Js", level: 70 },
  { name: "C++", level: 60 },
  { name: "MySql", level: 50 },
  // Add more skills as needed
];

export default function Skills() {
  return (
    <>
      <div className="container-fluid" id="skills">
        <div className="container">
          <h3 style={{ color: "White" }} className="text-center">
            My Skills
          </h3>
          <div className="hr-container">
            <div className="circle"></div>
            <hr />
            <div className="circle"></div>
          </div>
          <div className="row my-5 skill">
            <div className="col-md-6 col-sm-12 animate__lightSpeedOutLeft">
              <h3>Basic Skills</h3>
              <p>"I have a solid foundation and understanding in these skills, and I'm continually expanding and improving my knowledge."</p>
              {skills
                .filter(skill => skill.level <= 70) // Adjust the condition for "Basic Skills"
                .map((skill, index) => (
                  <div key={index}>
                    <p>{skill.name}</p>
                    <div className="progress">
                      <div
                        className="progress-bar bg-black"
                        role="progressbar"
                        style={{ width: `${skill.level}%` }}
                        aria-valuenow={skill.level}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {skill.level}%
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="col-md-6 col-sm-12 animate__lightSpeedOutRight">
              <h3>Advanced Skills</h3>
              <p>"I have a solid grasp of these skills, with a proficiency level of 70% or higher. I am constantly refining and mastering these abilities."</p>
              {skills
                .filter(skill => skill.level > 70) // Adjust the condition for "Advanced Skills"
                .map((skill, index) => (
                  <div key={index}>
                    <p>{skill.name}</p>
                    <div className="progress">
                      <div
                        className="progress-bar bg-black"
                        role="progressbar"
                        style={{ width: `${skill.level}%` }}
                        aria-valuenow={skill.level}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {skill.level}%
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
