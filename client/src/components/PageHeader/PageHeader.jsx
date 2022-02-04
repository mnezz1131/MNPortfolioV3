import React from "react";
import "./PageHeader.css"

const PageHeader = (props) => {
  return (
    <div>
      <div className="container">
        {/* <hr /> */}
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
