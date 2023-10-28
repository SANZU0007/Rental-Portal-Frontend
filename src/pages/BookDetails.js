import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookDetails = () => {
  const [bikeBookings, setBikeBookings] = useState([]);
  const [carBookings, setCarBookings] = useState([]);

  useEffect(() => {
    // Fetch bike bookings
    axios.get('https://rental-portal001.onrender.com/api/bookingsBike')
      .then(response => {
        setBikeBookings(response.data);
      })
      .catch(error => {
        console.error('Error fetching bike bookings:', error);
      });

    // Fetch car bookings
    axios.get('https://rental-portal001.onrender.com/api/bookingsCar')
      .then(response => {
        setCarBookings(response.data);
      })
      .catch(error => {
        console.error('Error fetching car bookings:', error);
      });
  }, []);

  return (
    <div>
<h1>Booking User Details</h1>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
      <h2>Product A Bookings</h2>
      <div className="card-container">
        {bikeBookings.map(booking => (
          <div key={booking._id} className="card">
            <h3>User: {booking.user}</h3>
            <p>Booking Date: {booking.bookingDate}</p>
            <p>Return Date: {booking.returnDate}</p>
            {/* Add more details here as needed */}
          </div>
        ))}
      </div>
<br></br>
<br></br>
<br></br>
      <h2 >Product B bookings</h2>
      <div className="card-container">
        {carBookings.map(booking => (
          <div key={booking._id} className="card">
            <h3>User: {booking.user}</h3>
            <p>Booking Date: {booking.bookingDate}</p>
            <p>Return Date: {booking.returnDate}</p>
            {/* Add more details here as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookDetails;
