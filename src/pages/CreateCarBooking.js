import React, { useState } from "react";
import axios from "axios"; // Import Axios

const CreateCarBooking = () => {
  const [user, setUser] = useState(""); // Initialize with your user data
  const [carId, setCarId] = useState(""); // Initialize with your carId
  const [bookingDate, setBookingDate] = useState(""); // Initialize with your bookingDate
  const [returnDate, setReturnDate] = useState(""); // Initialize with your returnDate

  const handleCreateBooking = async () => {
    try {
      const response = await axios.post("https://rental-portal001.onrender.com/api/bookingsCar", {
        user,
        carId,
        bookingDate,
        returnDate,
      });

      if (response.status === 201) {
        console.log("New car booking created:", response.data);
        window.alert("Successfully booked");
        // Handle the successful creation of a booking, e.g., show a success message or redirect to a confirmation page.
      } else if (response.status === 404) {
        console.error("Car not found");
        // Handle the case where the car is not found, e.g., show an error message.
      } else {
        console.error("Error creating a car booking");
        // Handle other error cases, e.g., show a general error message.
      }
    } catch (error) {
      console.error("Error creating a car booking", error);
      // Handle network errors or other unexpected errors.
    }
  };

  return (
    <div className="container">
      <h2>Create Car Booking</h2>
      <input
        type="text"
        placeholder="User"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="text"
        placeholder="Car ID"
        value={carId}
        onChange={(e) => setCarId(e.target.value)}
      />
      <input
        type="date" // Use input type "date" for date selection
        value={bookingDate}
        onChange={(e) => setBookingDate(e.target.value)}
      />
      <input
        type="date" // Use input type "date" for date selection
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
      />
      <button onClick={handleCreateBooking}>Create Booking</button>
    </div>
  );
};

export default CreateCarBooking;
