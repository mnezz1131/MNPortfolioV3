import React from 'react';
import "./Home.css"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const Home = () => {
  return (
    <div className='home-main-div'>
      <img className = "home-background" src="./images/austin.jpeg" alt="austin"/>
      <div className="home-container">
        <h2 className="home-welcome"
        data-aos="fade-right"
        data-aos-delay ="500"
        data-aos-easing="ease-in-sine"
        data-aos-duration="700"
        
        
        >Welcome to my Portfolio</h2>
        <h2 className='home-name'
        data-aos="fade-down"
        data-aos-delay="1000"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1500"
            >Mike Nezzer</h2>
      </div>
      <img
        className="home-img1"
        src="./images/image1.jpg"
        data-aos="fade-left"
        data-aos-delay="2700"
        data-aos-easing="ease-in-sin"
        data-aos-duration="1000"
        alt="yo"></img>
 
   
  </div>
    

  )
};

export default Home;


