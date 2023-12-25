import React from "react";

const Emoji = (props) => {
  return (
    <span className="emoji" role="img" aria-label="Tense Biceps">
      {props.emoji}
    </span>
  );
};

export default Emoji;
