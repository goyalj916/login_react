import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
// import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Masthead from "./components/Masthead";
import About from "./components/About";
import Service from "./components/Service";
import Team from "./components/Team";
import Client from "./components/Client";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<Navbar />}></Route>
            <Route element={<Masthead />}></Route>
            <Route element={<Service />}></Route>
            <Route element={<Portfolio />}></Route>
            <Route element={<About />}></Route>
            <Route element={<Team />}></Route>
            <Route element={<Client />}></Route>
            <Route element={<Contact />}></Route>
            <Route element={<Footer />}></Route>
            {/* <Route path="/" element={<Home />}></Route> */}
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/Details" element={<Details />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
