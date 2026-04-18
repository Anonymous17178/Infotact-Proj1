import React from 'react';
import { 
  FiDollarSign, 
  FiShoppingCart, 
  FiTrendingUp, 
  FiAlertTriangle 
} from 'react-icons/fi';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const salesData = [
  { name: 'Mon', value: 11000 },
  { name: 'Tue', value: 14500 },
  { name: 'Wed', value: 13000 },
  { name: 'Thu', value: 18500 },
  { name: 'Fri', value: 16500 },
  { name: 'Sat', value: 22000 },
  { name: 'Sun', value: 20000 },
];

const paymentData = [
  { name: 'Cash', value: 45, color: '#3b82f6' },
  { name: 'Card', value: 35, color: '#10b981' },
  { name: 'Digital', value: 20, color: '#8b5cf6' },
];

const topProducts = [
  { name: 'Wireless Headphones', units: 234, revenue: 12480 },
  { name: 'Smart Watch Pro', units: 189, revenue: 28350 },
  { name: 'USB-C Cable', units: 456, revenue: 4560 },
  { name: 'Phone Case Ultra', units: 298, revenue: 5960 },
  { name: 'Screen Protector', units: 387, revenue: 3870 },
];

const lowStockAlerts = [
  { name: 'Wireless Mouse', sku: 'WM-001', left: 5, reorder: 50 },
  { name: 'HDMI Cable 2m', sku: 'HC-002', left: 8, reorder: 30 },
  { name: 'Power Bank 20000mAh', sku: 'PB-003', left: 3, reorder: 25 },
  { name: 'Bluetooth Speaker', sku: 'BS-004', left: 7, reorder: 40 },
];

const StatCard = ({ title, value, change, icon: Icon, iconBg, changePositive, delay }) => (
  <div className="stat-card animate-in" style={{ animationDelay: `${delay * 0.1}s` }}>
    <div className="stat-content">
      <p className="stat-title">{title}</p>
      <h3 className="stat-value">{value}</h3>
      <p className={`stat-change ${changePositive ? 'positive' : 'negative'}`}>
        {change}
      </p>
    </div>
    <div className="stat-icon" style={{ backgroundColor: iconBg }}>
      <Icon size={20} />
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Overview of your retail performance</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <StatCard
          title="Total Sales"
          value="$98,425"
          change="+12.5% from last week"
          icon={FiDollarSign}
          iconBg="#dcfce7"
          changePositive={true}
          delay={0}
        />
        <StatCard
          title="Orders"
          value="1,284"
          change="+8.2% from last week"
          icon={FiShoppingCart}
          iconBg="#dbeafe"
          changePositive={true}
          delay={1}
        />
        <StatCard
          title="Avg Order Value"
          value="$76.68"
          change="+3.1% from last week"
          icon={FiTrendingUp}
          iconBg="#f3e8ff"
          changePositive={true}
          delay={2}
        />
        <StatCard
          title="Low Stock Items"
          value="12"
          change="4 critical"
          icon={FiAlertTriangle}
          iconBg="#ffedd5"
          changePositive={false}
          delay={3}
        />
      </div>

      {/* Charts Row */}
      <div className="charts-grid">
        <div className="chart-card animate-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="chart-title">Sales Trend</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" hide />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                  tickFormatter={(value) => value.toLocaleString()}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card animate-in" style={{ animationDelay: '0.5s' }}>
          <h3 className="chart-title">Payment Methods</h3>
          <div className="chart-container pie-container">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={paymentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {paymentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="pie-legend">
              {paymentData.map((item) => (
                <div key={item.name} className="legend-item">
                  <span className="legend-dot" style={{ backgroundColor: item.color }}></span>
                  <span className="legend-label">{item.name} {item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lists Row */}
      <div className="lists-grid">
        <div className="list-card animate-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="list-title">Top Selling Products</h3>
          <div className="product-list">
            {topProducts.map((product, index) => (
              <div key={index} className="product-item">
                <div className="product-info">
                  <p className="product-name">{product.name}</p>
                  <p className="product-units">{product.units.toLocaleString()} units sold</p>
                </div>
                <span className="product-revenue">${product.revenue.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="list-card animate-in" style={{ animationDelay: '0.7s' }}>
          <div className="list-header">
            <h3 className="list-title">Low Stock Alerts</h3>
            <span className="alert-badge">4 Items</span>
          </div>
          <div className="alert-list">
            {lowStockAlerts.map((item, index) => (
              <div key={index} className="alert-item">
                <div className="alert-info">
                  <p className="alert-name">{item.name}</p>
                  <p className="alert-sku">SKU: {item.sku}</p>
                </div>
                <div className="alert-stock">
                  <span className="stock-left">{item.left} left</span>
                  <span className="reorder-point">Reorder: {item.reorder}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
