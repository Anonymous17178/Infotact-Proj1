import React, { useState } from 'react';
import { FiUser, FiPlus, FiShoppingCart, FiDollarSign, FiTrendingUp } from 'react-icons/fi';

const staffData = [
  { id: 1, name: 'Alice Johnson', role: 'Senior Cashier', email: 'alice.j@retailpos.com', status: 'Active', orders: 42, sales: 3245, avgOrder: 77.26, shift: 'Morning', avatar: 'AJ' },
  { id: 2, name: 'Bob Chen', role: 'Cashier', email: 'bob.c@retailpos.com', status: 'Active', orders: 38, sales: 2890, avgOrder: 76.05, shift: 'Morning', avatar: 'BC' },
  { id: 3, name: 'Carol White', role: 'Cashier', email: 'carol.w@retailpos.com', status: 'Active', orders: 35, sales: 2654, avgOrder: 75.83, shift: 'Afternoon', avatar: 'CW' },
  { id: 4, name: 'David Martinez', role: 'Cashier', email: 'david.m@retailpos.com', status: 'Offline', orders: 28, sales: 2145, avgOrder: 76.61, shift: 'Evening', avatar: 'DM' },
  { id: 5, name: 'Emily Brown', role: 'Senior Cashier', email: 'emily.b@retailpos.com', status: 'Offline', orders: 31, sales: 2498, avgOrder: 80.58, shift: 'Evening', avatar: 'EB' },
];

const SimpleStatCard = ({ title, value, color, delay }) => (
  <div className="simple-stat-card animate-in" style={{ animationDelay: `${delay * 0.1}s` }}>
    <p className="stat-title">{title}</p>
    <h3 className="stat-value" style={{ color: color }}>{value}</h3>
  </div>
);

const Staff = () => {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active':
        return <span className="staff-status-badge active">Active</span>;
      case 'Offline':
        return <span className="staff-status-badge offline">Offline</span>;
      default:
        return <span className="staff-status-badge">{status}</span>;
    }
  };

  return (
    <div className="staff">
      <div className="staff-header">
        <div>
          <h1>Staff</h1>
          <p>Manage cashiers and track performance</p>
        </div>
        <button className="btn-add-staff">
          <FiUser size={18} />
          Add Staff Member
        </button>
      </div>

      <div className="simple-stats-grid">
        <SimpleStatCard title="Active Staff" value="3" color="#10b981" delay={0} />
        <SimpleStatCard title="Total Orders Today" value="174" color="#111827" delay={1} />
        <SimpleStatCard title="Total Sales Today" value="$13,432" color="#111827" delay={2} />
        <SimpleStatCard title="Avg Performance" value="77.3%" color="#111827" delay={3} />
      </div>

      <div className="staff-grid">
        {staffData.map((staff, index) => (
          <div key={staff.id} className="staff-card animate-in" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
            <div className="staff-card-header">
              <div className="staff-info">
                <div className="staff-avatar-large">{staff.avatar}</div>
                <div className="staff-details">
                  <h4 className="staff-name">{staff.name}</h4>
                  <p className="staff-role">{staff.role}</p>
                  <p className="staff-email">{staff.email}</p>
                </div>
              </div>
              {getStatusBadge(staff.status)}
            </div>

            <div className="staff-stats">
              <div className="staff-stat">
                <FiShoppingCart size={16} />
                <div>
                  <span className="stat-label">Orders</span>
                  <span className="stat-value-small">{staff.orders}</span>
                </div>
              </div>
              <div className="staff-stat">
                <FiDollarSign size={16} />
                <div>
                  <span className="stat-label">Sales</span>
                  <span className="stat-value-small">${staff.sales.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="staff-performance">
              <div className="performance-row">
                <FiTrendingUp size={16} />
                <span className="performance-label">Avg Order Value</span>
                <span className="performance-value">${staff.avgOrder.toFixed(2)}</span>
              </div>
              <span className={`shift-badge ${staff.shift.toLowerCase()}`}>{staff.shift}</span>
            </div>

            <div className="staff-actions">
              <button className="btn-view-details">View Details</button>
              <button className="btn-edit">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
