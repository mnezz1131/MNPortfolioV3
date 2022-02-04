import React from "react";
import "./Contact.css";
import Download from "../../components/Download/Download.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";

const Contact = () => {
  return (
    <div className="contact-main-div" id="contact">
      <PageHeader title={"Contact Information"} />
      <hr />
      <div className="row">
        <div className="col" size="md-12">
          <p className="contact-p">
            Please contact me for additional information, to schedule job
            interviews or for freelance web design consultations.
          </p>
        </div>
      </div>
      <div className="row contact-row">
        <div className="class" size="md-12">
          <p className="about-me-contact">
            <a href="mailto: mezz1131@gmail.com">Email: mnezz1131@gmail.com</a>{" "}
            &nbsp; | &nbsp; <a href="tel: 512-785-0540">Phone: 512-785-0540</a>{" "}
            &nbsp; | &nbsp;
            <a
              href="https://www.linkedin.com/in/michael-nezzer-11b956196/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              LinkedIn
            </a>{" "}
            &nbsp;| &nbsp;{" "}
            <a
              href="https://github.com/mnezz1131"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Git Hub
            </a>
          </p>
        </div>
      </div>
     
      <Download />
    </div>
  );
};

export default Contact;
