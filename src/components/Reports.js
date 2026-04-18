import React, { useState } from 'react';
import { FiDownload, FiDollarSign, FiShoppingCart, FiTrendingUp, FiUsers } from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const categoryData = [
  { name: 'Accessories', value: 45000 },
  { name: 'Audio', value: 32000 },
  { name: 'Mobile', value: 28000 },
  { name: 'Computing', value: 15000 },
];

const weeklyData = [
  { week: 'Week 1', revenue: 24000, orders: 180 },
  { week: 'Week 2', revenue: 31000, orders: 220 },
  { week: 'Week 3', revenue: 28000, orders: 195 },
  { week: 'Week 4', revenue: 35000, orders: 245 },
];

const hourlyData = [
  { hour: '9 AM', sales: 1200 },
  { hour: '10 AM', sales: 2400 },
  { hour: '11 AM', sales: 3100 },
  { hour: '12 PM', sales: 4200 },
  { hour: '1 PM', sales: 3900 },
  { hour: '2 PM', sales: 3400 },
  { hour: '3 PM', sales: 3900 },
  { hour: '4 PM', sales: 4500 },
  { hour: '5 PM', sales: 5200 },
  { hour: '6 PM', sales: 3900 },
];

const StatCard = ({ title, value, change, icon: Icon, color, iconBg, delay }) => (
  <div className="stat-card animate-in" style={{ animationDelay: `${delay * 0.1}s` }}>
    <div className="stat-content">
      <p className="stat-title">{title}</p>
      <h3 className="stat-value">{value}</h3>
      {change && <p className="stat-change positive">{change}</p>}
    </div>
    <div className="stat-icon" style={{ backgroundColor: iconBg, color: color }}>
      <Icon size={20} />
    </div>
  </div>
);

const Reports = () => {
  return (
    <div className="reports">
      <div className="reports-header">
        <div>
          <h1>Reports</h1>
          <p>Analytics and business insights</p>
        </div>
        <div className="reports-actions">
          <button className="btn-export-outline">
            <FiDownload size={16} />
            Export PDF
          </button>
          <button className="btn-export-primary">
            <FiDownload size={16} />
            Export Excel
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard 
          title="Total Revenue (April)" 
          value="$111,300" 
          change="+15.3% from March" 
          icon={FiDollarSign} 
          color="#16a34a"
          iconBg="#dcfce7"
          delay={0}
        />
        <StatCard 
          title="Total Orders" 
          value="1,532" 
          change="+12.8% from March" 
          icon={FiShoppingCart} 
          color="#3b82f6"
          iconBg="#dbeafe"
          delay={1}
        />
        <StatCard 
          title="Avg Order Value" 
          value="$72.65" 
          change="+2.3% from March" 
          icon={FiTrendingUp} 
          color="#a855f7"
          iconBg="#f3e8ff"
          delay={2}
        />
        <StatCard 
          title="New Customers" 
          value="248" 
          change="+18.5% from March" 
          icon={FiUsers} 
          color="#f97316"
          iconBg="#ffedd5"
          delay={3}
        />
      </div>

      <div className="charts-grid">
        <div className="chart-card animate-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="chart-title">Sales by Category</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Sales']}
                />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card animate-in" style={{ animationDelay: '0.5s' }}>
          <h3 className="chart-title">Weekly Performance</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="week" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6', r: 4 }} name="revenue" />
                <Line type="monotone" dataKey="orders" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981', r: 4 }} name="orders" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="hourly-chart-card animate-in" style={{ animationDelay: '0.6s' }}>
        <h3 className="chart-title">Hourly Sales Pattern (Today)</h3>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
              <XAxis dataKey="hour" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                formatter={(value) => [`$${value.toLocaleString()}`, 'Sales']}
              />
              <Bar dataKey="sales" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="insight-cards">
        <div className="insight-card animate-in" style={{ animationDelay: '0.7s' }}>
          <h4 className="insight-title">Top Payment Method</h4>
          <p className="insight-value">Card</p>
          <p className="insight-subtitle">45% of all transactions</p>
          <span className="insight-trend positive">+5% from last month</span>
        </div>
        <div className="insight-card animate-in" style={{ animationDelay: '0.8s' }}>
          <h4 className="insight-title">Peak Sales Hour</h4>
          <p className="insight-value">5 PM</p>
          <p className="insight-subtitle">$5,200 average sales</p>
          <span className="insight-note">Evening rush hour</span>
        </div>
        <div className="insight-card animate-in" style={{ animationDelay: '0.9s' }}>
          <h4 className="insight-title">Return Rate</h4>
          <p className="insight-value">2.4%</p>
          <p className="insight-subtitle">37 returns this month</p>
          <span className="insight-trend positive">-0.3% from last month</span>
        </div>
      </div>
    </div>
  );
};

export default Reports;
