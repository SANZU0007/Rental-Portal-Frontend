import React from 'react';
import "./forget.css"; // Import the CSS file

const About = () => {
  const aboutTitle = "Welcome to Our Rental Portal";
  const aboutContent = "At our Rental Portal, we're here to make your rental experience simple and hassle-free. Whether you're looking for cars, bikes, or other rental services, we've got you covered. Our dedicated team is committed to providing high-quality rental options to meet your needs.";
  const missionStatement = "Our Mission:";
  const missionContent = "To provide a wide range of rental services that cater to all your transportation and equipment needs. We focus on convenience, affordability, and customer satisfaction. Your journey starts with us.";

  return (
    <div className="about-container fade-in"> {/* Apply CSS classes */}
      <h1 className="title">{aboutTitle}</h1>
      <h3 className='title1'>{aboutContent}</h3>
      <h1 className="mission">{missionStatement}</h1>
      <h3 className='title1'>{missionContent}</h3>
    </div>
  );
}

export default About;
