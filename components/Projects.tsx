import React from "react";

import ProjectCard from "./ProjectCard";

const Projects = ({ stack }:any) => {
  const projects = {
    richbennettproductions: {
      name: 'Rich Bennett Productions',
      img: '/images/richbennettproductions.png',
      url: 'https://richbennettproductions.com',
      description: 'Single Page Web App for local music producer to share his extensive portfolio and be contacted for future production work. Note: Please only use the email form if you are a musician interested in being recorded, the form information goes directly to the producer, not me.',
      role: 'Lead Developer',
      github: 'https://github.com/mvbennett/richbennett',
      stack: [
        stack.nextjs,
        stack.react,
        stack.typescript,
        stack.html,
        stack.sass,
        stack.figma,
        stack.yarn
      ]
    },
    abandonya: {
      name: 'Abandonya',
      img: '/images/Abandonya.png',
      url: 'https://abandonya.herokuapp.com/',
      description: 'An app for users to search for unusual places they would like to visit and make reservations for each place. Owners of the spaces can list their spaces on the app, set their own terms, and approve or deny any reservations for those spaces.',
      role: 'Lead Developer',
      github: 'https://github.com/mvbennett/abandonya',
      stack: [
        stack.rails,
        stack.sass,
        stack.javascript,
        stack.html,
        stack.bootstrap,
        stack.node,
        stack.yarn,
        stack.postgres
      ]
    },
    myGameShelf: {
      name: 'My Game Shelf',
      img: '/images/MyGameShelf.png',
      url: 'https://mvbgameshelf.herokuapp.com',
      description: 'Users can search for new games and manage their collections across all gaming platforms by putting them on the game shelf. Integrated with Twitch\'s API so users can access current live streams from the app. Offers analytics for users about the games they are interested in and makes helpful recommendations for what they would be interested in.',
      role: 'Lead Developer and Front End Developer',
      github: 'https://github.com/mvbennett/my-game-shelf',
      stack: [
        stack.rails,
        stack.sass,
        stack.javascript,
        stack.figma,
        stack.html,
        stack.bootstrap,
        stack.node,
        stack.yarn,
        stack.postgres
      ]
    },
  };
  return (
    <div>
      <h2>Projects</h2>
      <ProjectCard project={projects.richbennettproductions} />
      <ProjectCard project={projects.myGameShelf} />
      <ProjectCard project={projects.abandonya} />
    </div>
  );
};

export default Projects;
