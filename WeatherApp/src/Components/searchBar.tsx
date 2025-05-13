import { useState, useEffect } from 'react';
import "../style/nav.scss";
import { useDispatch } from 'react-redux';
import { setData, setCity } from '../Redux/Reducer/Slice/Slice.tsx';

function SearchBar() {
  const [cityName, setCityName] = useState("Chennai");

  // const [data, setData] = useState();
  const dispatch = useDispatch();



  useEffect(() => {

    const api = `https://wttr.in/${cityName}?format=j1`;
    const fetchData = async () => {
      try {
        const value = await fetch(api);
        const data = value.json();
        data.then((d) => {
          dispatch(setData(d));

          console.log(d);
        })

      }
      catch (error) {
        console.log("error occured")
      }
    }

    fetchData();
  }, []);


  async function search(e: React.KeyboardEvent<HTMLInputElement>) {

    if (e.key === "Enter") {

      dispatch(setCity(cityName));

      let char: any;
      for (char of cityName) {
        if (!isNaN(char)) {
          alert("Error in City Name .......");
          return 0;
        }

      }


      const api = `https://wttr.in/${cityName}?format=j1`;
      try {

        const value = await fetch(api);
        const data = value.json();
        //console.log(data);  
        data.then((d) => {
          dispatch(setData(d));
          // console.log(obj);


        }).catch(() => {
          console.log("error");
        })
      } catch (error) {
        console.log("Error");
      }


    }

  }

  return (
    <>
      <input type="text" className='Search' placeholder="Search your location here..." onChange={(e) => { setCityName(e.target.value) }} onKeyDown={search}></input>
      {/* {data && <Dashboard value={data} city={city1} />} */}
      {/* <ApiContext.Provider value={{data,city:city1}} ></ApiContext.Provider> */}


    </>
  )
}

export default SearchBar