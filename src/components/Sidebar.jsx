import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();

  function handleClick() {
    localStorage.removeItem('currentUser');
    navigate('/login');
  }

  return (
    <div className="sidebar-container">
      <div>
        <div className="sidebar-header">Job Tracker</div>
        <div className="sidebar-links">
          <Link to="/" className="sidebar-link">
            Dashboard
          </Link>
          <Link to="/boards" className="sidebar-link">
            Boards
            
          </Link>
          <Link to="/profile" className="sidebar-link">
            Profile
          </Link>
        </div>
      </div>
      <div>
        <button type="button" onClick={handleClick} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
