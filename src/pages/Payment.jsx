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
  const [toast, setToast] = useState({ message: '', type: '' });
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    if (location.state?.selectedPlan) {
      setSelectedPlan(location.state.selectedPlan.id);
    }
  }, [location]);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: '', type: '' }), 3000);
  };

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

  const handleUpiChange = (e) => {
    const input = e.target.value;
    if (/[A-Z]/.test(input)) {
      showToast("❌ UPI should not contain capital letters", "error");
      return;
    }
    setUpiId(input.toLowerCase().replace(/[^a-z0-9@._-]/g, ''));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedPlan) return showToast("⚠️ Please select a plan", "error");
    const plan = allPlans.find((p) => p.id === selectedPlan);

    if (selectedMethod === 'upi') {
      if (!upiId.trim()) return showToast("⚠️ Enter your UPI ID", "error");
      if (upiId.length < 10) return showToast("⚠️ UPI ID must be at least 10 characters", "error");
      const upiRegex = /^[a-z0-9._-]+@[a-z]{2,}$/;
      if (!upiRegex.test(upiId)) return showToast("❌ Invalid UPI ID (e.g. abc12@upi)", "error");
      setPaymentSummary({ method: 'UPI', plan: plan.name, detail: upiId });
      return showToast(`✅ Paid ${plan.currency}${plan.price} via UPI`, "success");
    }

    if (selectedMethod === 'card') {
      const { name, number, expiry, cvv } = cardDetails;
      if (!name) return showToast("⚠️ Cardholder name is required", "error");
      if (number.length !== 16) return showToast("⚠️ Card number must be 16 digits", "error");
      if (!/^\d{2}\/\d{2}$/.test(expiry)) return showToast("⚠️ Invalid expiry format (MM/YY)", "error");
      if (cvv.length !== 3) return showToast("⚠️ CVV must be 3 digits", "error");

      setPaymentSummary({
        method: 'Card',
        plan: plan.name,
        detail: `**** **** **** ${number.slice(-4)}`
      });
      return showToast(`✅ Paid ${plan.currency}${plan.price} via Card`, "success");
    }
  };

  const selectedPlanObj = allPlans.find(p => p.id === selectedPlan);

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
            {method.toLowerCase()}
          </div>
        ))}
      </div>

      <form className="vintage-payment-form" onSubmit={handleSubmit}>
        {selectedPlanObj && (
          <div className="amount-bar">
            💰 Amount: <strong>{selectedPlanObj.currency}{selectedPlanObj.price}{selectedPlanObj.frequency}</strong>
          </div>
        )}

        {selectedMethod === 'card' && (
          <>
            <label>Cardholder Name</label>
            <input type="text" name="name" value={cardDetails.name} onChange={handleCardChange} />
            <label>Card Number</label>
            <input type="text" name="number" value={cardDetails.number} onChange={handleCardChange} />
            <div className="row">
              <div>
                <label>Expiry</label>
                <input type="text" name="expiry" value={cardDetails.expiry} onChange={handleCardChange} placeholder="MM/YY" />
              </div>
              <div>
                <label>CVV</label>
                <input type="password" name="cvv" value={cardDetails.cvv} onChange={handleCardChange} />
              </div>
            </div>
          </>
        )}

        {selectedMethod === 'upi' && (
          <>
            <label>UPI ID</label>
            <input
              type="text"
              placeholder="example@upi"
              value={upiId}
              onChange={handleUpiChange}
            />
          </>
        )}

        <button type="submit">PAY NOW</button>
      </form>

      {paymentSummary && (
        <div className="plan-summary" style={{ marginTop: '30px' }}>
          <h3 style={{ fontSize: '1.2rem' }}>🧾 Payment Summary</h3>
          <p><strong>Method:</strong> {paymentSummary.method}</p>
          <p><strong>Plan:</strong> {paymentSummary.plan}</p>
          <p><strong>Details:</strong> {paymentSummary.detail}</p>
        </div>
      )}

      {toast.message && (
        <div className={`custom-toast-top ${toast.type}`}>
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
