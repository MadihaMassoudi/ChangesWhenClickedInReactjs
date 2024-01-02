import React from "react";

const Matching = ({ x, y, z }) => {
  return (
    <>
      <div className="slot_inner">
        <h1>
          {x} {y} {z}
        </h1>
        <h1>This is Matching</h1>
        <hr />
      </div>
    </>
  );
};
export default Matching;
