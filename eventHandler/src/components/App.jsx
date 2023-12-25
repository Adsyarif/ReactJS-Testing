import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const handleClick = () => {
    setHeadingText("Submited");
  };

  const [isMouseOver, setMouseOver] = useState(false);
  const mouseOver = () => {
    setMouseOver(true);
  };

  const mouseOut = () => {
    setMouseOver(false);
  };
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "white" : "black" }}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
