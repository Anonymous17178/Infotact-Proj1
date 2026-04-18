import React, { useState } from 'react';
import { FiSearch, FiCheckCircle, FiXCircle, FiClock, FiCreditCard } from 'react-icons/fi';

const transactionsData = [
  { id: 'TXN-5421', orderId: 'ORD-1001', customer: 'John Smith', date: 'Apr 16, 2026', time: '10:24 AM', amount: 234.97, method: 'Card', reference: '4532...8901', status: 'Success' },
  { id: 'TXN-5420', orderId: 'ORD-1002', customer: 'Emma Wilson', date: 'Apr 16, 2026', time: '10:18 AM', amount: 299.99, method: 'Cash', reference: '-', status: 'Success' },
  { id: 'TXN-5419', orderId: 'ORD-1003', customer: 'Michael Brown', date: 'Apr 16, 2026', time: '10:05 AM', amount: 142.45, method: 'Mobile', reference: 'GPAY-78923', status: 'Success' },
  { id: 'TXN-5418', orderId: 'ORD-1004', customer: 'Sarah Davis', date: 'Apr 16, 2026', time: '09:52 AM', amount: 89.98, method: 'Card', reference: '5132...4567', status: 'Failed' },
  { id: 'TXN-5417', orderId: 'ORD-1005', customer: 'David Lee', date: 'Apr 16, 2026', time: '09:38 AM', amount: 315.96, method: 'Cash', reference: '-', status: 'Success' },
  { id: 'TXN-5416', orderId: 'ORD-1006', customer: 'Lisa Anderson', date: 'Apr 16, 2026', time: '09:21 AM', amount: 129.99, method: 'Card', reference: '4532...3421', status: 'Refunded' },
  { id: 'TXN-5415', orderId: 'ORD-1007', customer: 'James Taylor', date: 'Apr 16, 2026', time: '09:15 AM', amount: 456.93, method: 'Mobile', reference: 'APAY-12345', status: 'Success' },
  { id: 'TXN-5414', orderId: 'ORD-1008', customer: 'Emily Martinez', date: 'Apr 16, 2026', time: '08:47 AM', amount: 54.98, method: 'Cash', reference: '-', status: 'Success' },
  { id: 'TXN-5413', orderId: 'ORD-1009', customer: 'Robert Johnson', date: 'Apr 16, 2026', time: '08:30 AM', amount: 189.99, method: 'Card', reference: '4916...7890', status: 'Pending' },
];

const SimpleStatCard = ({ title, value, color }) => (
  <div className="simple-stat-card">
    <p className="stat-title">{title}</p>
    <h3 className="stat-value" style={{ color: color }}>{value}</h3>
  </div>
);

const StatCard = ({ title, value, change, icon: Icon, iconBg, changePositive, delay }) => (
  <div className="stat-card animate-in" style={{ animationDelay: `${delay * 0.1}s` }}>
    <div className="stat-content">{title}</div>
    <h3 className="stat-value">{value}</h3>
    <div className="stat-change" style={{ color: changePositive ? '#10b981' : '#ef4444' }}>{change}</div>
    <div className="stat-icon" style={{ backgroundColor: iconBg }}>
      <Icon size={20} />
    </div>
  </div>
);

const Payments = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = transactionsData.filter(transaction =>
    transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Success':
        return (
          <span className="payment-status success">
            <FiCheckCircle size={14} />
            Success
          </span>
        );
      case 'Failed':
        return (
          <span className="payment-status failed">
            <FiXCircle size={14} />
            Failed
          </span>
        );
      case 'Pending':
        return (
          <span className="payment-status pending">
            <FiClock size={14} />
            Pending
          </span>
        );
      case 'Refunded':
        return <span className="payment-status refunded">Refunded</span>;
      default:
        return <span className="payment-status">{status}</span>;
    }
  };

  const successCount = transactionsData.filter(t => t.status === 'Success').length;
  const failedCount = transactionsData.filter(t => t.status === 'Failed').length;
  const pendingCount = transactionsData.filter(t => t.status === 'Pending').length;

  return (
    <div className="payments animate-in">
      <div className="payments-header animate-in" style={{ animationDelay: '0.2s' }}>
        <div>
          <h1>Payments</h1>
          <p>Transaction history and payment records</p>
        </div>
      </div>

      <div className="stats-grid animate-in" style={{ animationDelay: '0.3s' }}>
        <StatCard
          title="Total Transactions"
          value={transactionsData.length}
          change="+156 today"
          icon={FiCreditCard}
          iconBg="#dbeafe"
          changePositive={true}
          delay={0}
        />
        <StatCard
          title="Success Rate"
          value="98.5%"
          change="+0.3%"
          icon={FiCheckCircle}
          iconBg="#dcfce7"
          changePositive={true}
          delay={1}
        />
        <StatCard
          title="Failed"
          value={failedCount}
          change="-5 today"
          icon={FiXCircle}
          iconBg="#fee2e2"
          changePositive={false}
          delay={2}
        />
        <StatCard
          title="Pending"
          value={pendingCount}
          change="2 urgent"
          icon={FiClock}
          iconBg="#ffedd5"
          changePositive={false}
          delay={3}
        />
      </div>

      <div className="payments-toolbar animate-in" style={{ animationDelay: '0.4s' }}>
        <div className="search-box">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="table-container animate-in" style={{ animationDelay: '0.5s' }}>
        <table className="payments-table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Reference</th>
              <th>Date & Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction, index) => (
              <tr key={transaction.id} className={index % 2 === 1 ? 'alternate-row' : ''}>
                <td className="transaction-id">{transaction.id}</td>
                <td className="order-id-link">{transaction.orderId}</td>
                <td className="customer-name">{transaction.customer}</td>
                <td className="amount-cell">${transaction.amount.toFixed(2)}</td>
                <td className="method-cell">{transaction.method}</td>
                <td className="reference-cell">{transaction.reference}</td>
                <td className="date-time">
                  <div>{transaction.date}</div>
                  <div className="time">{transaction.time}</div>
                </td>
                <td className="status-cell">{getStatusBadge(transaction.status)}</td>
                <td className="actions-cell">
                  <button className="btn-details">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="payments-pagination animate-in" style={{ animationDelay: '0.6s' }}>
        <span className="showing-text">Showing {filteredTransactions.length} of {transactionsData.length} transactions</span>
        <div className="pagination-controls">
          <button className="btn-page" disabled>Previous</button>
          <button className="btn-page active">1</button>
          <button className="btn-page">2</button>
          <button className="btn-page">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Payments;
