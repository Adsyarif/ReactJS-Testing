import React from "react";
import Login from "./Login";

let isLoggeIn = false;
const curretTime = new Date().getTime();
function App() {
  return (
    <div className="container">
      {
        isLoggeIn ? <h1>Hello</h1> : <Login />
        // curretTime > 12 && <h1>Why are you still working?</h1>
      }
    </div>
  );
}

export default App;
