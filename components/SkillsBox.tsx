import Image from "next/image";
import React from "react";

const SkillsBox = ({ stack }:any) => {
  const skills = Object.values(stack).map((tool: any) => {
    return (
      <div className="skill-container" key={tool.name}>
        <Image src={tool.img} alt={tool.name} className="skill-logo" data-aos="zoom-in" fill />
      </div>
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
