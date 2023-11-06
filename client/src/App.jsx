import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import {fetchUserDataAxios} from "./components/fetchUserDataAxios";
// import UserDataQuery from "./components/UserDataQuery";

function App() {
  const [jokes, setJokes] = useState([]);
 
  useEffect(() => {
    //!  UserDataQuery()

   const fetchDataAxiosAndSetJokes = async () => {
      const data = await fetchUserDataAxios(); //fetchUserDataAxios() return promise so can't directyl add into setJokes must by async function
      setJokes(data);
    };

    fetchDataAxiosAndSetJokes();
  
  }, []);
 
  return <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
 <h1> hello users</h1>
 {jokes.map((data)=>(
    <div key={data.id} style={{display:"flex",flexDirection:"" }}>
      {data.name}
    </div>
  ))} </div>;
}

export default App;
