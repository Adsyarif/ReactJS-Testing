import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString();
  // let isClicked = false;
  const [time, setTime] = useState(now);

  const updatedTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    // isClicked = true;
    // setTime(setInterval(newTime, 1000));
  };
  setInterval(updatedTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updatedTime}>Get Time</button>
    </div>
  );
}

export default App;
