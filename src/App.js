import React from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron"
import SearchPage from './pages/Search/Search';

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <SearchPage />
    </div>
  );
}

export default App;
