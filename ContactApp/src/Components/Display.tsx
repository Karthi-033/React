import {TextField} from "@mui/material";
import "../Style/Style.scss";
import { Grid } from "@mui/material";
import Data from "../Data/Data"
import "../Style/Display.scss"
import PhoneIcon from "@mui/Icons-material/Phone"
import MessageIcon from "@mui/Icons-material/Message"
import VideoIcon from "@mui/Icons-material/Videocam"
import { useState } from "react";

function Display()
 {
    const[contact,setContact]=useState("");
   const [name,setName]=useState<string>();
   const [PhNo,setPhNo]=useState<any>();
   const [enable,setEnable]=useState(false);
   const [saveName,setSaveName]=useState<string>();
   const [saveNumber,setSaveNumber]=useState<any>();
   const [data,setData]=useState(()=>Data());
   const [BgColor,setBgColor]=useState("");

    //console.log(contact);
let dataArray=Object.entries(data).sort(([name1],[name2])=>name1.localeCompare(name2));
 
 let searchData:any=[];
 dataArray.filter((val)=>{
      contact.toUpperCase()==val[0].slice(0,contact.length).toUpperCase() ? searchData.push(val):null;
   })
   console.log(searchData);
   if(contact)
   {
      dataArray=searchData;
   }

if(!name)
{
   setName(dataArray[0][0]);
   setPhNo(dataArray[0][1].PhNO);
   
}

function ProfileDisplay(name:string,number:any){
   setName(name);
   setPhNo(number.PhNO);
  
}

function Enable()
{
   setEnable(!enable);
}

function saveContact()
{
//  console.log(saveName);
//  console.log(saveNumber);
if(saveName&&saveNumber)
{
 setData((prv)=>({
   ...prv,
   [saveName]:{PhNO:saveNumber}
 })
)
 setEnable(!enable);
 setBgColor("gray");
}
}

   return (<>
    <div className="head">Contact</div>
    <TextField  id="outlined-basic" label="Search" variant="outlined"  className="searchBar" value={contact} onChange={(e)=>setContact(e.target.value)}/>
   <div className="Box">
      <Grid container spacing={2} >
         <Grid item>
  {dataArray.map(([name,value])=>(<>
   
   <button  key={name} className="List"  onClick={()=>ProfileDisplay(name,value)}> <span className="Profile">{name.charAt(0).toUpperCase()}</span>{name}</button><br></br>
   </>
  )
  )}</Grid>
  <Grid item sx={{backgroundColor:"white",width:"45%",position:"fixed",left:"53%",top:"6%",borderRadius:"25px",overflow:'hidden',boxShadow:4}} >
   <div className="SideDisplay">
      <div className="ProfileSD">{name?.charAt(0).toUpperCase()}</div>
      <div className="NameSD">{name}</div>
      <div className="NumberSD">{PhNo}</div>
      <div className="icons"><PhoneIcon/> <MessageIcon/> <VideoIcon/></div>
      </div>
      
      <button className="FAVContact" onClick={Enable}>Create New Contact</button>
  </Grid>
  </Grid>
  {enable && (<>
  <div className="popup" >
   <div className="blur"></div>
   <div className="SaveContact">
      <div className="close" onClick={()=>setEnable(!enable)}>X</div>
   <input type="text" className="input" onChange={(e)=>setSaveName(e.target.value)} placeholder="Enter name"></input>
 
   <input type="text" className="input" onChange={(e)=>setSaveNumber(e.target.value)} placeholder="Enter contact number"></input>
   <button  className="saveButton" onClick={saveContact}> Save</button>
   </div>
   </div>
  </>)

  }
  </div>
   </>);
 }
 export default Display;