import React from "react";
import "./Portfolio.css";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import details from "../../details.json";
import Card from "../../components/Card/Card.jsx";
function Portfolio() {
  const cards = details;

  return (
    <div className="main-portfolio-div" id="portfolio">
      <PageHeader title="Portfolio" />
      <div className="portfolio-wrapper">
        <div className="portfolio-container">
          {cards.map((card) => (
            <Card
              id={card.id}
              key={card.id}
              name={card.name}
              tools={card.tools}
              summary={card.summary}
              image={card.image}
              gitHub={card.gitHub}
              deploy={card.deploy}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
