import React, { useEffect, useState } from "react";
import "./Style.css";

const App = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("delhi");
  const [humi, setHumi] = useState(null);
  const [press, setPress] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=23b9d7700dd34bd8dd6e03931db4cfcc`
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
      setHumi(resJson.main)
      setPress(resJson.main)
    };

    fetchApi();
  }, [search]);

  return (
    <>
    <h1 className="name"> Mark VaranVal</h1>
      <div className="box">
     
      <div className="wave-one"></div>
        <div className="wave-two"></div>
        <div className="wave-three"></div>

        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputFiled"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errorMsg">No Data Found <br/> <br/>Plz Enter A Valid <br/><br/>" City Name "</p>
          
        ) : ( 
          <div>
          <div className="info">
            <h2 className="location">
            <i class="fa-solid fa-street-view"> </i> 
              {search}
            </h2>
            <h1 className="temp">{city.temp}°Cel</h1>
            <h3 className="tempmin_max">Min {city.temp_min}°C | Max{city.temp_max}°C</h3>
            <br/>
            <h1 className="humi">Humidity - {humi.humidity}%</h1>
            <h1 className="humi">Pressure - {press.pressure}hPa</h1>
          </div>
         
          </div>
        )}
      </div>
    </>
  )
}

export default App;
