import React, { useState } from "react";
const Addcard = ({ Addfilm, films }) => {
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const [email, setemail] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    Addfilm(title, description, email);
    settitle("");
    setDescription("");
    setemail("");
  };
  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="put ur description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <button onClick={() => Addfilm()}>add</button>
    </form>
  );
};

export default Addcard;
