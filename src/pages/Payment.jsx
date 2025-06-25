


import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/Payment.scss';

const allPlans = [
  { id: 'basic', name: 'Basic', price: '199', currency: '₹', frequency: '/mo' },
  { id: 'standard', name: 'Standard', price: '399', currency: '₹', frequency: '/mo' },
  { id: 'premium', name: 'Premium', price: '599', currency: '₹', frequency: '/mo' },
];

const PaymentPage = () => {
  const location = useLocation();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({ name: '', number: '', expiry: '', cvv: '' });
  const [upiId, setUpiId] = useState('');

  useEffect(() => {
    if (location.state?.selectedPlan) {
      setSelectedPlan(location.state.selectedPlan.id);
    }
  }, [location]);

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    let val = value;
    if (name === 'name') val = val.replace(/[^a-zA-Z\s]/g, '');
    else if (name === 'number') val = val.replace(/\D/g, '').slice(0, 16);
    else if (name === 'expiry') {
      val = val.replace(/\D/g, '').slice(0, 4);
      if (val.length > 2) val = `${val.slice(0, 2)}/${val.slice(2)}`;
    } else if (name === 'cvv') val = val.replace(/\D/g, '').slice(0, 3);

    setCardDetails({ ...cardDetails, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedPlan) return alert('Select a plan first.');

    if (selectedMethod === 'upi' && upiId.trim() === '') {
      return alert('Enter valid UPI ID');
    }

    if (selectedMethod === 'card') {
      const { name, number, expiry, cvv } = cardDetails;
      if (!name || number.length !== 16 || !/^\d{2}\/\d{2}$/.test(expiry) || cvv.length !== 3) {
        return alert('Enter valid card details');
      }
    }

    const plan = allPlans.find((p) => p.id === selectedPlan);
    alert(`✅ Payment via ${selectedMethod.toUpperCase()} successful for ${plan.name} plan!`);
  };

  return (
    <div className="vintage-payment-page">
      <h1 className="vintage-title">✦ Choose Your Plan ✦</h1>
      <div className="plan-options">
        {allPlans.map((plan) => (
          <div
            key={plan.id}
            className={`plan-box ${selectedPlan === plan.id ? 'active' : ''}`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <p>{plan.name}</p>
            <p>{plan.currency}{plan.price}{plan.frequency}</p>
          </div>
        ))}
      </div>

      <h2 className="vintage-title" style={{ marginTop: '40px' }}>✦ Choose Payment Method ✦</h2>
      <div className="payment-methods-list">
        {['card', 'upi'].map((method) => (
          <div
            key={method}
            className={`payment-method-card ${selectedMethod === method ? 'active' : ''}`}
            onClick={() => setSelectedMethod(method)}
          >
            {method === 'card' ? 'Card' : 'UPI'}
          </div>
        ))}
      </div>

      <form className="vintage-payment-form" onSubmit={handleSubmit}>
        {selectedMethod === 'card' && (
          <>
            <label>Cardholder Name</label>
            <input type="text" name="name" value={cardDetails.name} onChange={handleCardChange} required />
            <label>Card Number</label>
            <input type="text" name="number" value={cardDetails.number} onChange={handleCardChange} required />
            <div className="row">
              <div>
                <label>Expiry</label>
                <input type="text" name="expiry" value={cardDetails.expiry} onChange={handleCardChange} placeholder="MM/YY" required />
              </div>
              <div>
                <label>CVV</label>
                <input type="password" name="cvv" value={cardDetails.cvv} onChange={handleCardChange} required />
              </div>
            </div>
          </>
        )}

        {selectedMethod === 'upi' && (
          <>
            <label>UPI ID</label>
            <input type="text" placeholder="example@upi" value={upiId} onChange={(e) => setUpiId(e.target.value)} required />
          </>
        )}

        <button type="submit">PAY NOW</button>
      </form>
    </div>
  );
};

export default PaymentPage;
