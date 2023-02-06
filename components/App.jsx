import React from "react";
import Title from './Title';
import BioCard from './BioCard';
import Projects from './Projects';
import SkillsBox from './SkillsBox';
import Footer from "./Footer";

const App = () => {
  const stack = {
    ruby: { Ruby: "/images/icons/ruby-plain-wordmark.svg" },
    rails: { 'Ruby on Rails': "/images/icons/rails-plain-wordmark.svg" },
    javascript: { JavaScript: "/images/icons/javascript-original.svg" },
    react: { React: "/images/icons/react-original-wordmark.svg" },
    express: { 'Express.js': "/images/icons/expressjs-icon.svg" },
    postgres: { PostgreSQL: "/images/icons/postgresql-original-wordmark.svg" },
    redux: { Redux: "/images/icons/redux.svg" },
    sass: { Sass: "/images/icons/sass-original.svg" },
    bootstrap: { Bootstrap: "/images/icons/bootstrap-original-wordmark.svg" },
    figma: { Figma: "/images/icons/figma-original.svg" },
    html: { HTML5: "/images/icons/html5-original-wordmark.svg" },
    mongo: { MongoDB: "/images/icons/mongodb-icon.svg" },
    node: { 'Node.js': "/images/icons/nodejs-original.svg" },
    npm: { NPM: "/images/icons/npm-original-wordmark.svg" },
    yarn: { Yarn: "/images/icons/yarn-original-wordmark.svg" },
    webpack: { Webpack: "/images/icons/webpack-icon.svg" }
  };
  return (
    <div id="app">
      <Title />
      <div className="container">
        <BioCard />
        <Projects stack={stack} />
        <SkillsBox stack={stack} />
      </div>
      <Footer />
    </div>

  );
};

export default App;
