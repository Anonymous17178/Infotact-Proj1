import React, { useState } from 'react';
import { FiSave, FiHome, FiFileText, FiCreditCard } from 'react-icons/fi';

const Toggle = ({ checked, onChange }) => (
  <div 
    className={`ios-toggle ${checked ? 'active' : ''}`}
    onClick={() => onChange({ target: { checked: !checked } })}
  >
    <div className="ios-toggle-knob"></div>
  </div>
);

const Settings = () => {
  const [activeTab, setActiveTab] = useState('store');

  const [storeInfo, setStoreInfo] = useState({
    storeName: 'RetailPOS Main Store',
    storeId: 'STORE-001',
    address: '123 Main Street, Suite 100',
    city: 'San Francisco',
    state: 'CA',
    zip: '94102',
    phone: '(555) 123-4567',
    email: 'contact@retailpos.com',
    openingTime: '09:00',
    closingTime: '21:00',
  });

  const [taxSettings, setTaxSettings] = useState({
    enableSalesTax: true,
    taxRate: '8.50',
    taxId: 'TAX-123456789',
    taxInclusive: false,
  });

  const [paymentMethods, setPaymentMethods] = useState({
    cash: true,
    card: true,
    mobile: true,
    giftCards: false,
  });

  const [cardProcessing, setCardProcessing] = useState({
    merchantId: 'MERCH-789456123',
    terminalId: 'TERM-001',
    contactless: true,
  });

  const tabs = [
    { id: 'store', label: 'Store Info', icon: FiHome },
    { id: 'tax', label: 'Tax Configuration', icon: FiFileText },
    { id: 'payment', label: 'Payment Settings', icon: FiCreditCard },
  ];

  return (
    <div className="settings">
      <div className="settings-header">
        <div>
          <h1>Settings</h1>
          <p>Manage your store configuration</p>
        </div>
      </div>

      <div className="settings-tabs animate-in" style={{ animationDelay: '0.1s' }}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              className={`settings-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="settings-content">
        {activeTab === 'store' && (
          <>
            <div className="settings-card animate-in" style={{ animationDelay: '0.2s' }}>
              <div className="settings-card-header">
                <h3>Store Information</h3>
                <p>Basic details about your retail store</p>
              </div>
              
              <div className="form-row store-id-row">
                <div className="form-group store-name-group">
                  <label>Store Name</label>
                  <input
                    type="text"
                    value={storeInfo.storeName}
                    onChange={(e) => setStoreInfo({...storeInfo, storeName: e.target.value})}
                  />
                </div>
                <div className="store-id-display">
                  <label>Store ID</label>
                  <span className="store-id-value">{storeInfo.storeId}</span>
                </div>
              </div>

              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  value={storeInfo.address}
                  onChange={(e) => setStoreInfo({...storeInfo, address: e.target.value})}
                />
              </div>

              <div className="form-row three-col">
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    value={storeInfo.city}
                    onChange={(e) => setStoreInfo({...storeInfo, city: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input
                    type="text"
                    value={storeInfo.state}
                    onChange={(e) => setStoreInfo({...storeInfo, state: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>ZIP Code</label>
                  <input
                    type="text"
                    value={storeInfo.zip}
                    onChange={(e) => setStoreInfo({...storeInfo, zip: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-row two-col">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    value={storeInfo.phone}
                    onChange={(e) => setStoreInfo({...storeInfo, phone: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={storeInfo.email}
                    onChange={(e) => setStoreInfo({...storeInfo, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="settings-actions">
                <button className="btn-save">
                  <FiSave size={16} />
                  Save Changes
                </button>
              </div>
            </div>

            <div className="settings-card animate-in" style={{ animationDelay: '0.3s' }}>
              <div className="settings-card-header">
                <h3>Business Hours</h3>
                <p>Set your operating hours</p>
              </div>

              <div className="form-row two-col">
                <div className="form-group">
                  <label>Opening Time</label>
                  <input
                    type="text"
                    value={storeInfo.openingTime}
                    onChange={(e) => setStoreInfo({...storeInfo, openingTime: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Closing Time</label>
                  <input
                    type="text"
                    value={storeInfo.closingTime}
                    onChange={(e) => setStoreInfo({...storeInfo, closingTime: e.target.value})}
                  />
                </div>
              </div>

              <div className="settings-actions">
                <button className="btn-save">
                  <FiSave size={16} />
                  Save Changes
                </button>
              </div>
            </div>
          </>
        )}

        {activeTab === 'tax' && (
          <div className="settings-card animate-in" style={{ animationDelay: '0.2s' }}>
            <div className="settings-card-header">
              <h3>Tax Settings</h3>
              <p>Configure sales tax for your location</p>
            </div>

            <div className="toggle-row">
              <div className="toggle-info">
                <span className="toggle-title">Enable Sales Tax</span>
                <span className="toggle-description">Apply tax to all transactions</span>
              </div>
              <Toggle 
                checked={taxSettings.enableSalesTax} 
                onChange={(e) => setTaxSettings({...taxSettings, enableSalesTax: e.target.checked})}
              />
            </div>

            <div className="form-group">
              <label>Tax Rate (%)</label>
              <input
                type="text"
                value={taxSettings.taxRate}
                onChange={(e) => setTaxSettings({...taxSettings, taxRate: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Tax ID Number</label>
              <input
                type="text"
                value={taxSettings.taxId}
                onChange={(e) => setTaxSettings({...taxSettings, taxId: e.target.value})}
              />
            </div>

            <div className="toggle-row">
              <div className="toggle-info">
                <span className="toggle-title">Tax Inclusive Pricing</span>
                <span className="toggle-description">Display prices with tax included</span>
              </div>
              <Toggle 
                checked={taxSettings.taxInclusive} 
                onChange={(e) => setTaxSettings({...taxSettings, taxInclusive: e.target.checked})}
              />
            </div>

            <div className="settings-actions">
              <button className="btn-save">
                <FiSave size={16} />
                Save Changes
              </button>
            </div>
          </div>
        )}

        {activeTab === 'payment' && (
          <>
            <div className="settings-card animate-in" style={{ animationDelay: '0.2s' }}>
              <div className="settings-card-header">
                <h3>Payment Methods</h3>
                <p>Enable or disable payment options</p>
              </div>

              <div className="payment-method-row">
                <div className="payment-method-info">
                  <span className="payment-method-title">Cash Payments</span>
                  <span className="payment-method-desc">Accept cash at checkout</span>
                </div>
                <Toggle 
                  checked={paymentMethods.cash} 
                  onChange={(e) => setPaymentMethods({...paymentMethods, cash: e.target.checked})}
                />
              </div>

              <div className="payment-method-row">
                <div className="payment-method-info">
                  <span className="payment-method-title">Card Payments</span>
                  <span className="payment-method-desc">Visa, Mastercard, Amex</span>
                </div>
                <Toggle 
                  checked={paymentMethods.card} 
                  onChange={(e) => setPaymentMethods({...paymentMethods, card: e.target.checked})}
                />
              </div>

              <div className="payment-method-row">
                <div className="payment-method-info">
                  <span className="payment-method-title">Mobile Payments</span>
                  <span className="payment-method-desc">Apple Pay, Google Pay</span>
                </div>
                <Toggle 
                  checked={paymentMethods.mobile} 
                  onChange={(e) => setPaymentMethods({...paymentMethods, mobile: e.target.checked})}
                />
              </div>

              <div className="payment-method-row">
                <div className="payment-method-info">
                  <span className="payment-method-title">Gift Cards</span>
                  <span className="payment-method-desc">Accept store gift cards</span>
                </div>
                <Toggle 
                  checked={paymentMethods.giftCards} 
                  onChange={(e) => setPaymentMethods({...paymentMethods, giftCards: e.target.checked})}
                />
              </div>
            </div>

            <div className="settings-card animate-in" style={{ animationDelay: '0.3s' }}>
              <div className="settings-card-header">
                <h3>Card Processing</h3>
                <p>Configure your payment processor</p>
              </div>

              <div className="form-group">
                <label>Merchant ID</label>
                <input
                  type="text"
                  value={cardProcessing.merchantId}
                  onChange={(e) => setCardProcessing({...cardProcessing, merchantId: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Terminal ID</label>
                <input
                  type="text"
                  value={cardProcessing.terminalId}
                  onChange={(e) => setCardProcessing({...cardProcessing, terminalId: e.target.value})}
                />
              </div>

              <div className="toggle-row">
                <div className="toggle-info">
                  <span className="toggle-title">Contactless Payments</span>
                  <span className="toggle-description">Enable tap to pay</span>
                </div>
                <Toggle 
                  checked={cardProcessing.contactless} 
                  onChange={(e) => setCardProcessing({...cardProcessing, contactless: e.target.checked})}
                />
              </div>

              <div className="settings-actions">
                <button className="btn-save">
                  <FiSave size={16} />
                  Save Changes
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Settings;
