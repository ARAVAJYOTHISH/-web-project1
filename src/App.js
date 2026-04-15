import React from 'react';
import Page1 from './Components/Pagination/Page1';
 import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart';
// import Card3 from './Components/Pagination/Card3';
// import Card2 from './Components/Pagination/Card2';
//import Card from './Components/Card';


function App() {
  return (
    <>
    


    {/* <Router>
      <Routes>
        <Route path="/" element={<Card2 />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router> */}
    
    
      <Router>
        <Header />
        
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
