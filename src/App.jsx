import LOADER from './loader.svg';
import './App.css';
import React from 'react';



function App() {

  const [searching, setSearching] = React.useState(true);

  const sleep = (ms)  => new Promise(resolve => setTimeout(resolve, ms));

  const handleLoad = async () => {
    await sleep(4500);
    setSearching(false)
  }

  const SearchingForFuck = () => (
    <div>
      <h1>Searching for all the fucks I give...</h1>
      <img src={LOADER} className="loader" alt="loading..." onLoad={handleLoad}/>
    </div>
  )

  const FucksNotFound = () => (
    <div>
      <h1>404</h1>
      <h2>Fuck not found</h2>
      <p>We're very sorry to say that the person who sent you this could not find a fuck to give.</p>
    </div>
  )

  return (
    <div className="App">
      <main>
        {searching ? SearchingForFuck() : FucksNotFound()}
      </main>
      <footer>
        <p>&copy; Copyright 2022 - Leah Eramo</p>
        <p>
        Favicon Attribution: &copy; Copyright 2020 <a href="https://github.com/twitter/twemoji">Twitter, Inc and other contributors</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
