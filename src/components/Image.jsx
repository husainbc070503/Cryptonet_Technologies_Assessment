import React from "react";

const Image = ({ image }) => {
  return (
    <div className="image-div">
      <img src={image} alt="porfile-pic" />
    </div>
  );
};

export default Image;
