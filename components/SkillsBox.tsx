import Image from "next/image";
import React from "react";

const SkillsBox = ({ stack }:any) => {
  const skills = Object.values(stack).map((tool: any) => {
    return (
      <img src={tool.img} alt={tool.name} key={tool.name} className="skill-logo" data-aos="zoom-in" />
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
