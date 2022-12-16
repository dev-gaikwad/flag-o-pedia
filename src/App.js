import { flagDictionary } from './data';
import { useState } from 'react';

const flagsWeKnow = flagDictionary.map((obj) => obj.emoji);

export default function App() {
  const [country, setCountry] = useState(null);

  const inputChangeHandler = (event) => {
    const userInput = event.target.value;
    const result = flagDictionary.find(
      (obj) => obj.name === userInput || obj.emoji === userInput
    );
    setCountry(result);
  };

  const flagHandler = (flag) => {
    const reverseResult = flagDictionary.find((obj) => obj.emoji === flag);
    setCountry(reverseResult);
  };

  return (
    <div className='App'>
      <header>
        <h1>Flag-O-Pedia</h1>
        <small>
          Website best suitable for Android, iOS and MacOS as Windows and Linux
          does not allow display of flag emojis
        </small>
        <h4>Enter the name or flag of the country</h4>
      </header>

      <input className='search' onChange={inputChangeHandler} />
      <div className='result-container'>
        {country ? (
          <h3>
            {country.name} {country.emoji}
          </h3>
        ) : null}
      </div>

      <div className='all-flags-container'>
        <p>Flags in our database</p>
        <h3>
          {flagsWeKnow.map((flag) => (
            <span key={flag} onClick={() => flagHandler(flag)}>
              {' '}
              {flag}{' '}
            </span>
          ))}
        </h3>
      </div>
    </div>
  );
}
