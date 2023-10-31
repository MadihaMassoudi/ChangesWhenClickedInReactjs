import React from "react";
import ReactDOM from "react-dom";
import "./indexx.css";

let currDate = new Date();
currDate = currDate.getHours();
let greetings = "";

const cssStyle = {};

if (currDate >= 1 && currDate < 12) {
  greetings = "Good Morning";
  cssStyle.color = "green";
} else if (currDate >= 12 && currDate < 19) {
  greetings = " Good Afternoon";
  cssStyle.color = "red";
} else {
  greetings = "Good Night";
  cssStyle.color = "blue";
}

ReactDOM.render(
  <>
    <div>
      <h1>
        Hello Sir, <span style={cssStyle}>{greetings}</span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
