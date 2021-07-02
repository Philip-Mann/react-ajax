import React, { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  // adds <p>loading...</p> while _fetchJoke is fetching joke; only renders when useState(true); see line 10
  const [joke, setJoke] = useState('');

  const _fetchJoke = () => {
    setIsLoading(true); //since setIsLoading is true, it renders 'loading...'
    fetch('https://api.chucknorris.io/jokes/random') //GET URL
      .then(response => response.json()) //response is turned into JSON
      .then(joke => {
        //Once joke is recieved,
        setIsLoading(false); //setIsLoading is turned back to false
        setJoke(joke); // Modifys the state
      });
  };

  const clickHandler = () => {
    _fetchJoke();
  };

  //lifecycle hook
  useEffect(() => {
    //as the state is changed,
    _fetchJoke(); // it will fire _fetchJoke
  }, []); //enter joke into [] to see an infinite loop of jokes

  return (
    <div>
      <p>{isLoading ? 'loading...' : ''}</p>
      <p>{joke.value}</p>
      <button onClick={clickHandler}>New Joke</button>
    </div>
  );
}
