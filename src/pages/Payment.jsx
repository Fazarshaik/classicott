// // import React, { useState } from 'react';
// // import '../css/Payment.scss';

// // const VintagePayment = () => {
// //   const [method, setMethod] = useState('card');
// //   const [cardDetails, setCardDetails] = useState({
// //     name: '',
// //     number: '',
// //     expiry: '',
// //     cvv: ''
// //   });

// //   const [upiId, setUpiId] = useState('');

// //   const handleCardChange = (e) => {
// //     setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (method === 'card') {
// //       alert(`Card Payment Successful: ${cardDetails.name}`);
// //     } else {
// //       alert(`UPI Payment Successful: ${upiId}`);
// //     }
// //   };

// //   return (
// //     <div className="vintage-payment-page">
// //       <h1 className="vintage-title">✦ Payment Portal ✦</h1>

// //       <div className="payment-methods">
// //         <button
// //           className={method === 'card' ? 'active' : ''}
// //           onClick={() => setMethod('card')}
// //         >
// //           CARD
// //         </button>
// //         <button
// //           className={method === 'upi' ? 'active' : ''}
// //           onClick={() => setMethod('upi')}
// //         >
// //           UPI
// //         </button>
// //       </div>

// //       <form className="vintage-payment-form" onSubmit={handleSubmit}>
// //         {method === 'card' ? (
// //           <>
// //             <label>Cardholder Name</label>
// //             <input
// //               type="text"
// //               name="name"
// //               required
// //               value={cardDetails.name}
// //               onChange={handleCardChange}
// //             />
// //             <label>Card Number</label>
// //             <input
// //               type="text"
// //               name="number"
// //               maxLength="16"
// //               required
// //               value={cardDetails.number}
// //               onChange={handleCardChange}
// //             />
// //             <div className="row">
// //               <div>
// //                 <label>Expiry</label>
// //                 <input
// //                   type="text"
// //                   name="expiry"
// //                   placeholder="MM/YY"
// //                   required
// //                   value={cardDetails.expiry}
// //                   onChange={handleCardChange}
// //                 />
// //               </div>
// //               <div>
// //                 <label>CVV</label>
// //                 <input
// //                   type="password"
// //                   name="cvv"
// //                   maxLength="4"
// //                   required
// //                   value={cardDetails.cvv}
// //                   onChange={handleCardChange}
// //                 />
// //               </div>
// //             </div>
// //           </>
// //         ) : (
// //           <>
// //             <label>UPI ID</label>
// //             <input
// //               type="text"
// //               placeholder="example@upi"
// //               value={upiId}
// //               onChange={(e) => setUpiId(e.target.value)}
// //               required
// //             />
// //           </>
// //         )}
// //         <button type="submit">PAY NOW</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default VintagePayment;

// // import React, { useState, useEffect } from 'react';
// // import '../css/Payment.scss';
// // import { useLocation } from 'react-router-dom';

// // const VintagePayment = () => {
// //   const [method, setMethod] = useState('card');
// //   const [cardDetails, setCardDetails] = useState({
// //     name: '',
// //     number: '',
// //     expiry: '',
// //     cvv: ''
// //   });
// //   const [upiId, setUpiId] = useState('');
// //   const [selectedPlan, setSelectedPlan] = useState(null);
// //   const location = useLocation();

// //   useEffect(() => {
// //     if (location.state && location.state.plan) {
// //       setSelectedPlan(location.state.plan);
// //     }
// //   }, [location]);

// //   const handleCardChange = (e) => {
// //     const { name, value } = e.target;

// //     let newValue = value;
// //     if (name === 'name') {
// //       newValue = newValue.replace(/[^a-zA-Z\s]/g, ''); // only letters
// //     } else if (name === 'number') {
// //       newValue = newValue.replace(/\D/g, '').slice(0, 16); // only numbers, max 16
// //     } else if (name === 'expiry') {
// //       newValue = newValue.replace(/\D/g, '').slice(0, 4);
// //       if (newValue.length > 2) {
// //         newValue = `${newValue.slice(0, 2)}/${newValue.slice(2)}`;
// //       }
// //     } else if (name === 'cvv') {
// //       newValue = newValue.replace(/\D/g, '').slice(0, 3); // only 3 digits
// //     }

