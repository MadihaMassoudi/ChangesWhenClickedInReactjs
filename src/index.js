import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import './index.css';
import Data from "./Data"


ReactDOM.render(
  <>
  <h1 className="heading_style">List of top 5 Netflix Series in 2023</h1>
    {Data.map((val) => {
      return(
        <Card
          imgsrc={val.imgsrc}
          sname={val.sname}
          title={val.title}
          link={val.link}
        />
      )
    })}
  </>,
  document.getElementById("root")
);
