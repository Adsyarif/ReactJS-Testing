import React from "react";
import Entry from "./Entry";
import emojipedia from "./../emojipedia";

const createData = (data) => {
  return (
    <Entry
      key={data.id}
      emoji={data.emoji}
      name={data.name}
      meaning={data.meaning}
    />
  );
};

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createData)}</dl>
    </div>
  );
}

export default App;
