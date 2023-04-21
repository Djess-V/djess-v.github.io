import React from "react";

let AboutMe = () => {
  return (
    <section id="About Me" className="MPpage__about-me about-meMP">
      <div className="MPabout-me__container _containerMP">
        <div className="MPabout-me__body">
          <h2 className="MPabout-me__title default-titleMP">About me</h2>
          <div className="MPabout-me__text">
            <p>
              Hello, I'm Evgeniy, a developer from Krasnoyarsk. I am interested
              in web development and everything connected with it.
            </p>
            <p>
              I develop web applications based on React, Redux and other
              libraries.
            </p>
            <p>Ready for great projects with wonderful people.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutMe = React.memo(AboutMe);

export default AboutMe;
