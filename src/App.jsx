import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewNavbar from "./components/NewNavbar";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <NewNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
