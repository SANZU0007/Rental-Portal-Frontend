import React, { useState } from "react";
import axios from "axios";

const BikeBook = () => {
  const [user, setUser] = useState("");
  const [bikeId, setBikeId] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleCreateBooking = async () => {
    try {
      const response = await axios.post("https://rental-portal001.onrender.com/api/bookingsCar", {
        user,
        carId: bikeId, // Assuming bikeId maps to carId on the server
        bookingDate,
        returnDate,
      });

      if (response.status === 201) {
        console.log("New bike booking created:", response.data);
        window.alert("Successfully booked");
        // Handle the successful creation of a booking, e.g., show a success message or redirect to a confirmation page.
      } else if (response.status === 404) {
        console.error("Bike not found");
        // Handle the case where the bike is not found, e.g., show an error message.
      } else {
        console.error("Error creating a bike booking");
        // Handle other error cases, e.g., show a general error message.
      }
    } catch (error) {
      console.error("Error creating a bike booking", error);
      // Handle network errors or other unexpected errors.
    }
  };

  return (
    <div className="container">
      <h2>Create Bike Booking</h2>
      <input
        type="text"
        placeholder="User"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bike ID"
        value={bikeId}
        onChange={(e) => setBikeId(e.target.value)}
      />
      <input
        type="date"
        value={bookingDate}
        onChange={(e) => setBookingDate(e.target.value)}
      />
      <input
        type="date"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
      />
      <button onClick={handleCreateBooking}>Create Booking</button>
    </div>
  );
};

export default BikeBook;
