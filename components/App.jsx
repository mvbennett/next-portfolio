import React from "react";
import Title from './Title';
import BioCard from './BioCard';
import Projects from './Projects';
import SkillsBox from './SkillsBox';
import Footer from "./Footer";

const App = () => {
  const stack = {
    ruby: { Ruby: "../public/images/icons/ruby-plain-wordmark.svg" },
    rails: { 'Ruby on Rails': "../public/images/icons/rails-plain-wordmark.svg" },
    javascript: { JavaScript: "../public/images/icons/javascript-original.svg" },
    react: { React: "../public/images/icons/react-original-wordmark.svg" },
    express: { 'Express.js': "../public/images/icons/expressjs-icon.svg" },
    postgres: { PostgreSQL: "../public/images/icons/postgresql-original-wordmark.svg" },
    redux: { Redux: "../public/images/icons/redux.svg" },
    sass: { Sass: "../public/images/icons/sass-original.svg" },
    bootstrap: { Bootstrap: "../public/images/icons/bootstrap-original-wordmark.svg" },
    figma: { Figma: "../public/images/icons/figma-original.svg" },
    html: { HTML5: "../public/images/icons/html5-original-wordmark.svg" },
    mongo: { MongoDB: "../public/images/icons/mongodb-icon.svg" },
    node: { 'Node.js': "../public/images/icons/nodejs-original.svg" },
    npm: { NPM: "../public/images/icons/npm-original-wordmark.svg" },
    yarn: { Yarn: "../public/images/icons/yarn-original-wordmark.svg" },
    webpack: { Webpack: "../public/images/icons/webpack-icon.svg" }
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
