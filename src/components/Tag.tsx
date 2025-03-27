import React from "react";

const Tag = ({ text } : { text : string }) => {
  return <li className="m-2 py-1 px-2 rounded-xl bg-second-bg text-accent">{text}</li>;
};

export default Tag;