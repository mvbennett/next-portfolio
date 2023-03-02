import React from "react";
import Image from "next/image";

const ProjectCard = ({ project }: any) => {
  const projectStack = project.stack.map((tool: any) => {
    return (
      <div className="stack-skill" key={tool.name}>
        <Image src={tool.img} alt={tool.name} fill />
      </div>
    );
  });
  return (
    <div className="project-card">
      <a data-aos="fade-right" href={project.url} dangerouslySetInnerHTML={{ __html: '' }} rel="noreferrer" target="_blank" className="project-photo" style={{ background: `linear-gradient(to bottom, rgba(0,0,0,.2), rgba(0,0,0,.3)), url(${project.img})`, backgroundSize: 'cover' }} />
      <div className="project-info" data-aos="fade-left">
        <h3>
          <a href={project.url} rel="noreferrer" target="_blank">
            {project.name}
          </a>
        </h3>
        <p className="subtitle">
          {project.description}
        </p>
        <p className="role">
          {project.role}
        </p>
        <div className="stack">
          {projectStack}
        </div>
        <div className="stack-skill">
          <a href={project.github} rel="noreferrer" target="_blank">
            <Image src="/images/icons/GitHub-Mark-32px.png" alt="GitHub code link" className="github-logo" fill />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
