// import React from 'react';
// import '../css/Subscription.scss'; // Import the CSS file for styling (renamed)

// function VintageSubscriptionPage() { // Renamed from App
//   const plans = [
//     {
//       id: 'basic',
//       name: 'Basic',
//       price: '199',
//       currency: '₹',
//       frequency: '/mo',
//       features: [
//         '480p (SD)',
//         '1 Device',
//         'Limited Catalog',
//         'Ads Included',
//       ],
//     },
//     {
//       id: 'standard',
//       name: 'Standard',
//       price: '399',
//       currency: '₹',
//       frequency: '/mo',
//       features: [
//         '720p (HD)',
//         '2 Devices',
//         'Full Catalog',
//         'Ad-Free',
//       ],
//     },
//     {
//       id: 'premium',
//       name: 'Premium',
//       price: '599',
//       currency: '₹',
//       frequency: '/mo',
//       features: [
//         '1080p (Full HD) +4',
//         '4 Devices',
//         'All Access',
//         'No Ads',
//         'Exclusive Classics',
//       ],
//     },
//   ];

//   const onSubscribeClick = (planName) => { // Renamed from handleSubscribe
//     alert(`Subscribing to ${planName} plan!`);
//     // In a real application, you'd integrate with a payment gateway here.
//   };

//   return (
//     <div className="vintage-subscription-page">
//       <header className="page-header">
//         <span className="star-icon">✦</span>
//         <h1 className="main-heading">SELECT YOUR PLAN</h1>
//         <span className="star-icon">✦</span>
//       </header>

//       <section className="plans-container">
//         {plans.map((plan) => (
//           <div key={plan.id} className="plan-card">
//             <div className="plan-card-inner">
//               <h2 className="plan-name">{plan.name}</h2>
//               <div className="price-section">
//                 <span className="currency">{plan.currency}</span>
//                 <span className="price">{plan.price}</span>
//                 <span className="frequency">{plan.frequency}</span>
//               </div>
//               <ul className="features-list">
//                 {plan.features.map((feature, index) => (
//                   <li key={index}>{feature}</li>
//                 ))}
//               </ul>
//               <button
//                 className="subscribe-button"
//                 onClick={() => onSubscribeClick(plan.name)} // Updated call
//               >
//                 SUBSCRIBE
//               </button>
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }

// export default VintageSubscriptionPage; // Updated export

// import React from 'react';
// import '../css/Subscription.scss'; // Import the CSS file for styling

// function VintageSubscriptionPage() {
//   const plans = [
//     {
//       id: 'basic',
//       name: 'Basic',
//       price: '199',
//       currency: '₹',
//       frequency: '/mo',
//       features: [
//         '480p (SD)',
//         '1 Device',
//         'Limited Catalog',
//         'Ads Included',
//       ],
//     },
//     {
//       id: 'standard',
//       name: 'Standard',
//       price: '399',
//       currency: '₹',
//       frequency: '/mo',
//       features: [
//         '720p (HD)',
//         '2 Devices',
//         'Full Catalog',
//         'Ad-Free',
//       ],
//     },
//     {
//       id: 'premium',
//       name: 'Premium',
//       price: '599',
//       currency: '₹',
//       frequency: '/mo',
//       features: [
//         '1080p (Full HD) +4',
//         '4 Devices',
//         'All Access',
//         'No Ads',
//         'Exclusive Classics',
//       ],
//     },
//   ];

//   const onSubscribeClick = () => { // Parameter 'planId' removed as it's no longer used for navigation
//     console.log(`Navigating to a generic payment page...`);

//     // Navigate to the payment page without any specific plan ID in the URL
//     window.location.href = `/payment`;

//     // --- Alternative (More common in React Apps with React Router DOM) ---
//     // If you were using React Router DOM, you would do something like this:
//     // import { useNavigate } from 'react-router-dom';
//     // const navigate = useNavigate();
//     // navigate('/payment-page'); // Simple navigation without parameters or state


//     // --- Alternative (More common in React Apps with React Router DOM) ---
//     // If you were using React Router DOM, you would do something like this:
//     // import { useNavigate } from 'react-router-dom';
//     // const navigate = useNavigate();
//     // navigate(`/payment-page/${planId}`, { state: { from: 'subscription-page' } });
//     // Or if you want to pass more data:
//     // navigate('/payment-page', { state: { selectedPlan: plans.find(p => p.id === planId) } });
//   };

//   return (
//     <div className="vintage-subscription-page">
//       <header className="page-header">
//         <span className="star-icon">✦</span>
//         <h1 className="main-heading">SELECT YOUR PLAN</h1>
//         <span className="star-icon">✦</span>
//       </header>

//       <section className="plans-container">
//         {plans.map((plan) => (
//           <div key={plan.id} className="plan-card">
//             <div className="plan-card-inner">
//               <h2 className="plan-name">{plan.name}</h2>
//               <div className="price-section">
//                 <span className="currency">{plan.currency}</span>
//                 <span className="price">{plan.price}</span>
//                 <span className="frequency">{plan.frequency}</span>
//               </div>
//               <ul className="features-list">
//                 {plan.features.map((feature, index) => (
//                   <li key={index}>{feature}</li>
//                 ))}
//               </ul>
//               <button
//                 className="subscribe-button"
//                 onClick={() => onSubscribeClick(plan.id)} // Pass plan.id
//               >
//                 SUBSCRIBE
//               </button>
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }

// export default VintageSubscriptionPage;

import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate
import '../css/Subscription.scss';
import Home from '../components/Home';

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
    </>
  );
}

export default VintageSubscriptionPage;
