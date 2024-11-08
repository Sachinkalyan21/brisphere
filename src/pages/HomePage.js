import React from 'react';
import BookingForm from '../components/BookingForm';

const HomePage = () => (
  <div style={{ textAlign: 'center', padding: '2rem' }}>
    <h2>Welcome to Your Workation in Ladakh</h2>
    <p>Work while exploring the beautiful landscapes of Ladakh with Brisphere.</p>
    <BookingForm />
  </div>
);

export default HomePage;
