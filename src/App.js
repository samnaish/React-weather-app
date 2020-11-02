import React, { useState } from 'react'
import Date from './components/Date'
import Search from './components/Search'
import Info from './components/Info'

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = ev => {
    if (ev.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          // console.log(result);
        });
    }
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? "app warm" : "app") : "app" }>
      <main>
        <Search change={ e => setQuery(e.target.value) } query={ query } search={ search }/>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <Date/>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
            <Info speed={weather.wind.speed} feels={weather.main.feels_like} humidity={weather.main.humidity} pressure={weather.main.pressure}/>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
