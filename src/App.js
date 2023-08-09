
import NavBar from './components/NavBar'; // Adjust the path accordingly


import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import Donation from "./components/Pages/Donation";
import Sign_in from './components/Pages/Sign_in';
import Sign_up from './components/Pages/Sign_up';
import  Admin from "./components/Pages/Admin";
import './App.css';
import Footer from './components/Footer';
import Avaible_medi from './components/Pages/Avaible_medi';

function App() {
  return (
    <div className='background'>
      <Router>
        <NavBar />
        

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Donation" element={<Donation />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/signin" element={<Sign_in />} />
            <Route path="/signup" element={<Sign_up />} />
            <Route path="/Avaible_medi" element={<Avaible_medi />} />
          </Routes>
          <Footer/>
        </div>
       
      </Router>
  </div>
  );
}

export default App;