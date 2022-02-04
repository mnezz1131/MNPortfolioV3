import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./About.css";


const About = () => {
  return (
 
    <div className="about-main-div" id="about">
      <PageHeader title={"About Me"} />
      <hr/>

      <div className="about-container">
        <div className="about-text">
          <h2 className="about-h2">Hello! I'm Mike Nezzer</h2>
          <div className="about-me-text">
         
              <p className="about-me-p">I am a software engineer/web developer transferring skills from years of accounting experience to the coding world.  I have earned
              my certificate in Full Stack Development from General Assembly
              immersive boot camp, with curriculum that focused on HTML, CSS,
              JavaScript, Node Js, React, Ruby, Rails as well as others.</p>
            
            <p className="about-me-p">I am a logical and analyaticl thinker. Attention to detail and problem solving skills translate well from accounting to web development. I am also an experienced musician and understand the creative group dynamic.  Being a collaborative creative team member, whether in software development or making music, is extremely gratifying and fulfilling and motivates me.</p>
              
              <p className="about-me-p">I know how to thrive in a team environment working as part of a small Finance section
              and coding on team projects in the General Assembly cohort. I’m
              enthusiastic about the opportunities for constant learning and
              growth in the burgeoning field of full stack development.</p>
          </div>
        </div>
        <div className="about-photo">
          <img className="about-pic" src="./images/me.jpeg" alt="ME!"></img>
        </div>
      </div>
      </div>
   
  );
};

export default About;
