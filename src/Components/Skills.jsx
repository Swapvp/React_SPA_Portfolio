import React from "react";
import { useState } from "react";
import "./Skills.css";

const skills = [
  { label: "React", value: 90 },
  { label: "Next.JS", value: 85 },
  { label: "Tailwind/Bootstrap", value: 97 },
  { label: "Node JS", value: 90 },
  { label: "HTML 5", value: 90 },
  { label: "CSS 3 Animation", value: 85 },
  { label: "JavaScript", value: 97 },
  { label: "PHP", value: 90 },
];

const Skills = () => {
  const [progressValues, setProgressValues] = useState([25, 50, 75]);

  const renderProgressBar = ({ label, value }, index) => (
    <div key={index} className="d-flex align-items-center mb-4">
      <div className="w-50">
        <h6 className="skill-label my-3">{label}</h6>
        <div className="progress progressBox">
          <div
            className="progress-bar bg-purple"
            role="progressbar"
            style={{ width: `${value}%` }}
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      </div>
      <span className="ms-3 progress-value">{value}%</span>
    </div>
  );
  return (
    <section className="padding" id="skills">
      <div className="secTitle">
        <h2 className="text-center text-uppercase">Skills</h2>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            {skills.slice(0, 4).map(renderProgressBar)}
          </div>

          <div className="col-md-6">
            {skills.slice(4).map(renderProgressBar)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
