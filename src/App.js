import React, { useState } from "react";

import JokeList from "./components/JokeList";
import "./App.css";

function App() {
  // const dummyJokes = [
  //   {
  //     id: 1,
  //     type: "general",
  //     setup: "What do you call a bee that lives in America?",
  //     punchline: "A USB.",
  //   },
  //   {
  //     id: 2,
  //     type: "programming",
  //     setup: "What's the best thing about a Boolean?",
  //     punchline: "Even if you're wrong, you're only off by a bit.",
  //   },
  // ];

  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // function fetchJokesHandler() {
  //   fetch("https://official-joke-api.appspot.com/random_ten")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setJokes(data);
  //     });
  // }

  async function fetchJokesHandler() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_ten"
      );
      if (!response.ok) {
        throw new Error("Что-то пошло не так ...");
      }
      const data = await response.json();
      setJokes(data);
    } catch (e) {
      setError(e.message);
    }
    setIsLoading(false);
  }

  let content = <p>Шуток не найдено.</p>;

  if (jokes.length > 0) {
    content = <JokeList jokes={jokes} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Загрузка шуток ...</p>;
  }

  return (
    <>
      <section>
        <button onClick={fetchJokesHandler}>Fetch Jokes</button>
      </section>
      <section>
        {content}
        {/* {!isLoading && jokes.length > 0 && <JokeList jokes={jokes} />}
        {!isLoading && jokes.length === 0 && !error && <p>Шуток не найдено</p>}
        {isLoading && <p>Загрузка шуток ...</p>}
        {!isLoading && error && <p>{error}</p>} */}
      </section>
    </>
  );
}

export default App;
