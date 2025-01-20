import React, { useState } from 'react';
import './Payment.css'; // Ensure to import your CSS file

export default function Payment() {
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');

  const handlePayment = async () => {
    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer YOUR_SECRET_KEY`, // Replace with your actual secret key
      },
      body: JSON.stringify({
        email,
        amount: amount * 100, // Amount in kobo
      }),
    });

    const data = await response.json();
    if (data.status) {
      window.location.href = data.data.authorization_url; // Redirect to Paystack payment page
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="payment-page-container">
      <h1>College Payment Portal</h1>
      <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount (in Naira):</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="100" // Minimum amount
          />
        </div>

        <button type="submit" className="submit-button">Pay Now</button>
      </form>
    </div>
  );
}