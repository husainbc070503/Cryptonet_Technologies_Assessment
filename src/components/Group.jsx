import React from "react";

const Group = ({ title, text }) => {
  return (
    <div className="group">
      <span className="title">{title}:</span>
      <p className="text">{text}</p>
    </div>
  );
};

export default Group;