// //     setCardDetails({ ...cardDetails, [name]: newValue });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (method === 'upi' && upiId.trim() === '') {
// //       alert('Please enter a valid UPI ID');
// //       return;
// //     }
// //     alert(`Payment Successful for ${selectedPlan?.title} Plan ₹${selectedPlan?.price}`);
// //   };

// //   return (
// //     <div className="vintage-payment-page">
// //       <h1 className="vintage-title">✦ Payment Portal ✦</h1>
// //       {selectedPlan && (
// //         <div className="plan-summary">
// //           <p><strong>Plan:</strong> {selectedPlan.title}</p>
// //           <p><strong>Amount:</strong> ₹{selectedPlan.price}</p>
// //         </div>
// //       )}

// //       <div className="payment-methods">
// //         <button
// //           className={method === 'card' ? 'active' : ''}
// //           onClick={() => setMethod('card')}
// //         >
// //           CARD
// //         </button>
// //         <button
// //           className={method === 'upi' ? 'active' : ''}
// //           onClick={() => setMethod('upi')}
// //         >
// //           UPI
// //         </button>
// //       </div>

// //       <form className="vintage-payment-form" onSubmit={handleSubmit}>
// //         {method === 'card' ? (
// //           <>
// //             <label>Cardholder Name</label>
// //             <input
// //               type="text"
// //               name="name"
// //               value={cardDetails.name}
// //               onChange={handleCardChange}
// //               required
// //             />
// //             <label>Card Number</label>
// //             <input
// //               type="text"
// //               name="number"
// //               value={cardDetails.number}
// //               onChange={handleCardChange}
// //               required
// //             />
// //             <div className="row">
// //               <div>
// //                 <label>Expiry</label>
// //                 <input
// //                   type="text"
// //                   name="expiry"
// //                   placeholder="MM/YY"
// //                   value={cardDetails.expiry}
// //                   onChange={handleCardChange}
// //                   required
// //                 />
// //               </div>
// //               <div>
// //                 <label>CVV</label>
// //                 <input
// //                   type="password"
// //                   name="cvv"
// //                   value={cardDetails.cvv}
// //                   onChange={handleCardChange}
// //                   required
// //                 />
// //               </div>
// //             </div>
// //           </>
// //         ) : (
// //           <>
// //             <label>UPI ID</label>
// //             <input
// //               type="text"
// //               placeholder="example@upi"
// //               value={upiId}
// //               onChange={(e) => setUpiId(e.target.value)}
// //               required
// //             />
// //           </>
// //         )}
// //         <button type="submit">PAY NOW</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default VintagePayment;

// // import React, { useState, useEffect } from 'react';
// // import { useLocation } from 'react-router-dom';
// // import '../css/Payment.scss';

// // const PaymentPage = () => {
// //   const location = useLocation();
// //   const [method, setMethod] = useState('card');
// //   const [plan, setPlan] = useState(null);

// //   const [cardDetails, setCardDetails] = useState({
// //     name: '',
// //     number: '',
// //     expiry: '',
// //     cvv: ''
// //   });

// //   const [upiId, setUpiId] = useState('');

// //   useEffect(() => {
// //     if (location.state?.selectedPlan) {
// //       setPlan(location.state.selectedPlan);
// //     }
// //   }, [location]);

// //   const handleCardChange = (e) => {
// //     const { name, value } = e.target;
// //     let newValue = value;

