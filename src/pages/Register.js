import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Reg.css"

const Register = () => {
  const navigate=useNavigate()
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post(
        "https://rental-portal001.onrender.com/api/signup",
        {
          Name,
          Email,
          Password,
        }
      );
      console.log(response.data);
      window.alert("Success user registration");
  
      // Clear the input fields by setting the state to empty strings
      setName("");
      setEmail("");
      setPassword("");
  
      // Navigate to the appropriate route after successful registration
      navigate(`/login`); // Change the route to where you want to navigate
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="container">
      <form className="form " onSubmit={handleSubmit}>
        <div className="form-content">
          <h3 className="form-title">Register</h3>
          <div className="text-center"></div>

          <div className="form-group mt-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Email Address"
              value={Name}
              onChange={handleNameChange}
            />
          </div>

          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              value={Email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Email Address"
              value={Password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="d-grid gap-2 mt-3 p-4">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;