import React from "react";
import Card from "./Cards";
import Heading from "./Header";
import contacts from "./../contacts.js";
import Avatar from "./Avatar/index.jsx";

const createCard = (contact) => {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      image={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
};

function App() {
  return (
    <div>
      <Heading />
      <Avatar img="https://media.licdn.com/dms/image/D5603AQE55nFUOgaqUA/profile-displayphoto-shrink_800_800/0/1648652080219?e=2147483647&v=beta&t=5oMu_Ot70wWnV6D9O-OyNYNAQBjAEn6uQ3IfdB9uUC0" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
