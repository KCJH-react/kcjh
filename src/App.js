import React from 'react';
import { Provider } from "./components/ui/provider";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import SelfChallenge from './SelfChallenge';
import Information from './Information';
import CM_DetailaPage from './CM_DetailPage';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '2rem' }}>
      <button onClick={() => navigate('/self-challenge')} style={buttonStyle}>SelfChallenge</button>
      <button onClick={() => navigate('/information')} style={buttonStyle}>Information</button>
      <button onClick={() => navigate('/cm-detail')} style={buttonStyle}>CM Detail Page</button>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/self-challenge" element={<SelfChallenge />} />
          <Route path="/information" element={<Information />} />
          <Route path="/cm-detail" element={<CM_DetailaPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;