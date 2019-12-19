import React, { useState } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron"
import SearchPage from './pages/Search/Search';
import SavedPage from './pages/Saved/Saved';

function App() {

  const [currentPage, setCurrentPage] = useState("Search");

  const renderPage = () => {

    switch (currentPage) {
      case "Search":
        return <SearchPage />
      case "Saved":
        return <SavedPage />
      default:
        return <SearchPage />
    }
  }
  return (
    <div className="App">
      <Jumbotron currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
