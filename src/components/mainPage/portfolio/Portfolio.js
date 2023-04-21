import React from "react";
import { Link } from "react-router-dom";
import adaptive_site_preview from "./img/adaptive_site_preview.jpg";
import web_application_using_React from "./img/web_application_using_React.jpg";
import store from "./img/store.jpg";

let Portfolio = () => {
  return (
    <section id="Portfolio" className="MPpage__portfolio portfolioMP">
      <div className="MPportfolio__container _containerMP">
        <h2 className="MPportfolio__title default-titleMP">Portfolio</h2>
        <div className="MPportfolio__text">
          and of course you can see my works
        </div>
        <div className="MPportfolio__cards cards-portfolioMP">
          <div className="MPcards-portfolio__card">
            <Link to="/store/shop" className="MPcards-portfolio__card_link">
              Offline store demo page
            </Link>
            <div className="MPcards-portfolio__card_image">
              <img src={store} alt="Portfolio" />
            </div>
          </div>
          <div className="MPcards-portfolio__card">
            <Link to="/desktop" className="MPcards-portfolio__card_link">
              Web application using React
            </Link>
            <div className="MPcards-portfolio__card_image">
              <img src={web_application_using_React} alt="Portfolio" />
            </div>
          </div>
          <div className="MPcards-portfolio__card">
            <Link to="/adaptive" className="MPcards-portfolio__card_link">
              Responsive website example
            </Link>
            <div className="MPcards-portfolio__card_image">
              <img src={adaptive_site_preview} alt="Portfolio" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Portfolio = React.memo(Portfolio);

export default Portfolio;
