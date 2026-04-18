import React, { useState } from 'react';
import { FiSearch, FiFilter, FiDownload, FiEye, FiX, FiChevronDown } from 'react-icons/fi';

const ordersData = [
  { id: 'ORD-1001', customer: 'John Smith', date: 'Apr 16, 2026', time: '10:24 AM', items: 3, amount: 234.97, payment: 'Card', status: 'Completed', cashier: 'Alice Johnson' },
  { id: 'ORD-1002', customer: 'Emma Wilson', date: 'Apr 16, 2026', time: '10:18 AM', items: 1, amount: 299.99, payment: 'Cash', status: 'Completed', cashier: 'Bob Chen' },
  { id: 'ORD-1003', customer: 'Michael Brown', date: 'Apr 16, 2026', time: '10:05 AM', items: 5, amount: 142.45, payment: 'Mobile', status: 'Completed', cashier: 'Alice Johnson' },
  { id: 'ORD-1004', customer: 'Sarah Davis', date: 'Apr 16, 2026', time: '09:52 AM', items: 2, amount: 89.98, payment: 'Card', status: 'Completed', cashier: 'Carol White' },
  { id: 'ORD-1005', customer: 'David Lee', date: 'Apr 16, 2026', time: '09:38 AM', items: 4, amount: 315.96, payment: 'Cash', status: 'Completed', cashier: 'Bob Chen' },
  { id: 'ORD-1006', customer: 'Lisa Anderson', date: 'Apr 16, 2026', time: '09:21 AM', items: 1, amount: 129.99, payment: 'Card', status: 'Refunded', cashier: 'Alice Johnson' },
  { id: 'ORD-1007', customer: 'James Taylor', date: 'Apr 16, 2026', time: '09:15 AM', items: 6, amount: 456.93, payment: 'Mobile', status: 'Completed', cashier: 'Carol White' },
  { id: 'ORD-1008', customer: 'Emily Martinez', date: 'Apr 16, 2026', time: '08:47 AM', items: 2, amount: 54.98, payment: 'Cash', status: 'Completed', cashier: 'Bob Chen' },
];

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [paymentFilter, setPaymentFilter] = useState('All Payments');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredOrders = ordersData.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPayment = paymentFilter === 'All Payments' || order.payment === paymentFilter;
    return matchesSearch && matchesPayment;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return <span className="order-status completed">Completed</span>;
      case 'Refunded':
        return <span className="order-status refunded">Refunded</span>;
      case 'Pending':
        return <span className="order-status pending">Pending</span>;
      default:
        return <span className="order-status">{status}</span>;
    }
  };

  const getPaymentBadge = (payment) => {
    return <span className="payment-badge">{payment}</span>;
  };

  return (
    <div className="orders">
      <div className="orders-header">
        <div>
          <h1>Orders</h1>
          <p>View and manage all orders</p>
        </div>
      </div>

      <div className="orders-toolbar animate-in" style={{ animationDelay: '0.1s' }}>
        <div className="search-box">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by order ID or customer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="payment-filter">
          <button className="filter-btn" onClick={() => setShowDropdown(!showDropdown)}>
            <FiFilter size={16} />
            {paymentFilter}
            <FiChevronDown size={16} />
          </button>
          {showDropdown && (
            <div className="filter-dropdown">
              {['All Payments', 'Card', 'Cash', 'Mobile'].map(method => (
                <div
                  key={method}
                  className="filter-option"
                  onClick={() => {
                    setPaymentFilter(method);
                    setShowDropdown(false);
                  }}
                >
                  {method}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="orders-table-container animate-in" style={{ animationDelay: '0.2s' }}>
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Cashier</th>
              <th>Date & Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td className="order-id">{order.id}</td>
                <td className="customer-name">{order.customer}</td>
                <td className="items-count">{order.items}</td>
                <td className="amount">${order.amount.toFixed(2)}</td>
                <td className="payment-cell">{getPaymentBadge(order.payment)}</td>
                <td className="cashier-name">{order.cashier}</td>
                <td className="date-time">
                  <div>{order.date}</div>
                  <div className="time">{order.time}</div>
                </td>
                <td className="status-cell">{getStatusBadge(order.status)}</td>
                <td className="actions-cell">
                  <button className="btn-view-order" onClick={() => setSelectedOrder(order)}>
                    <FiEye size={16} />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="orders-pagination animate-in" style={{ animationDelay: '0.3s' }}>
        <span className="showing-text">Showing {filteredOrders.length} of 8 orders</span>
        <div className="pagination-controls">
          <button className="btn-page" disabled>Previous</button>
          <button className="btn-page active">1</button>
          <button className="btn-page">2</button>
          <button className="btn-page">Next</button>
        </div>
      </div>

      {selectedOrder && (
        <div className="modal-overlay animate-in" onClick={() => setSelectedOrder(null)}>
          <div className="order-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3>Order Details</h3>
                <p className="order-id-sub">{selectedOrder.id}</p>
              </div>
              <button className="btn-close" onClick={() => setSelectedOrder(null)}>
                <FiX size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="info-section">
                <h4>Customer Information</h4>
                <div className="info-row">
                  <span>Name:</span>
                  <span>{selectedOrder.customer}</span>
                </div>
                <div className="info-row">
                  <span>Order Date:</span>
                  <span>{selectedOrder.date}, {selectedOrder.time}</span>
                </div>
              </div>
              <div className="info-section">
                <h4>Payment Details</h4>
                <div className="info-row">
                  <span>Method:</span>
                  <span>{selectedOrder.payment}</span>
                </div>
                <div className="info-row">
                  <span>Cashier:</span>
                  <span>{selectedOrder.cashier}</span>
                </div>
                <div className="info-row">
                  <span>Status:</span>
                  <span>{getStatusBadge(selectedOrder.status)}</span>
                </div>
              </div>
              <div className="info-section">
                <h4>Order Summary</h4>
                <div className="info-row">
                  <span>Items ({selectedOrder.items}):</span>
                  <span>${selectedOrder.amount.toFixed(2)}</span>
                </div>
                <div className="info-row total-row">
                  <span>Total:</span>
                  <span className="total-amount">${selectedOrder.amount.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-print">Print Receipt</button>
              <button className="btn-refund">Refund</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
