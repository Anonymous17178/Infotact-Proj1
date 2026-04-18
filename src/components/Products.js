import React, { useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';

const productsData = [
  { id: 1, name: 'Smart Watch Pro', sku: 'SW-002', price: 299.99, stock: 67, status: 'Active' },
  { id: 2, name: 'USB-C Cable 2m', sku: 'UC-003', price: 12.99, stock: 523, status: 'Active' },
  { id: 3, name: 'Bluetooth Speaker', sku: 'BS-004', price: 129.99, stock: 7, status: 'Low Stock' },
  { id: 4, name: 'Phone Case Ultra', sku: 'PC-005', price: 24.99, stock: 234, status: 'Active' },
  { id: 5, name: 'Screen Protector', sku: 'SP-006', price: 9.99, stock: 456, status: 'Active' },
  { id: 6, name: 'Wireless Mouse', sku: 'WM-007', price: 45.99, stock: 5, status: 'Low Stock' },
  { id: 7, name: 'Laptop Stand', sku: 'LS-008', price: 79.99, stock: 89, status: 'Active' },
  { id: 8, name: 'HDMI Cable 2m', sku: 'HC-009', price: 15.99, stock: 8, status: 'Low Stock' },
  { id: 9, name: 'Power Bank 20000mAh', sku: 'PB-010', price: 49.99, stock: 3, status: 'Low Stock' },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const getStockStyle = (stock, status) => {
    if (status === 'Low Stock' || stock < 10) {
      return { color: '#ef4444', fontWeight: 600 };
    }
    return { color: '#111827' };
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active':
        return <span className="status-badge-table active">Active</span>;
      case 'Low Stock':
        return <span className="status-badge-table low-stock">Low Stock</span>;
      default:
        return <span className="status-badge-table">{status}</span>;
    }
  };

  return (
    <div className="products">
      <div className="dashboard-header">
        <h1>Products</h1>
        <p>Manage your product inventory</p>
      </div>

      <div className="products-toolbar animate-in" style={{ animationDelay: '0.1s' }}>
        <div className="search-box">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="btn-add-product">
          <FiPlus size={18} />
          Add Product
        </button>
      </div>

      <div className="table-container animate-in" style={{ animationDelay: '0.2s' }}>
        <table className="products-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>SKU</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.map((product, index) => (
              <tr key={product.id} className={index % 2 === 1 ? 'alternate-row' : ''}>
                <td className="product-name-cell">{product.name}</td>
                <td className="sku-cell">{product.sku}</td>
                <td className="price-cell">${product.price.toFixed(2)}</td>
                <td className="stock-cell" style={getStockStyle(product.stock, product.status)}>
                  {product.stock}
                </td>
                <td className="status-cell">{getStatusBadge(product.status)}</td>
                <td className="actions-cell">
                  <button className="btn-edit">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination animate-in" style={{ animationDelay: '0.3s' }}>
        <span className="showing-text">Showing {paginatedProducts.length} of {filteredProducts.length} products</span>
        <div className="pagination-controls">
          <button 
            className="btn-page" 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`btn-page ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button 
            className="btn-page" 
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
