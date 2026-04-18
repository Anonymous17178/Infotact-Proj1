import React from 'react';
import { FiMonitor, FiCheckCircle, FiActivity, FiTrendingUp, FiCheck } from 'react-icons/fi';

const terminals = [
  {
    id: 1,
    name: 'Terminal 1',
    code: 'TERM-001',
    status: 'Active',
    cashier: 'Alice Johnson',
    currentOrder: 'ORD-1024',
    amount: 234.97,
    transactionsToday: 42,
    uptime: '99.8%',
    lastActivity: '2 min ago',
  },
  {
    id: 2,
    name: 'Terminal 2',
    code: 'TERM-002',
    status: 'Active',
    cashier: 'Bob Chen',
    currentOrder: 'ORD-1025',
    amount: 89.50,
    transactionsToday: 38,
    uptime: '100%',
    lastActivity: 'Just now',
  },
  {
    id: 3,
    name: 'Terminal 3',
    code: 'TERM-003',
    status: 'Idle',
    cashier: 'Carol White',
    currentOrder: null,
    amount: null,
    transactionsToday: 35,
    uptime: '98.5%',
    lastActivity: '5 min ago',
  },
  {
    id: 4,
    name: 'Terminal 4',
    code: 'TERM-004',
    status: 'Offline',
    cashier: 'Not assigned',
    currentOrder: null,
    amount: null,
    transactionsToday: 0,
    uptime: '0%',
    lastActivity: '3 hours ago',
  },
];

const systemMetrics = [
  { name: 'Network Latency', value: '12ms', icon: FiCheckCircle, status: 'good' },
  { name: 'Database Response', value: '45ms', icon: FiCheckCircle, status: 'good' },
  { name: 'Print Queue', value: '3 jobs', icon: FiCheckCircle, status: 'good' },
  { name: 'Cash Drawer Status', value: 'All OK', icon: FiCheckCircle, status: 'good' },
];

const StatCard = ({ title, value, icon: Icon, color, delay }) => (
  <div className="stat-card animate-in" style={{ animationDelay: `${delay * 0.1}s` }}>
    <div className="stat-content">
      <p className="stat-title">{title}</p>
      <h3 className="stat-value" style={{ color: color || '#111827' }}>{value}</h3>
    </div>
    <div className="stat-icon" style={{ backgroundColor: color ? `${color}15` : '#dcfce7', color: color || '#10b981' }}>
      <Icon size={20} />
    </div>
  </div>
);

const TerminalCard = ({ terminal }) => {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active':
        return <span className="status-badge active">Active</span>;
      case 'Idle':
        return <span className="status-badge idle">Idle</span>;
      case 'Offline':
        return <span className="status-badge offline">Offline</span>;
      default:
        return <span className="status-badge">{status}</span>;
    }
  };

  return (
    <div className="terminal-card animate-in" style={{ animationDelay: `${terminal.id * 0.1}s` }}>
      <div className="terminal-header">
        <div>
          <h4 className="terminal-name">{terminal.name}</h4>
          <p className="terminal-code">{terminal.code}</p>
        </div>
        {getStatusBadge(terminal.status)}
      </div>

      <div className="terminal-info">
        <div className="info-row">
          <span className="info-label">Cashier:</span>
          <span className="info-value">{terminal.cashier}</span>
        </div>

        {terminal.currentOrder && (
          <div className="current-order-box">
            <div className="info-row">
              <span className="info-label">Current Order:</span>
              <span className="order-id">{terminal.currentOrder}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Amount:</span>
              <span className="amount-value">${terminal.amount.toFixed(2)}</span>
            </div>
          </div>
        )}

        <div className="info-row">
          <span className="info-label">Transactions Today:</span>
          <span className="info-value">{terminal.transactionsToday}</span>
        </div>

        <div className="uptime-row">
          <span className="info-label">Uptime:</span>
          <div className="uptime-bar-container">
            <div className="uptime-bar" style={{ width: terminal.uptime }}></div>
            <span className="uptime-value">{terminal.uptime}</span>
          </div>
        </div>

        <div className="info-row">
          <span className="info-label">Last Activity:</span>
          <span className="info-value">{terminal.lastActivity}</span>
        </div>
      </div>

      <div className="terminal-actions">
        <button className="btn-view">View Details</button>
        {terminal.status === 'Offline' ? (
          <button className="btn-restart">Restart</button>
        ) : (
          <button className="btn-manage">Manage</button>
        )}
      </div>
    </div>
  );
};

const POSMonitoring = () => {
  return (
    <div className="pos-monitoring">
      <div className="dashboard-header">
        <h1>POS Monitoring</h1>
        <p>Real-time monitoring of POS terminals</p>
      </div>

      <div className="stats-grid">
        <StatCard title="Active Terminals" value="2" icon={FiMonitor} color="#10b981" delay={0} />
        <StatCard title="Total Terminals" value="4" icon={FiActivity} color="#6b7280" delay={1} />
        <StatCard title="Transactions Today" value="115" icon={FiTrendingUp} color="#3b82f6" delay={2} />
        <StatCard title="System Health" value="Good" icon={FiCheckCircle} color="#10b981" delay={3} />
      </div>

      <h3 className="section-title animate-in" style={{ animationDelay: '0.4s' }}>Terminal Status</h3>
      <div className="terminals-grid">
        {terminals.map((terminal) => (
          <TerminalCard key={terminal.id} terminal={terminal} />
        ))}
      </div>

      <h3 className="section-title animate-in" style={{ animationDelay: '0.8s' }}>System Metrics</h3>
      <div className="system-metrics">
        {systemMetrics.map((metric, index) => (
          <div key={index} className="metric-box animate-in" style={{ animationDelay: `${0.9 + index * 0.1}s` }}>
            <div className="metric-header">
              <span className="metric-name">{metric.name}</span>
              <metric.icon className="metric-icon" size={18} />
            </div>
            <span className="metric-value">{metric.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default POSMonitoring;
