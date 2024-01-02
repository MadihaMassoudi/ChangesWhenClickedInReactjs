import React from "react";
import Matching from "./Matching";
import NotMatching from "./NotMatching";

const SlotM = (props) => {

  let {x,y,z} = props

  return (
    <>
      {x ===  y && y === z ? <Matching x={x} y={y} z={z}/> : <NotMatching x={x} y={y} z={z}/>}

     
    </>
  );
};

export default SlotM;
