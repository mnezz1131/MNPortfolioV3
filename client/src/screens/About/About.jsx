import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./About.css";

const About = () => {
  return (
    <div className="about-main-div" id="about">
      <PageHeader title={"About Me"} />

      <div className="about-container">
        <div className="about-text">
          <h2 className="about-h2">Hello! I'm Mike Nezzer</h2>
          <p className="about-me-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            quis consequatur, laborum beatae fugit culpa alias magnam harum
            perferendis, ducimus dolor sunt ratione. Quo dolor quod consequatur
            optio et distincti.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            quis consequatur, laborum beatae fugit culpa alias magnam harum
            perferendis, ducimus dolor sunt ratione. Quo dolor quod consequatur
            optio et distinctio!
          </p>
        </div>
        <div className="about-photo">
          <img className="about-pic" src="./images/me.jpeg" alt="ME!"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