// //     if (name === 'name') {
// //       newValue = newValue.replace(/[^a-zA-Z\s]/g, '');
// //     } else if (name === 'number') {
// //       newValue = newValue.replace(/\D/g, '').slice(0, 16);
// //     } else if (name === 'expiry') {
// //       newValue = newValue.replace(/\D/g, '').slice(0, 4);
// //       if (newValue.length > 2) {
// //         newValue = `${newValue.slice(0, 2)}/${newValue.slice(2)}`;
// //       }
// //     } else if (name === 'cvv') {
// //       newValue = newValue.replace(/\D/g, '').slice(0, 3);
// //     }

// //     setCardDetails({ ...cardDetails, [name]: newValue });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (method === 'upi' && upiId.trim() === '') {
// //       alert('Please enter a valid UPI ID.');
// //       return;
// //     }

// //     if (method === 'card' && (
// //       cardDetails.name === '' ||
// //       cardDetails.number.length !== 16 ||
// //       !/^\d{2}\/\d{2}$/.test(cardDetails.expiry) ||
// //       cardDetails.cvv.length !== 3
// //     )) {
// //       alert('Please fill valid card details.');
// //       return;
// //     }

// //     alert(`✅ Payment Successful for ${plan?.name} plan!`);
// //   };

// //   return (
// //     <div className="vintage-payment-page">
// //       <h1 className="vintage-title">✦ Payment Portal ✦</h1>

// //       {plan && (
// //         <div className="plan-summary">
// //           <p><strong>Plan:</strong> {plan.name}</p>
// //           <p><strong>Price:</strong> {plan.currency}{plan.price}{plan.frequency}</p>
// //         </div>
// //       )}

// //       <div className="payment-methods">
// //         <button
// //           className={method === 'card' ? 'active' : ''}
// //           onClick={() => setMethod('card')}
// //         >
// //           CARD
// //         </button>
// //         <button
// //           className={method === 'upi' ? 'active' : ''}
// //           onClick={() => setMethod('upi')}
// //         >
// //           UPI
// //         </button>
// //       </div>

// //       <form className="vintage-payment-form" onSubmit={handleSubmit}>
// //         {method === 'card' ? (
// //           <>
// //             <label>Cardholder Name</label>
// //             <input
// //               type="text"
// //               name="name"
// //               value={cardDetails.name}
// //               onChange={handleCardChange}
// //               required
// //             />
// //             <label>Card Number</label>
// //             <input
// //               type="text"
// //               name="number"
// //               value={cardDetails.number}
// //               onChange={handleCardChange}
// //               required
// //             />
// //             <div className="row">
// //               <div>
// //                 <label>Expiry</label>
// //                 <input
// //                   type="text"
// //                   name="expiry"
// //                   value={cardDetails.expiry}
// //                   placeholder="MM/YY"
// //                   onChange={handleCardChange}
// //                   required
// //                 />
// //               </div>
// //               <div>
// //                 <label>CVV</label>
// //                 <input
// //                   type="password"
// //                   name="cvv"
// //                   value={cardDetails.cvv}
// //                   onChange={handleCardChange}
// //                   required
// //                 />
// //               </div>
// //             </div>
// //           </>
// //         ) : (
// //           <>
// //             <label>UPI ID</label>
// //             <input
// //               type="text"
// //               value={upiId}
// //               placeholder="yourname@upi"
// //               onChange={(e) => setUpiId(e.target.value)}
// //               required
// //             />
// //           </>
// //         )}

// //         <button type="submit">PAY NOW</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default PaymentPage;

// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import '../css/Payment.scss';

// const allPlans = [
//   {
//     id: 'basic',
//     name: 'Basic',
//     price: '199',
//     currency: '₹',
//     frequency: '/mo',
//   },
//   {
//     id: 'standard',
//     name: 'Standard',
//     price: '399',
//     currency: '₹',
//     frequency: '/mo',
//   },
//   {
//     id: 'premium',
//     name: 'Premium',
//     price: '599',
//     currency: '₹',
//     frequency: '/mo',
//   },
// ];

// const PaymentPage = () => {
//   const location = useLocation();
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [selectedMethod, setSelectedMethod] = useState('card');
//   const [cardDetails, setCardDetails] = useState({ name: '', number: '', expiry: '', cvv: '' });
//   const [upiId, setUpiId] = useState('');

