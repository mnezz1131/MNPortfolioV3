import React from "react";
import "./Portfolio.css";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";

function Portfolio() {
  return (
    <div className="main-portfolio-div" id="portfolio">
      <PageHeader title="Portfolio" />
      <div className="portfolio-content">
        <div className="portfolio-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odit
            fuga consequuntur officiis deserunt amet asperiores accusantium
            repellendus nobis, dolorem minus rem iusto, laborum totam officia
            aperiam quo laboriosam nemo.
          </p>
        </div>

        <div className="content">
          <div className="portfolio-links">
            <div className="projectContainer">
              <div className="thumb">
                <img src="./images/portPics/vinyl.png" alt="thumbnail" />
              </div>
              <div className="projectText">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus reprehenderit at minima nemo, soluta totam
                  consequuntur, ea tenetur quisquam ab distinctio similique
                  fugit quasi et sint, quibusdam quam itaque unde!
                </p>
              </div>
            </div>
            <div className="projectContainer">
              <div className="thumb">
                <img src="./images/portPics/tether.png" alt="thumbnail" />
              </div>
              <div className="projectText">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempora aperiam quo numquam quia reprehenderit, blanditiis
                  sequi molestiae magnam recusandae aspernatur sapiente minus
                  deleniti praesentium corporis at quam accusamus impedit animi!
                </p>
              </div>
            </div>
        
            <div className="projectContainer">
              <div className="thumb">
                <img className="image-tech" src="./images/portPics/tech.png" alt="thumbnail" />
              </div>
              <div className="projectText">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusamus ex, ratione quos autem blanditiis dicta doloribus
                  debitis, eius voluptas sed inventore. Nam exercitationem fugit
                  modi quidem? Officia quibusdam ea nemo!
                </p>
              </div>
            </div>

            
            <div className="projectContainer">
              <div className="thumb">
                <img src="./images/portPics/drinks.png" alt="thumbnail" />
              </div>
              <div className="projectText">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusamus ex, ratione quos autem blanditiis dicta doloribus
                  debitis, eius voluptas sed inventore. Nam exercitationem fugit
                  modi quidem? Officia quibusdam ea nemo!
                </p>
              </div>
            </div>




          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
