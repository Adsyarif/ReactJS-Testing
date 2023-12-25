import React from "react";
import Avatar from "../Avatar";
import Information from "../Informations";
import Name from "../Names";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="top">
          <Information contact={props.id} />
          <Name name={props.name} />
          <Avatar img={props.image} />
        </div>
        <div className="bottom">
          <Information contact={props.tel} />
          <Information contact={props.email} />
        </div>
      </div>
    </>
  );
};

export default Card;