//   useEffect(() => {
//     if (location.state?.selectedPlan) {
//       setSelectedPlan(location.state.selectedPlan.id); // ID only
//     }
//   }, [location]);

//   const handleCardChange = (e) => {
//     const { name, value } = e.target;
//     let val = value;

//     if (name === 'name') val = val.replace(/[^a-zA-Z\s]/g, '');
//     else if (name === 'number') val = val.replace(/\D/g, '').slice(0, 16);
//     else if (name === 'expiry') {
//       val = val.replace(/\D/g, '').slice(0, 4);
//       if (val.length > 2) val = `${val.slice(0, 2)}/${val.slice(2)}`;
//     } else if (name === 'cvv') val = val.replace(/\D/g, '').slice(0, 3);

//     setCardDetails({ ...cardDetails, [name]: val });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (selectedMethod === 'upi' && upiId.trim() === '') {
//       return alert('Enter valid UPI ID');
//     }

//     if (selectedMethod === 'card') {
//       const { name, number, expiry, cvv } = cardDetails;
//       if (!name || number.length !== 16 || !/^\d{2}\/\d{2}$/.test(expiry) || cvv.length !== 3) {
//         return alert('Enter valid card details');
//       }
//     }

//     const plan = allPlans.find((p) => p.id === selectedPlan);
//     alert(`✅ Payment via ${selectedMethod.toUpperCase()} successful for ${plan.name} plan!`);
//   };

//   return (
//     <div className="vintage-payment-page">
//       <h1 className="vintage-title">✦ Choose Your Plan ✦</h1>

//       <div className="plan-options">
//         {allPlans.map((plan) => (
//           <div
//             key={plan.id}
//             className={`plan-box ${selectedPlan === plan.id ? 'active' : ''}`}
//             onClick={() => setSelectedPlan(plan.id)}
//           >
//             <p>{plan.name}</p>
//             <p>{plan.currency}{plan.price}{plan.frequency}</p>
//             {selectedPlan === plan.id && <span className="checkmark">✅</span>}
//           </div>
//         ))}
//       </div>

//       <h2 className="vintage-title" style={{ marginTop: '40px' }}>✦ Choose Payment Method ✦</h2>

//       <div className="payment-methods-list">
//         {['card', 'upi'].map((method) => (
//           <div
//             key={method}
//             className={`payment-method-card ${selectedMethod === method ? 'active' : ''}`}
//             onClick={() => setSelectedMethod(method)}
//           >
//             <span>{method === 'card' ? 'Card' : 'UPI'}</span>
//             {selectedMethod === method && <span className="checkmark">✅</span>}
//           </div>
//         ))}
//       </div>

//       <form className="vintage-payment-form" onSubmit={handleSubmit}>
//         {selectedMethod === 'card' && (
//           <>
//             <label>Cardholder Name</label>
//             <input type="text" name="name" value={cardDetails.name} onChange={handleCardChange} required />
//             <label>Card Number</label>
//             <input type="text" name="number" value={cardDetails.number} onChange={handleCardChange} required />
//             <div className="row">
//               <div>
//                 <label>Expiry</label>
//                 <input type="text" name="expiry" value={cardDetails.expiry} onChange={handleCardChange} placeholder="MM/YY" required />
//               </div>
//               <div>
//                 <label>CVV</label>
//                 <input type="password" name="cvv" value={cardDetails.cvv} onChange={handleCardChange} required />
//               </div>
//             </div>
//           </>
//         )}

//         {selectedMethod === 'upi' && (
//           <>
//             <label>UPI ID</label>
//             <input type="text" placeholder="example@upi" value={upiId} onChange={(e) => setUpiId(e.target.value)} required />
//           </>
//         )}

//         <button type="submit">PAY NOW</button>
//       </form>
//     </div>
//   );
// };

// export default PaymentPage;
// PaymentPage.jsx


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
