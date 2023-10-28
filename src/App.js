import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Car from "./pages/Car";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Forget from "./pages/Forget";
import SavePassword from "./pages/SavePassword";
import Bikes from "./pages/Bikes";
import CreateCarBooking from "./pages/CreateCarBooking.js";
import BikeBook from "./pages/bikeBook.js";
import BookDetails from "./pages/BookDetails";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Car />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<Forget />} />
          <Route path="/carBooking" element={<CreateCarBooking />} />
          <Route path="/bikeBooking" element={<BikeBook />} />
          <Route path="/bookDeatails" element={< BookDetails/>} />
          <Route
            path="`/save-new-password/${token}`"
            element={<SavePassword />}
          />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
