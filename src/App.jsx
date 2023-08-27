

import { Route, Routes } from "react-router-dom";


import Navbar from "./components/Navbar";

import Page404 from "./pages/404Page.jsx";
import Home from "./pages/HomePage.jsx"
import Turnaments from "./pages/TurnamnetPage.jsx";




function App() {
  return(
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path ="/" element = {<Home />} />
          <Route path ="/turnaments" element = {<Turnaments />} />
          
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </>
  )
}

export default App
