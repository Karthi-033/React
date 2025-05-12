import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from "react";
import "../style/nav.scss";
import slash from "../assets/slash.png";
import Haze from "../assets/Haze.png";
import Mist from "../assets/Mist.png";
import partlyCloudy from "../assets/partly cloudy.png";
import PatchyRain from "../assets/Patchy_rain.png";
import Sunny from "../assets/Sunny.png";
import DirectionDisplay from  "./directionDisplay";
import HourlyForecast from './HourlyForecast';

function Dashboard({value,city}:any){
const[iconPath,setIconPath]=useState("");
const[content,setContent]=useState("");
const [object,setObject]=useState({
    humidity:"",
    priciptation:"",
    speed:"",
    direction:""
});

   const [weather,setWeather]=useState({
    time:"",
    temp:"",
    country:"",
    currentDate:"",
    region:"",
    icon:"",
    humidity:"",
    pricip:"",
    speed:"",
    direction:"",
    hourTemp1:"",
    hourTemp2:"",
    hourTemp3:"",
    hourTemp4:"",
    hourTemp5:"",
    hourTemp6:"",
    hourTemp7:"",   
    hourTemp8:"",
    tempIcon:""

   })
   const dt=new Date().toLocaleTimeString();
   useEffect(()=>{
       setWeather(
    {
        
        temp:value.current_condition[0].FeelsLikeC,
        country:value.nearest_area[0].country[0].value,
    currentDate:value.weather[0].date,
    region:value.nearest_area[0].region[0].value,
    icon:value.current_condition[0].weatherDesc[0].value,   
    humidity:value.current_condition[0].humidity,
    pricip:value.current_condition[0].precipInches,
    speed:value.current_condition[0].windspeedKmph,
    direction:value.current_condition[0].winddir16Point,
    hourTemp1:value.weather[0].hourly[0].tempC,
    hourTemp2:value.weather[0].hourly[1].tempC,
    hourTemp3:value.weather[0].hourly[2].tempC,
    hourTemp4:value.weather[0].hourly[3].tempC,
    hourTemp5:value.weather[0].hourly[4].tempC,
    hourTemp6:value.weather[0].hourly[5].tempC,
    hourTemp7:value.weather[0].hourly[6].tempC,   
    hourTemp8:value.weather[0].hourly[7].tempC,
    time:dt,
    tempIcon:value.current_condition[0].weatherDesc[0].value
    }
   );

 setObject({
    humidity:weather.humidity,
    priciptation:weather.pricip,
    speed:weather.speed,
    direction:weather.direction
});
   
if(weather.tempIcon=="Haze")
{
    setIconPath(Haze);
    setContent("Haze");

}
else if(weather.tempIcon=="Patchy rain nearby")
{
    setIconPath(PatchyRain);
      setContent("Patchy rain nearby");
}
else if(weather.tempIcon=="Partly cloudy")
{
    setIconPath(partlyCloudy);
      setContent("Partly cloudy");
}
else if(weather.tempIcon=="Mist")
{
    setIconPath(Mist);
      setContent("Mist");
}
else{
    setIconPath(Sunny);
      setContent("Sunny");
}


}),[];



   console.log(weather.temp);
    console.log(value);
    return(<>
        <div className="container-fluid " id="center-content">
            <div className="row">
                <div className="col"  id="Display-1"><span className='l1'>Weather Forecast</span><div><span className='cityName'>{city}...</span></div>
                <div> <span className='region'>{weather.region}, {weather.country}</span></div>
                <div><span className="date">{weather.time}, Monday</span></div>
                <div className="date"><span>{weather.currentDate}</span></div>
                <div><span className="currentTemp">Current Weather is</span><span className='smallTemp'> {weather.temp}{'\u00B0'}C</span></div>
                </div>
                <div className="col" ><span id="display-2"><span className='bigF'>{weather.temp}{'\u00B0'}</span><span ><img src={slash} className='slash'></img></span><span className='smallF'>29{'\u00B0'}C</span></span></div>
                <div className="col" > <img src={iconPath} alt="ICONS" className="WIcons" /> <div className="content">{content}</div></div>
            </div>
              
        </div>
      
        <DirectionDisplay obj={object}/> 
        <HourlyForecast value={weather}/>
       

    </>);
}

export default Dashboard;