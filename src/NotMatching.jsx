import React from "react";

const NotMatching = ({ x, y, z }) => {
  return (
    <>
      <div className="slot_inner">
        <h1>
          {x} {y} {z}
        </h1>
        <h1>This is Not Matching</h1>
        <hr />
      </div>
    </>
  );
};
export default NotMatching;
