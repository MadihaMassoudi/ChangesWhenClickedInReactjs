import React from "react";


function App(){

    let currDate = new Date();
    currDate = currDate.getHours();

    let greetings = "";

    let cssStyle = {};

    if(currDate >= 1 && currDate < 12){
        greetings = "Good Morning";
        cssStyle.color = "Green"
    }else if(currDate >= 12 && currDate < 19){
        greetings = "Good Afternoon";
        cssStyle.color = "Pink"
    }else{
        greetings = "Good Night";
        cssStyle.color = "purple"
    }
    return (

    <>
    <div>
        <h1> Hello sir, <span style={cssStyle}> {greetings}</span> </h1>
    </div>
    </>
    )
}

export default App;