import React from "react";

const SkillsBox = ({ stack }:any) => {
  const skills = Object.values(stack).map((tool) => {
    return (
      <img src={Object.values(tool)[0]} alt={Object.keys(tool)[0]} key={`${Object.keys(tool)[0]}`} className="skill-logo" data-aos="zoom-in" />
    );
  });
  return (
    <div>
      <h2>
        Technical Skills
      </h2>
      <div className="skills-box">
        {skills}
      </div>
    </div>
  );
};

export default SkillsBox;
