import React from "react";
import "./Skills.css"
import PageHeader from "../../components/PageHeader/PageHeader.jsx";

const Skills = () => {
  return (
    <div className = "skills-main-div" id="skills">
      <PageHeader title={"Skills"} />
      <div className="skills-p">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident ipsam nemo maxime sit, facilis, incidunt error accusamus officia, quas dolores non? Autem sint, animi minima blanditiis quos debitis eos perspiciatis.   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident ipsam nemo maxime sit, facilis, incidunt error accusamus officia, quas dolores non? Autem sint, animi minima blanditiis quos debitis eos perspiciatis.   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident ipsam nemo maxime sit, facilis, incidunt error accusamus officia, quas dolores non? Autem sint, animi minima blanditiis quos debitis eos perspiciatis. 
        </p>
      </div>
      <div className="skills-container">
      <div className="skills-lists">
        <ul>
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
        
        <ul>
       
        <li>Ruby</li>
            <li><img className="skill-img-ruby" src="./images/logos/ruby.png" alt="js" /></li>
            <li>Rails</li>
            <li><img className="skill-img" src="./images/logos/rails.png" alt="js" /></li>
            <li>Postgresql</li>
            <li><img className="skill-img" src="./images/logos/postgres.png" alt="js" /></li>
            <li>MongoDB</li>
            <li><img className="skill-img" src="./images/logos/mongo.png" alt="js" /></li>
          <li>Air Table</li>
          <li><img className="skill-img-air" src="./images/logos/air.png" alt="js" /></li>
        </ul>
        <ul>
          
            <li>Visual Studio Code</li>
            <li><img className="skill-img" src="./images/logos/vsc.png" alt="js" /></li>
            <li>GitHub</li>
            <li><img className="skill-img" src="./images/logos/git.png" alt="js" /></li>
                
        </ul>
        </div>
        </div>
    </div>
  );
};

export default Skills;
