import Dashboard from "../Components/Dashboard.tsx";

import NavigationBar from "../Components/NavigationBar.tsx";
import SearchBar from "../Components/SearchBar.tsx";

function Home(){
    return(<>
       <NavigationBar/>
       <SearchBar/>
       <Dashboard/>
    </>);
}

export default Home;