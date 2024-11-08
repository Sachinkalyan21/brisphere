import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', date: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | succeeded | failed

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      if (response.status === 201) {
        setStatus('succeeded');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      setStatus('failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '1rem', maxWidth: '400px', margin: 'auto' }}>
      <h2>Book Your Stay</h2>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <label>Date:</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Submit</button>
      {status === 'loading' && <p>Submitting...</p>}
      {status === 'succeeded' && <p>Booking submitted successfully!</p>}
      {status === 'failed' && <p>Failed to submit booking. Please try again.</p>}
    </form>
  );
};

export default BookingForm;
