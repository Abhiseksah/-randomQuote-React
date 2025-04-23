// pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div style={{ textAlign: 'center' }}>
    <h2>Welcome to Quote App</h2>
    <Link to="/quote">
      <button>Fetch a Random Quote</button>
    </Link>
  </div>
);

export default HomePage;
