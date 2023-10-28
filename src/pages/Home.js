import React from "react";
import { useNavigate } from "react-router-dom";

const propertyData = [
  {
    title: "Bicycle",
    description: "Explore the city with a rental bicycle for your adventures.",
    price: "$5/day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAC5cKpwGYmG5IB7udl-_jemkdFXCE4-TwA&usqp=CAU",
  },
  {
    title: "Home Theater System",
    description: "Enjoy movies with a home theater system rental.",
    price: "$40/day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTMKsWP-i1_MNp9aESGQ7mIg9sa1cBkDiakS9wxH2uZt0RzQ0hOYTeynQbZqDzHqg8qgY&usqp=CAU",
  },
  {
    title: "Lawn Mower",
    description: "Maintain your lawn with a powerful lawn mower rental.",
    price: "$12/day",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Qhi36wTx-MVJvAwkM1OIpFsmitJf75ksJg&usqp=CAU",

    
  },
  {
    title: "Camping Gear",
    description: "Gear up for your camping trip with camping equipment rental.",
    price: "$18/day",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIBZI-hXlyUOo0EKdodfO-bs7p5v7jT8EZg&usqp=CAU",
  },
  {
    title: "Tool Set",
    description: "Rent a complete tool set for your home improvement projects.",
    price: "$15/day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Myr8iRQ_qP1g9gAmpxRF95NMSR6GKBcIWw&usqp=CAU",
  },
  // Add more rental product data as needed
];

const Property = ({ title, description, price, image }) => {
  const navigate = useNavigate();

  const exploreProperty = () => {
    navigate("/cars");
  };

  return (
    <div className="property">
      <h2>{title}</h2>
      <img src={image} alt={`${title} Image`} />
      <p>{description}</p>
      <button onClick={exploreProperty}>Explore</button>
    </div>
  );
};

function Home() {
  return (
    <div>
      <main id="property-listings">
        {propertyData.map((property, index) => (
          <Property key={index} {...property} />
        ))}
      </main>
    </div>
  );
}

export default Home;
