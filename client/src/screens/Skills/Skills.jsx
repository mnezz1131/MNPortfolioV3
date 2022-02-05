import React from "react";
import "./Skills.css"
import PageHeader from "../../components/PageHeader/PageHeader.jsx";

const Skills = () => {
  return (
    <div className = "skills-main-div" id="skills">
      <PageHeader title={"Skills"} />
      <hr />
      <div className="skills-text">
        <p className="skills-p">
         I am a life long learner and have varying  degrees of experience with different languages, framworks and technologies through my own studies and through the General Assembly Software Immersive bootcamp.  I am always looking for ways to acquire more knowledge,  grow and improve my proficiency and abilities.
        </p>
      </div>
      <div className="skills-container">
      <div className="skills-lists">
        <ul className="skills-ul">
            <li>React</li>
            <li><img className="skill-img" src="./images/logos/react.png" alt="js" /></li>
            <li>Java Script</li>
            <li><img className="skill-img" src="./images/logos/js.png" alt="js" /></li>
            <li>HMTL</li>
            <li><img className="skill-img" src="./images/logos/html.png" alt="js" /></li>
            <li>CSS</li>
            <li><img className="skill-img" src="./images/logos/css.png" alt="js" /></li>
            <li>Bootstrap</li>
            <li><img className="skill-img" src="./images/logos/Bootstrap.png" alt="js" /></li>     
        </ul>
        
        <ul className="skills-ul">
        <li>Ruby</li>
            <li><img className="skill-img skill-img-ruby" src="./images/logos/ruby.png" alt="js" /></li>
            <li>Rails</li>
            <li><img className="skill-img" src="./images/logos/rails.png" alt="js" /></li>
            <li>Postgresql</li>
            <li><img className="skill-img" src="./images/logos/postgres.png" alt="js" /></li>
            <li>MongoDB</li>
            <li><img className="skill-img" src="./images/logos/mongo.png" alt="js" /></li>
          <li>Air Table</li>
          <li><img className="skill-img skill-img-air" src="./images/logos/air.png" alt="js" /></li>
        </ul>
        <ul className="skills-ul">
            <li>Visual Studio Code</li>
            <li><img className="skill-img" src="./images/logos/vsc.png" alt="js" /></li>
            <li>GitHub</li>
            <li><img className="skill-img skill-img-git" src="./images/logos/git.png" alt="js" /></li>
                
        </ul>
        </div>
        </div>
    </div>
  );
};

export default Skills;
