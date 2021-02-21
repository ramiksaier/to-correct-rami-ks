import React from "react";

const Movi = ({ contact }) => {
  return (
    <div>
      <h1>{contact.title}</h1>
      <h2>{contact.description}</h2>
      <h3> {contact.email} </h3>
    </div>
  );
};

export default Movi;
