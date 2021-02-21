import React, { useState } from "react";
import Addcard from "./Addcard";
import { movie } from "./Data";
import Movi from "./Movi";

const Movielist = () => {
  const [films, setFilms] = useState(movie);

  const Addfilm = (newfilm) => {
    setFilms([...films, newfilm]);
  };
  return (
    <div>
      {movie.map((el) => (
        <Movi contact={el} key={el.i} />
      ))}
      <Addcard Addfilm={Addfilm} />
    </div>
  );
};

export default Movielist;
