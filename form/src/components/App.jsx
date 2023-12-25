import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  const [text, setText] = useState("");
  function handleClick(event) {
    setText(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {text}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
