import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import POSMonitoring from './components/POSMonitoring';
import Products from './components/Products';
import Inventory from './components/Inventory';
import Orders from './components/Orders';
import Customers from './components/Customers';
import Payments from './components/Payments';
import Reports from './components/Reports';
import Settings from './components/Settings';
import Staff from './components/Staff';

function App() {
  const [activeView, setActiveView] = useState('Dashboard');

  const renderContent = () => {
    switch (activeView) {
      case 'Dashboard':
        return <Dashboard />;
      case 'POS':
        return <POSMonitoring />;
      case 'Products':
        return <Products />;
      case 'Inventory':
        return <Inventory />;
      case 'Orders':
        return <Orders />;
      case 'Customers':
        return <Customers />;
      case 'Payments':
        return <Payments />;
      case 'Reports':
        return <Reports />;
      case 'Settings':
        return <Settings />;
      case 'Staff':
        return <Staff />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Sidebar activeItem={activeView} onItemClick={setActiveView} />
      <div className="main-content">
        <Header />
        <main className="content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
