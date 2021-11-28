
 /* eslint-disable */ 
 import React, { useEffect, useState } from "react";
import logo from './logo.png';
import Tickets from './Tickets.js'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
function App() {


  const [plays, setPlays] = useState([])

  
       
    useEffect(() => {
      fetch('https://officiallondontheatre.com/wp-json/shows/all-open')
        .then(res => {
          return res.json();
        })
        .then(data => {
          setPlays(data.slice(0,4));
          
        })
    }, [])
 
     console.log(plays)

  return (
    <div className="h-screen flex justify-center items-center">
        
        {
          plays.length === 0 ? 
          <div>
       
          <Loader type="Bars" color="red" height={90} width={90} />
          </div>
          
      :
      <Tickets plays={plays} />
        }
        
  </div>
  );
}

export default App;
