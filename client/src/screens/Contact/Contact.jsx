import React from 'react';
import "./Contact.css"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import PageHeader from "../../components/PageHeader/PageHeader.jsx"


const handleUrl = (url) => {
  return () => window.open(url, "_blank")
}

const Contact = () => {
  return (
    <div className="contact-main-div" id="contact">
      <PageHeader title={"Contact"} />
      <div className="contact-icons">
    <FaGithub color='white' size="50px" onClick={handleUrl('https://trailhead.salesforce.com/en/today/new_user')}/>
    <FaLinkedin color='white' size="50px" onClick={handleUrl('https://trailhead.salesforce.com/en/today/new_user')}/>
    <FaGithub color='white' size="50px" onClick={handleUrl('https://trailhead.salesforce.com/en/today/new_user')}/>
    <FaLinkedin color='white' size="50px" onClick={handleUrl('https://trailhead.salesforce.com/en/today/new_user')}/>
    </div>
      </div>);
};

export default Contact;
