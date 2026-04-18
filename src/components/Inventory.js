import React, { useState } from 'react';
import { FiSearch, FiAlertTriangle, FiPackage } from 'react-icons/fi';

const inventoryData = [
  { id: 1, name: 'Wireless Headphones', sku: 'WH-001', currentStock: 145, reorderLevel: 50, status: 'In Stock', lastRestocked: 'Apr 10, 2026', lowStock: false },
  { id: 2, name: 'Smart Watch Pro', sku: 'SW-002', currentStock: 67, reorderLevel: 30, status: 'In Stock', lastRestocked: 'Apr 12, 2026', lowStock: false },
  { id: 3, name: 'USB-C Cable 2m', sku: 'UC-003', currentStock: 523, reorderLevel: 100, status: 'In Stock', lastRestocked: 'Apr 5, 2026', lowStock: false },
  { id: 4, name: 'Bluetooth Speaker', sku: 'BS-004', currentStock: 7, reorderLevel: 40, status: 'Critical', lastRestocked: 'Mar 28, 2026', lowStock: true },
  { id: 5, name: 'Phone Case Ultra', sku: 'PC-005', currentStock: 234, reorderLevel: 75, status: 'In Stock', lastRestocked: 'Apr 8, 2026', lowStock: false },
  { id: 6, name: 'Screen Protector', sku: 'SP-006', currentStock: 456, reorderLevel: 150, status: 'In Stock', lastRestocked: 'Apr 6, 2026', lowStock: false },
  { id: 7, name: 'Wireless Mouse', sku: 'WM-007', currentStock: 5, reorderLevel: 50, status: 'Critical', lastRestocked: 'Mar 25, 2026', lowStock: true },
  { id: 8, name: 'Laptop Stand', sku: 'LS-008', currentStock: 89, reorderLevel: 40, status: 'In Stock', lastRestocked: 'Apr 11, 2026', lowStock: false },
  { id: 9, name: 'HDMI Cable 2m', sku: 'HC-009', currentStock: 8, reorderLevel: 30, status: 'Critical', lastRestocked: 'Mar 30, 2026', lowStock: true },
  { id: 10, name: 'Power Bank 20000mAh', sku: 'PB-010', currentStock: 3, reorderLevel: 25, status: 'Critical', lastRestocked: 'Mar 22, 2026', lowStock: true },
];

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInventory = inventoryData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const lowStockCount = inventoryData.filter(item => item.lowStock).length;
  const totalValue = 284592;

  const getStatusBadge = (status) => {
    switch (status) {
      case 'In Stock':
        return <span className="status-badge-inventory in-stock">In Stock</span>;
      case 'Critical':
        return <span className="status-badge-inventory critical">Critical</span>;
      default:
        return <span className="status-badge-inventory">{status}</span>;
    }
  };

  const getStockStyle = (stock, lowStock) => {
    if (lowStock) {
      return { color: '#ef4444', fontWeight: 600 };
    }
    return { color: '#111827' };
  };

  return (
    <div className="inventory">
      <div className="dashboard-header">
        <div>
          <h1>Inventory</h1>
          <p>Monitor and manage stock levels</p>
        </div>
        <button className="btn-stock-adjustment">
          <FiPackage size={18} />
          Stock Adjustment
        </button>
      </div>

      <div className="warning-banner animate-in" style={{ animationDelay: '0.1s' }}>
        <FiAlertTriangle className="warning-icon" />
        <div className="warning-content">
          <strong>Low Stock Warning</strong>
          <p>4 items are below reorder level and need restocking</p>
        </div>
      </div>

      <div className="inventory-search animate-in" style={{ animationDelay: '0.2s' }}>
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search inventory..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="table-container animate-in" style={{ animationDelay: '0.3s' }}>
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>SKU</th>
              <th>Current Stock</th>
              <th>Reorder Level</th>
              <th>Status</th>
              <th>Last Restocked</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInventory.map((item, index) => (
              <tr key={item.id} className={index % 2 === 1 ? 'alternate-row' : ''}>
                <td className="product-name-cell">
                  {item.lowStock && <FiAlertTriangle className="row-warning-icon" />}
                  {item.name}
                </td>
                <td className="sku-cell">{item.sku}</td>
                <td className="stock-cell" style={getStockStyle(item.currentStock, item.lowStock)}>
                  {item.currentStock}
                </td>
                <td className="reorder-cell">{item.reorderLevel}</td>
                <td className="status-cell">{getStatusBadge(item.status)}</td>
                <td className="date-cell">{item.lastRestocked}</td>
                <td className="actions-cell">
                  <button className="btn-adjust">Adjust</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="inventory-summary animate-in" style={{ animationDelay: '0.4s' }}>
        <div className="summary-card">
          <span className="summary-label">Total Items</span>
          <span className="summary-value">{inventoryData.length}</span>
        </div>
        <div className="summary-card">
          <span className="summary-label">Low Stock Items</span>
          <span className="summary-value warning">{lowStockCount}</span>
        </div>
        <div className="summary-card">
          <span className="summary-label">Total Stock Value</span>
          <span className="summary-value">${totalValue.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
