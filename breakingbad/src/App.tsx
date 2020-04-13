import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  const consultarApi = () => {
    const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = api.then((res) => res.json());
    frase.then((res) => console.log(res));
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          <button onClick={() => consultarApi()}> Obtener frase</button>
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
