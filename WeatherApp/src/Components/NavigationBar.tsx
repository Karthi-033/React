import logo from "../assets/logo.png";
import SearchBar from "./searchBar"
import "../style/nav.scss";
import {AppBar,Toolbar,Typography,Stack,Button} from "@mui/material";
import { Link } from "react-router-dom";
function NavigationBar(){

    
    return(
        <>
        <AppBar sx={{backgroundColor: 'white',color:"black" , boxShadow:'none'}}>
        <Toolbar>
                <Typography>
                        <img src={logo} className="logo" ></img>
                </Typography>
                <Stack direction="row" sx={{ marginLeft:'31%'}} spacing={4} >
                <Button  component={Link} to={'/'} sx={{color:'black',fontSize:"18px", fontFamily:'"Roboto",sans-serif', fontWeight:700,textTransform:"none"}}>Home</Button>
                <Button component={Link} to={'/satellite'} sx={{color:'black',fontSize:"18px", fontFamily:'"Roboto",sans-serif',fontWeight:400,textTransform:"none"}}>Satellite</Button>
                <Button component={Link} to={'/map'} sx={{color:'black',fontSize:"18px", fontFamily:'"Roboto",sans-serif',fontWeight:400,textTransform:"none"}}>Map</Button>
                <Button component={Link} to={'/news'} sx={{color:'black',fontSize:"18px", fontFamily:'"Roboto",sans-serif',fontWeight:400,textTransform:"none"}}>News & Articles</Button>
                <Button component={Link} to={'/videos'} sx={{color:'black',fontSize:"18px", fontFamily:'"Roboto",sans-serif',fontWeight:400,textTransform:"none"}}>Videos</Button>
                <Button component={Link} to={'/about'} sx={{color:'black',fontSize:"18px", fontFamily:'"Roboto",sans-serif',fontWeight:400,textTransform:"none"}}>About Us</Button>
                </Stack>
            </Toolbar>
        </AppBar>
        <SearchBar/>

        </>
    );
}
export default NavigationBar