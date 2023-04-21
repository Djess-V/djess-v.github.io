import React from "react";
import Card from "./Card";

let Skills = () => {
  const cards = [...Array(15)].map((card, i) => <Card key={i} index={i} />);

  return (
    <section id="Skills" className="MPpage__skills skillsMP">
      <div className="MPskills__container _containerMP">
        <h2 className="MPskills__title default-titleMP">Skills</h2>
        <p className="MPskills__text">
          List of technologies that I used in my projects
        </p>
        <div className="MPskills__cards">{cards}</div>
      </div>
    </section>
  );
};

Skills = React.memo(Skills);

export default Skills;
