import React from 'react';
import { Provider } from "./components/ui/provider"
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SelfChallenge from './SelfChallenge';
import Information from './Information';
import CM_DetailaPage from './CM_DetailPage'

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <CM_DetailaPage />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
