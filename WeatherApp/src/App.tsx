import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import logo from "./assets/logo.png";
import Wicon from "./assets/wIcon.png";
import slash from "./assets/slash.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function App() {
  const [temp, setTemp] = useState<number | null>(null); 
  const [err,setErr]=useState("");
  const [area,setArea]=useState("");
  const [city,setCity]=useState("");
  const [country,setCountry]=useState("");
  const[currentDate,setCurrentDate]=useState("");
  const [region,setRegion]=useState("");
  const [icon,setIcon]=useState("");
  const [humidity,setHumidity]=useState("");
  const [pricip,setPricip]=useState("");
  const [speed,setSpeed]=useState("");
  const [direction,setDirection]=useState("");
  const [hourTemp,setHourTemp]=useState("");
  const [hourTemp1,setHourTemp1]=useState("");
  const [hourTemp2,setHourTemp2]=useState("");
  const [hourTemp3,setHourTemp3]=useState("");
  const [hourTemp4,setHourTemp4]=useState("");
  const [hourTemp5,setHourTemp5]=useState("");
  const [hourTemp6,setHourTemp6]=useState("");
  const [hourTemp7,setHourTemp7]=useState("");
  async function search(e :React.KeyboardEvent<HTMLInputElement>){
    if(e.key==="Enter")
    {
      let char:any;
      for(char of city)
      {
        if(!isNaN(char))
        {
          alert("Error in City Name .......");
          return 0;
          
        }
      }
    const api=`https://wttr.in/${city}?format=j1`; 
    try{
  const value= await fetch(api);
  const data=value.json();
  console.log(data);  
  data.then((d)=>{
    console.log(d);
    setTemp(d.current_condition[0].FeelsLikeC); 
   setHumidity(d.current_condition[0].humidity);
    setArea(d.nearest_area[0].areaName[0].value);
    setCountry(d.nearest_area[0].country[0].value);
    setRegion(d.nearest_area[0].region[0].value);
    setCurrentDate(d.weather[0].date);
    setSpeed(d.current_condition[0].windspeedKmph);
    setPricip(d.current_condition[0].precipInches);
    setIcon(d.current_condition[0].weatherIconUrl[0].value);
    setDirection(d.current_condition[0].winddir16Point);
    setHourTemp(d.weather[0].hourly[0].tempC);
    setHourTemp1(d.weather[0].hourly[1].tempC);
    setHourTemp2(d.weather[0].hourly[2].tempC);
    setHourTemp3(d.weather[0].hourly[3].tempC);
    setHourTemp4(d.weather[0].hourly[4].tempC);
    setHourTemp5(d.weather[0].hourly[5].tempC);
    setHourTemp6(d.weather[0].hourly[6].tempC);
    setHourTemp7(d.weather[0].hourly[7].tempC);
    
  }).catch(()=>{
    setErr("error");
  })
  } catch(error){
    console.log("Error");
  }
}
}
return (
  <>
  
  <nav className="container d-flex list-unstyled pt-3"> 
    <div className="logo">
  <img src={logo}></img>
  </div>
 <div className=" d-flex" id="nav">
 <li className="ms-5 fs-5"><b>Home</b></li>
 <li className="ms-5 fs-5">Satellite</li>
 <li className="ms-5 fs-5">Map</li>
 <li className="ms-5 fs-5 " id="nowrap">News & Articles </li>
 <li className="ms-5 fs-5">Videos</li>
 <li className="ms-5  fs-5" id="nowrap">About Us</li>
 </div></nav>
  

 <div className='content1'>
 <div className="container-fluid">
  <input className='searchT' type="text" placeholder='Search your location here' value ={city} onChange={(e)=>{setCity(e.target.value)}} onKeyDown={search}/><br/><br/>
  </div>
  
  {err &&  (<h1 className='error'>Error in the city name</h1>)}
  
  <>
    
  <div id="centerB" className='container-fluid'> <div className="row">
    <div className="col " id="firstG">Weather Forecast<div className='display-1'>{area}...</div><br></br>
  <div className='h4'>{region},{country}</div>
  <div>12:40 PM, Thursday</div>
  <div>{currentDate}</div>
  <div> Current Wether {temp}<span>{'\u00B0'}C</span></div>
  </div>
  <div className="col" id="secG"><div ><span className="bigfont">{temp}{'\u00B0'}</span><span className='Moveup'><img src={slash} className='slash'></img><span className='slashDownFont'>29{'\u00B0'}C</span></span></div> </div>
  
  <div className='col' id="rdG"><img src={icon||Wicon} className='icon'></img></div>
  </div>
  </div>
  <div className='centerBot'>
  <div className='d-flex justify-content-center text-b'>
    <div className='container fw-100' id="HPSD">
      <div className="row" >
        <div className="col" id="rightLine">{humidity}%
          <div className='mention'>Humidity</div>
        </div>
    <div className="col" id="rightLine">{pricip}%
      <div className='mention'>Precipition</div>  
    </div>
    
    <div className="col" id="rightLine">{speed}Km/h
      <div className='mention'>Wind</div>
    </div>
    <div className="col" id="rightLine">{direction}
      <div className='mention'>Wind Direction</div>
      
    </div>
    </div>
    </div>
    </div>
    </div>
        
    <div className='container-fluid ' id="swip">
        <div  className="subTit">Hourly Forecast</div>
        <Swiper
      spaceBetween={50}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
       <SwiperSlide><div className='card'><div className='static'>12PM</div><img src={Wicon}></img><div className='CTemp'>{hourTemp}{'\u00B0'}C</div></div></SwiperSlide>
      <SwiperSlide><div className='card'><div className='static'>1PM</div><img src={Wicon}></img><div className='CTemp'>{hourTemp1}{'\u00B0'}C</div></div></SwiperSlide>
      <SwiperSlide><div className='card'><div className='static'>2PM</div><img src={Wicon}></img><div className='CTemp'>{hourTemp2}{'\u00B0'}C</div></div></SwiperSlide>
      <SwiperSlide><div className='card'><div className='static'>3PM</div><img src={Wicon}></img><div className='CTemp'>{hourTemp3}{'\u00B0'}C</div></div></SwiperSlide>
      <SwiperSlide><div className='card'><div className='static'>4PM</div><img src={Wicon}></img><div className='CTemp'>{hourTemp4}{'\u00B0'}C</div></div></SwiperSlide>
      <SwiperSlide><div className='card'><div className='static'>5PM</div><img src={Wicon}></img><div className='CTemp'>{hourTemp5}{'\u00B0'}C</div></div></SwiperSlide>
      <SwiperSlide><div className='card'><div className='static'>6PM</div><img src={Wicon}></img><div className='CTemp'>{hourTemp6}{'\u00B0'}C</div></div></SwiperSlide>
      <SwiperSlide><div className='card'><div className='static'>7PM</div><img src={Wicon}></img><div className='CTemp'>{hourTemp7}{'\u00B0'}C</div></div></SwiperSlide>

    </Swiper>
</div>

   
    </>
    </div>
 
  </>
)
}

export default App;
