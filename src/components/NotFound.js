import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you are looking for does not exist.</p>
        <p>Return to <Link to="/">Homepage</Link></p>
      </div>
    </div>
  )
}

export default NotFound