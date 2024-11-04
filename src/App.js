import React from 'react';
import { Provider } from "./components/ui/provider"
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SelfChallenge from './SelfChallenge';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <SelfChallenge />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
