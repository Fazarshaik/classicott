import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/Payment.scss';

const allPlans = [
  { id: 'basic', name: 'Basic', price: '199', currency: '₹', frequency: '/mo' },
  { id: 'standard', name: 'Standard', price: '399', currency: '₹', frequency: '/mo' },
  { id: 'premium', name: 'Premium', price: '599', currency: '₹', frequency: '/mo' },
];

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({ name: '', number: '', expiry: '', cvv: '' });
  const [upiId, setUpiId] = useState('');
  const [toast, setToast] = useState({ message: '', type: '' });
  const [paymentSummary, setPaymentSummary] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (location.state?.selectedPlan) {
      setSelectedPlan(location.state.selectedPlan.id);
    }
  }, [location]);

  const validateCardNumber = (number) => {
    if (!number) return 'Card number is required';
    
    // Remove spaces and check length
    const cleanNumber = number.replace(/\s/g, '');
    if (cleanNumber.length !== 16) {
      return 'Card number must be exactly 16 digits';
    }
    
    if (!/^\d+$/.test(cleanNumber)) {
      return 'Card number must contain only digits';
    }
    
    return '';
  };

  const validateExpiry = (expiry) => {
    if (!expiry) return 'Expiry date is required';
    if (!/^\d{2}\/\d{2}$/.test(expiry)) return 'Invalid format (MM/YY)';

    const [month, year] = expiry.split('/');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;

    if (parseInt(month) < 1 || parseInt(month) > 12) return 'Invalid month';
    if (parseInt(year) < currentYear || (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
      return 'Card has expired';
    }
    return '';
  };

  const validateCVV = (cvv) => {
    if (!cvv) return 'CVV is required';
    if (cvv.length < 3 || cvv.length > 4) return 'CVV must be 3 or 4 digits';
    if (!/^\d+$/.test(cvv)) return 'CVV must contain only digits';
    return '';
  };

  const validateCardholderName = (name) => {
    if (!name.trim()) return 'Cardholder name is required';
    if (name.trim().length < 2) return 'Name must be at least 2 characters';
    if (!/^[a-zA-Z\s]+$/.test(name)) return 'Name can only contain letters and spaces';
    return '';
  };

  const validateUPI = (upi) => {
    if (!upi.trim()) return 'UPI ID is required';
    if (upi.length < 10) return 'UPI ID must be at least 10 characters';
    if (upi.length > 50) return 'UPI ID is too long';
    
    // Check if it has @ symbol
    if (!upi.includes('@')) {
      return 'UPI ID must contain @ symbol';
    }
    
    // Check for hyphens
    if (upi.includes('-')) {
      return 'UPI ID cannot contain hyphens';
    }
    
    // Split by @ and validate parts
    const parts = upi.split('@');
    if (parts.length !== 2) {
      return 'Invalid UPI format';
    }
    
    const [username, provider] = parts;
    
    if (username.length < 1) {
      return 'Username part cannot be empty';
    }
    
    if (provider.length < 1) {
      return 'Provider part cannot be empty';
    }
    
    return '';
  };

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: '', type: '' }), 3000);
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    let val = value;

    if (name === 'name') {
      val = val.replace(/[^a-zA-Z\s]/g, '').slice(0, 50);
    } else if (name === 'number') {
      val = val.replace(/\D/g, '').slice(0, 16);
      if (val.length > 0) {
        // Add spaces every 4 digits for better readability
        val = val.replace(/(\d{4})(?=\d)/g, '$1 ');
      }
    } else if (name === 'expiry') {
      val = val.replace(/\D/g, '').slice(0, 4);
      if (val.length > 2) val = `${val.slice(0, 2)}/${val.slice(2)}`;
    } else if (name === 'cvv') {
      val = val.replace(/\D/g, '').slice(0, 4);
    }

    setCardDetails({ ...cardDetails, [name]: val });

    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleUpiChange = (e) => {
    const input = e.target.value;
    const formattedInput = input.toLowerCase().replace(/[^a-z0-9@._]/g, '');
    setUpiId(formattedInput);

    // Clear validation error when user starts typing
    if (validationErrors.upi) {
      setValidationErrors(prev => ({
        ...prev,
        upi: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedPlan) {
      showToast("⚠️ Please select a plan", "error");
      return;
    }

    const plan = allPlans.find((p) => p.id === selectedPlan);

    if (selectedMethod === 'upi') {
      const upiError = validateUPI(upiId);
      if (upiError) {
        setValidationErrors(prev => ({ ...prev, upi: upiError }));
        showToast(`❌ ${upiError}`, "error");
        return;
      }

      setPaymentSummary({ method: 'UPI', plan: plan.name, detail: upiId });
      showToast(`✅ Payment initiated for ${plan.currency}${plan.price} via UPI`, "success");
      
      // Navigate to dashboard after successful payment
      setTimeout(() => {
        navigate('/dashboard', { replace: true });
      }, 2000);
      return;
    }

    if (selectedMethod === 'card') {
      const { name, number, expiry, cvv } = cardDetails;

      const nameError = validateCardholderName(name);
      const numberError = validateCardNumber(number.replace(/\s/g, ''));
      const expiryError = validateExpiry(expiry);
      const cvvError = validateCVV(cvv);

      const errors = {};
      if (nameError) errors.name = nameError;
      if (numberError) errors.number = numberError;
      if (expiryError) errors.expiry = expiryError;
      if (cvvError) errors.cvv = cvvError;

      if (Object.keys(errors).length > 0) {
        setValidationErrors(errors);
        const firstError = Object.values(errors)[0];
        showToast(`❌ ${firstError}`, "error");
        return;
      }

      setPaymentSummary({
        method: 'Card',
        plan: plan.name,
        detail: `**** **** **** ${number.replace(/\s/g, '').slice(-4)}`
      });
      showToast(`✅ Payment processed for ${plan.currency}${plan.price} via Card`, "success");
      
      // Navigate to dashboard after successful payment
      setTimeout(() => {
        navigate('/dashboard', { replace: true });
      }, 2000);
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
            <div className="input-group">
              <label>Cardholder Name</label>
              <input 
                type="text" 
                name="name" 
                value={cardDetails.name} 
                onChange={handleCardChange}
                placeholder="Enter cardholder name"
                className={validationErrors.name ? 'error' : ''}
              />
              {validationErrors.name && <span className="error-message">{validationErrors.name}</span>}
            </div>
            
            <div className="input-group">
              <label>Card Number</label>
              <input 
                type="text" 
                name="number" 
                value={cardDetails.number} 
                onChange={handleCardChange}
                placeholder="1234 5678 9012 3456"
                className={validationErrors.number ? 'error' : ''}
              />
              {validationErrors.number && <span className="error-message">{validationErrors.number}</span>}
            </div>
            
            <div className="row">
              <div className="input-group">
                <label>Expiry</label>
                <input 
                  type="text" 
                  name="expiry" 
                  value={cardDetails.expiry} 
                  onChange={handleCardChange} 
                  placeholder="MM/YY"
                  className={validationErrors.expiry ? 'error' : ''}
                />
                {validationErrors.expiry && <span className="error-message">{validationErrors.expiry}</span>}
              </div>
              <div className="input-group">
                <label>CVV</label>
                <input 
                  type="password" 
                  name="cvv" 
                  value={cardDetails.cvv} 
                  onChange={handleCardChange}
                  placeholder="123"
                  className={validationErrors.cvv ? 'error' : ''}
                />
                {validationErrors.cvv && <span className="error-message">{validationErrors.cvv}</span>}
              </div>
            </div>
          </>
        )}

        {selectedMethod === 'upi' && (
          <div className="input-group">
            <label>UPI ID</label>
            <input
              type="text"
              placeholder="username@provider"
              value={upiId}
              onChange={handleUpiChange}
              className={validationErrors.upi ? 'error' : ''}
            />
            {validationErrors.upi && <span className="error-message">{validationErrors.upi}</span>}
            <small className="help-text">Format: username@provider (e.g., john@upi, paytm@paytm, user@okicici)</small>
          </div>
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
