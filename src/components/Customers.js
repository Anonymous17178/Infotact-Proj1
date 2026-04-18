import React, { useState } from 'react';
import { FiSearch, FiPlus, FiMail, FiPhone, FiUser } from 'react-icons/fi';

const customersData = [
  { id: 1, name: 'John Smith', email: 'john.smith@email.com', phone: '(555) 123-4567', orders: 24, totalSpent: 2340, lastVisit: 'Apr 16, 2026', tier: 'Gold' },
  { id: 2, name: 'Emma Wilson', email: 'emma.w@email.com', phone: '(555) 234-5678', orders: 15, totalSpent: 1245, lastVisit: 'Apr 15, 2026', tier: 'Silver' },
  { id: 3, name: 'Michael Brown', email: 'm.brown@email.com', phone: '(555) 345-6789', orders: 8, totalSpent: 680, lastVisit: 'Apr 14, 2026', tier: 'Regular' },
  { id: 4, name: 'Sarah Davis', email: 'sarah.d@email.com', phone: '(555) 456-7890', orders: 32, totalSpent: 4120, lastVisit: 'Apr 16, 2026', tier: 'Gold' },
  { id: 5, name: 'David Lee', email: 'david.lee@email.com', phone: '(555) 567-8901', orders: 19, totalSpent: 1890, lastVisit: 'Apr 13, 2026', tier: 'Silver' },
  { id: 6, name: 'Lisa Anderson', email: 'lisa.a@email.com', phone: '(555) 678-9012', orders: 5, totalSpent: 420, lastVisit: 'Apr 12, 2026', tier: 'Regular' },
  { id: 7, name: 'James Taylor', email: 'j.taylor@email.com', phone: '(555) 789-0123', orders: 11, totalSpent: 950, lastVisit: 'Apr 16, 2026', tier: 'Silver' },
  { id: 8, name: 'Emily Martinez', email: 'emily.m@email.com', phone: '(555) 890-1234', orders: 3, totalSpent: 210, lastVisit: 'Apr 11, 2026', tier: 'Regular' },
];

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customersData.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTierBadge = (tier) => {
    switch (tier) {
      case 'Gold':
        return <span className="tier-badge gold">Gold</span>;
      case 'Silver':
        return <span className="tier-badge silver">Silver</span>;
      case 'Regular':
        return <span className="tier-badge regular">Regular</span>;
      default:
        return <span className="tier-badge">{tier}</span>;
    }
  };

  const goldCount = customersData.filter(c => c.tier === 'Gold').length;
  const silverCount = customersData.filter(c => c.tier === 'Silver').length;
  const regularCount = customersData.filter(c => c.tier === 'Regular').length;

  return (
    <div className="customers">
      <div className="customers-header">
        <div>
          <h1>Customers</h1>
          <p>Manage customer relationships</p>
        </div>
        <button className="btn-add-customer">
          <FiUser size={18} />
          Add Customer
        </button>
      </div>

      <div className="customers-toolbar animate-in" style={{ animationDelay: '0.1s' }}>
        <div className="search-box">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="table-container animate-in" style={{ animationDelay: '0.2s' }}>
        <table className="customers-table">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Contact</th>
              <th>Orders</th>
              <th>Total Spent</th>
              <th>Last Visit</th>
              <th>Tier</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer, index) => (
              <tr key={customer.id} className={index % 2 === 1 ? 'alternate-row' : ''}>
                <td className="customer-name-cell">{customer.name}</td>
                <td className="contact-cell">
                  <div className="contact-row">
                    <FiMail size={14} />
                    {customer.email}
                  </div>
                  <div className="contact-row">
                    <FiPhone size={14} />
                    {customer.phone}
                  </div>
                </td>
                <td className="orders-cell">{customer.orders}</td>
                <td className="spent-cell">${customer.totalSpent.toLocaleString()}</td>
                <td className="date-cell">{customer.lastVisit}</td>
                <td className="tier-cell">{getTierBadge(customer.tier)}</td>
                <td className="actions-cell">
                  <button className="btn-view-customer">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="customers-summary animate-in" style={{ animationDelay: '0.3s' }}>
        <div className="summary-card">
          <span className="summary-label">Total Customers</span>
          <span className="summary-value">{customersData.length}</span>
        </div>
        <div className="summary-card">
          <span className="summary-label">Gold Tier</span>
          <span className="summary-value gold">{goldCount}</span>
        </div>
        <div className="summary-card">
          <span className="summary-label">Silver Tier</span>
          <span className="summary-value silver">{silverCount}</span>
        </div>
        <div className="summary-card">
          <span className="summary-label">Regular Tier</span>
          <span className="summary-value regular">{regularCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Customers;
