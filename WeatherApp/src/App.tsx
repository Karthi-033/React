import { useState } from 'react'
import './App.css'

function App() {
  const [temp, setTemp] = useState<number | null>(null); 
  const [name, setName] = useState<string>(""); 
  const [spd , setSpd] = useState<number | null>(null); 
  const [city,setCity]=useState<string>("");
  const [err,setErr]=useState("");
  async function search(){
    const api=`https://wttr.in/${city}?format=j1`; 
    try{
  const value= await fetch(api);
  const data=value.json();
  console.log(data);  
  data.then((d)=>{
    console.log(d);
    setTemp(d.main.temp); 
    setName(d.name);
    setSpd(d.wind.speed);
  
  }).catch(()=>{
    setErr("error");
  })
  } catch(error){
    console.log("Error");
  }
}
return (
  <>
  <div className="container">
  <h1>Weather App</h1>
  <div className="Card">
  <label className='label'>Enter city : </label><br/>
  <input type="text" className="T-box" value ={city} onChange={(e)=>{setCity(e.target.value)}}/><br/><br/>
  <button onClick={search}> Submit </button>
  {err &&  (<h1 className='error'>Error in the city name</h1>)}
  
  {name &&( <>
  
  <br /> 
  <label><b>Name :{name}</b></label> 
  <br /> 
  <label><b>Temperature :{temp}</b></label> 
  <br/> 
  <label><b>Wind Speed :{spd}</b></label> 
  </>)
  }
  </div>
 </div>
  </>
)
}

export default App;
