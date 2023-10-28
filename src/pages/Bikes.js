import React, { useEffect, useState } from "react";
import "./Bikes.css";

import { useNavigate } from "react-router-dom";

const Bikes = () => {


  const navigate = useNavigate();
  const book = () => {
    navigate("/bikeBooking");
  };


  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    // Fetch bike data from the API when the component mounts
    fetch("https://rental-portal001.onrender.com/api/bikes")
      .then((response) => response.json())
      .then((data) => {
        setBikes(data);
      })
      .catch((error) => {
        console.error("Error fetching bike data:", error);
      });
  }, []);

  const bikeImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHq7yD97kroo7dFmdKbgQnq-3QPQ8tLMSYuw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmhAswZCtILqUsRdD2JX3aW-Bhk6gxoWtaQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMpcHLpmab1t2EByNv5d-vfwfTCXgfQhgGA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrea1U0AEKXm4dxYPVB3FVhJgNe0BQkogM8A&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkebMZDb0DZaphYqx1m1DXXULc3JZO3OVlQw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ67FcZq_S4YggTZzmBcXITATevVYpZ6xbZcg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQclZ-RZQcSxsh2yPHPDwcegQrsq3bEe4-w&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvyPVf0sgl4aRv2HmomBFNlqgK4iLQOQZgcg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFMHvzx60jcqbG32l0DcaBqk1OiQrW-0jHg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpzqRbmLHz6q8Dv3n1xi8jelCOKEWhfKfzQ&usqp=CAU",
    // Add more bike image URLs as needed
  ];

  return (
    <div>
      <h1>
        
        <p>
          <a href="http://localhost:3000/">back</a>
        </p>
      </h1>
      <div className="bike-container">
        {bikes.map((bike, index) => (
          <div key={bike.bikeId} className="bike-card">
            <img src={bikeImages[index]} alt={bike.bikeName} />
            <h2 id="bike-size1">Product Id: {bike.bikeId}</h2>
            <p id="bike-size">{bike.bikeName}</p>
            <p id="bike-size">{bike.description}</p>
            <p id="bike-size" >Price: 1000</p>
            <button id="bike-size3" onClick={book}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bikes;
