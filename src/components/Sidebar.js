import React from 'react';
import { 
  FiGrid, 
  FiMonitor, 
  FiBox, 
  FiPackage, 
  FiShoppingCart, 
  FiUsers, 
  FiCreditCard, 
  FiUser, 
  FiBarChart2, 
  FiSettings 
} from 'react-icons/fi';
import logoImage from '../Assets/image-removebg-preview.png';

const Sidebar = ({ activeItem = 'Dashboard', onItemClick }) => {
  const menuItems = [
    { id: 'Dashboard', label: 'Dashboard', icon: FiGrid },
    { id: 'POS', label: 'POS Monitoring', icon: FiMonitor },
    { id: 'Products', label: 'Products', icon: FiBox },
    { id: 'Inventory', label: 'Inventory', icon: FiPackage },
    { id: 'Orders', label: 'Orders', icon: FiShoppingCart },
    { id: 'Customers', label: 'Customers', icon: FiUsers },
    { id: 'Payments', label: 'Payments', icon: FiCreditCard },
    { id: 'Staff', label: 'Staff', icon: FiUser },
    { id: 'Reports', label: 'Reports', icon: FiBarChart2 },
    { id: 'Settings', label: 'Settings', icon: FiSettings },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={logoImage} alt="Omni Retail" className="logo-image" />
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                onItemClick && onItemClick(item.id);
              }}
              className={`sidebar-item sidebar-animate ${isActive ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Icon className="sidebar-icon" />
              <span className="sidebar-label">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
