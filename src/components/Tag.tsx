import React from "react";

const Tag = ({ text } : { text : string }) => {
  return <li className="text-sm mr-1.5 mb-1.5 py-1 px-2 rounded-xl bg-second-bg text-accent">{text}</li>;
};

export default Tag;