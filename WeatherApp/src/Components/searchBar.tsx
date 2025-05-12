import {useState,useEffect} from 'react';
import "../style/nav.scss";
import Dashboard from "./Dashboard.tsx";



function searchBar(){
 const [city,setCity]=useState("Chennai");
 const [city1,setCity1]=useState("Chennai");
const  [data,setData]=useState(null);

useEffect(()=>{

   const api=`https://wttr.in/${city}?format=j1`; 
   const fetchData= async()=>{
    try{
    const value= await fetch(api);
  const data=value.json();
  data.then((d)=>{
    setData(d);
  })
  
    }
    catch(error)
    {
      console.log("error ooccured")
    }
   }

   fetchData();
},[]);




 
async function search(e :React.KeyboardEvent<HTMLInputElement>){

    if(e.key==="Enter")
    {
      setCity1(city);
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
  //console.log(data);  
  data.then((d)=>{
   setData(d)
  // console.log(obj);

   
  }).catch(()=>{
    console.log("error");
  })
  } catch(error){
    console.log("Error");
  }
   
  
}

}

     return(
            <>
                <input type="text" className='Search' placeholder="Search your location here..." onChange={(e)=>{setCity(e.target.value)}} onKeyDown={search}></input>
                   {data && <Dashboard value={data} city={city1}/>}
             </>
        )
}

export default searchBar