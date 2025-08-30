import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CheckoutForm = ({
  loading,
  formSubmit,
  summeryData,
  cartData,
  userData,
  autoFill,
  userLogin,
}) => {
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    contact: '',
    address: '',
  });

  // Autofill form with userData when available
  useEffect(() => {
    if (autoFill && userData) {
      setFormData({
        Name: userData.Name || '',
        email: userData.email || '',
        contact: userData.contact || '',
        address: userData.address || '',
      });
    }
  }, [autoFill, userData]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    formSubmit(formData);
  };

  return (
    <Wrapper>
      <h1>Checkout</h1>
      <Summary>
        <h2>Order Summary</h2>
        <p>Total Items: {summeryData.totalItems || 0}</p>
        <p>Total Amount: ₹{summeryData.totalAmount || 0}</p>
      </Summary>

      <form onSubmit={onSubmit}>
        <InputGroup>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            disabled={loading}
          />
        </InputGroup>

        <InputGroup>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            disabled={loading}
          />
        </InputGroup>

        <InputGroup>
          <label htmlFor="contact">Contact Number</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Your Contact Number"
            required
            disabled={loading}
          />
        </InputGroup>

        <InputGroup>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Your Shipping Address"
            required
            disabled={loading}
            rows={4}
          />
        </InputGroup>

        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Processing...' : userLogin ? 'Proceed to Pay' : 'Login to Checkout'}
        </SubmitButton>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 480px;
  margin: 3rem auto;
  background: #fff;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.07);

  h1 {
    margin-bottom: 1.5rem;
    font-weight: 700;
    font-size: 2rem;
    text-align: center;
    color: #2c3e50;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

const Summary = styled.div`
  margin-bottom: 2rem;
  background-color: #f6f8fa;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  border: 1px solid #e1e4e8;

  h2 {
    margin-bottom: 0.75rem;
    font-weight: 600;
    color: #34495e;
  }

  p {
    margin: 0.3rem 0;
    font-size: 1rem;
    color: #555;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.4rem;

  label {
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #34495e;
  }

  input,
  textarea {
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border-radius: 8px;
    border: 1.5px solid #ddd;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #3498db;
      outline: none;
    }

    &:disabled {
      background-color: #f0f0f0;
      cursor: not-allowed;
    }
  }
`;

const SubmitButton = styled.button`
  padding: 0.95rem 1.2rem;
  background-color: #3498db;
  color: white;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: #7fb3db;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #2980b9;
  }
`;

export default CheckoutForm;
