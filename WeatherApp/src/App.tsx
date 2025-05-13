
import {BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./Pages/About";
import Map from "./Pages/Map";
import News from "./Pages/News";
import Videos from "./Pages/Videos";
import Satellite from "./Pages/Satellite";
import Home from "./Pages/Home";

function App() {
  

  return (
    <>
     
     <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}></Route>
         <Route path="/satellite" element={<Satellite/>}></Route>
        <Route path="/map" element={<Map/>}></Route>
        <Route path="/news" element={<News/>}></Route>
        <Route path="/videos" element={<Videos/>}></Route> 
        <Route path="/about" element={<About/>}></Route> 
      </Routes>
      </BrowserRouter>
      
     
    </>
  )
}

export default App
