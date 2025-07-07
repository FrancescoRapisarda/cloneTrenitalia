import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import TicketDetails from './components/TicketDetails/TicketDetails';
import Footer from './components/Footer/Footer';
import SearchResultsPage from './components/SearchResultsPage/SearchResultsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ticket-details" element={<TicketDetails />} />
        <Route path="/search-results" element={<SearchResultsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
