

import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate
import '../css/Subscription.scss';
import Home from '../components/Home';
import Footer from './Footer';

function VintageSubscriptionPage() {
  const navigate = useNavigate(); // ✅

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '199',
      currency: '₹',
      frequency: '/mo',
      features: [
        '480p (SD)',
        '1 Device',
        'Limited Catalog',
        'Ads Included',
      ],
    },
    {
      id: 'standard',
      name: 'Standard',
      price: '399',
      currency: '₹',
      frequency: '/mo',
      features: [
        '720p (HD)',
        '2 Devices',
        'Full Catalog',
        'Ad-Free',
      ],
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '599',
      currency: '₹',
      frequency: '/mo',
      features: [
        '1080p (Full HD) +4',
        '4 Devices',
        'All Access',
        'No Ads',
        'Exclusive Classics',
      ],
    },
  ];

  const onSubscribeClick = (plan) => {
    navigate('/payment', { state: { selectedPlan: plan } }); // ✅ Pass plan to payment
  };

  return (
    <>
    <Home />
    <div className="vintage-subscription-page">
      <header className="page-header">
        <span className="star-icon">✦</span>
        <h1 className="main-heading">SELECT YOUR PLAN</h1>
        <span className="star-icon">✦</span>
      </header>

      <section className="plans-container">
        {plans.map((plan) => (
          <div key={plan.id} className="plan-card">
            <div className="plan-card-inner">
              <h2 className="plan-name">{plan.name}</h2>
              <div className="price-section">
                <span className="currency">{plan.currency}</span>
                <span className="price">{plan.price}</span>
                <span className="frequency">{plan.frequency}</span>
              </div>
              <ul className="features-list">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button
                className="subscribe-button"
                onClick={() => onSubscribeClick(plan)} // ✅ Pass the full plan
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
    <Footer />
    </>
  );
}

export default VintageSubscriptionPage;
