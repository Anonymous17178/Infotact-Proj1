import React from 'react';
import { FiSearch, FiCalendar, FiBell } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="header">
      <div className="header-search">
        <FiSearch className="search-icon" />
        <input 
          type="text" 
          placeholder="Search products, orders, customers..." 
          className="search-input"
        />
      </div>
      <div className="header-actions">
        <div className="date-picker">
          <FiCalendar className="calendar-icon" />
          <span>Apr 1 - Apr 16, 2026</span>
        </div>
        <div className="notification-btn">
          <FiBell className="bell-icon" />
          <span className="notification-badge">3</span>
        </div>
        <div className="user-profile">
          <div className="user-avatar">AD</div>
          <span className="user-name">Admin</span>
          <span className="dropdown-arrow">▼</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
