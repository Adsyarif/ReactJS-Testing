import React from "react";
import Information from "../Informations";
import Name from "../Informations/Name";
import Emoji from "../Emojis";

const Entry = (props) => {
  return (
    <>
      <div className="term">
        <dt>
          <Emoji emoji={props.emoji} />
          <Name name={props.name} />
        </dt>
        <Information meaning={props.meaning} />
      </div>
    </>
  );
};

export default Entry;
