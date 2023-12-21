import React from "react";
import Card from "./Cards";
import Data from "./Data"

const App = () => (
  <>
  <h1 className="heading_style">List of top 5 Netflix Series in 2023</h1>
    {Data.map((val) => {
      return(
        <Card
          key= {val.id}
          imgsrc={val.imgsrc}
          sname={val.sname}
          title={val.title}
          link={val.link}
        />
      )
    })}
  </>
);

export default App;
