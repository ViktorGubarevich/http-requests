import React from "react";

import styles from "./Joke.module.css";

const Joke = ({ type, setup, punchline }) => {
  return (
    <li className={styles.joke}>
      <h2>{type}</h2>
      <h3>{setup}</h3>
      <h3>{punchline}</h3>
    </li>
  );
};

export default Joke;
