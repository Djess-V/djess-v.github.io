import React from "react";
import Stars from "./Stars";

import htmlImage from "./img/html-5-svgrepo-com.svg";
import cssImage from "./img/css-3-svgrepo-com.svg";
import jsImage from "./img/js-svgrepo-com.svg";
import reactImage from "./img/react-svgrepo-com.svg";
import reduxImage from "./img/redux-svgrepo-com.svg";
import mobXImage from "./img/mobx-svgrepo-com.svg";
import nodejsImage from "./img/node-js-svgrepo-com.svg";
import scssImage from "./img/scss2-svgrepo-com.svg";
import sequelizeImage from "./img/sequelize-svgrepo-com.svg";
import viteImage from "./img/vite-svgrepo-com.svg";
import webpackImage from "./img/webpack-svgrepo-com.svg";
import bootstrapImage from "./img/bootstrap.png";
import postmanImage from "./img/postman-icon-svgrepo-com.svg";
import gitImage from "./img/git-svgrepo-com.svg";
import reactrouterImage from "./img/react-router-svgrepo-com.svg";

const skillsImage = [
  htmlImage,
  cssImage,
  jsImage,
  reactImage,
  reduxImage,
  mobXImage,
  nodejsImage,
  scssImage,
  sequelizeImage,
  viteImage,
  webpackImage,
  bootstrapImage,
  postmanImage,
  reactrouterImage,
  gitImage,
];

const skillsString = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "MobX",
  "Node JS",
  "SCSS",
  "Sequelize",
  "Vite",
  "Webpack",
  "Bootstrap",
  "Postman",
  "React-router",
  "Git",
];

const skillsLink = [
  "https://www.w3schools.com/html/",
  "https://www.w3schools.com/css/",
  "https://www.w3schools.com/js/",
  "https://ru.reactjs.org/",
  "https://redux.js.org/",
  "https://mobx.js.org/",
  "https://nodejs.org/en/",
  "https://sass-scss.ru/",
  "https://sequelize.org/",
  "https://vitejs.dev/",
  "https://webpack.js.org/",
  "https://getbootstrap.com/",
  "https://www.postman.com/",
  "https://reactrouter.com/en/main",
  "https://git-scm.com/",
];

let Card = ({ index }) => {
  return (
    <div className="MPskills__card cardMP">
      <div className="MPcard__icon">
        <img src={skillsImage[index]} alt="Card" />
      </div>
      <div className="MPcard__link">
        <a href={skillsLink[index]} target="_blank" rel="noreferrer">
          {skillsString[index]}
        </a>
      </div>
      <Stars />
    </div>
  );
};

Card = React.memo(Card);

export default Card;
