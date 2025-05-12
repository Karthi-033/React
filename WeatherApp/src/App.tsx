import NavigationBar from "./Components/navigationBar";
import {Routes,Route } from "react-router-dom";
import About from "./Components/About";
import Map from "./Components/Map";
import News from "./Components/News";
import Videos from "./Components/Videos";
import Satellite from "./Components/Satellite";
import Home from "./Components/Home";

function App() {
  

  return (
    <>
     
   
    
      <Routes>
        <Route path="/"  element={<Home/>}></Route>
         <Route path="/satellite" element={<Satellite/>}></Route>
        <Route path="/map" element={<Map/>}></Route>
        <Route path="/news" element={<News/>}></Route>
        <Route path="/videos" element={<Videos/>}></Route> 
        <Route path="/about" element={<About/>}></Route> 
      </Routes>
      
    </>
  )
}

export default App
