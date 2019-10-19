import React, { useState, useEffect } from "react";
// import Weather from "./components/Weather";
import "./App.css";
import Info from "./components/information/Info";
import RegionJam from "./components/Region/RegionJam";
import RegionGer from "./components/Region/RegionGer";

const key = "15f9cc886ac24f548f6fb49bc3ea7913";
// const proxy = "https://cors-anywhere.herokuapp.com/";
const App = () => {
  /*
  const convertTempCel = num => {
    return ((num - 32) * 5) / 9;
  };
  
*/

  let [icon, setIcon] = useState("C");

  //Germany
  const [tempGer, setTempGer] = useState([]);
  const [cityGer, setGer] = useState([]);
  const [codeGer, setCodeGer] = useState([]);
  const [sumGer, setSumGer] = useState([]);
  // const city = e.target.elements.city.value;
  const request1 = `https://api.weatherbit.io/v2.0/current?city=berlin&key=${key}`;

  useEffect(() => {
    const fetchCity = async city => {
      const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${key}`;
      const response = await fetch(url);
      const data1 = await response.json();

      return data1;
    };

    (async function fetchData1() {
      // const response = await fetch(request1);
      // const data1 = await response.json();

      const [berlinData, kingstonData] = await Promise.all([
        fetchCity("berlin"),
        fetchCity("kingston")
      ]);

      setGer(berlinData.data[0].city_name);
      setCodeGer(berlinData.data[0].country_code);
      setTempGer(Math.floor(berlinData.data[0].temp));
      setSumGer(berlinData.data[0].weather.description);

      // console.log(data1.data[0]);
    })();
  }, [request1]);

  //Jamaica
  const [cityJam, setJam] = useState([]);
  const [tempJam, setTempJam] = useState([]);
  const [codeJam, setCodeJam] = useState([]);
  const [sumJam, setSumJam] = useState([]);

  const request2 = `https://api.weatherbit.io/v2.0/current?city=kingston&key=${key}`;

  useEffect(() => {
    (async function fetchData2() {
      const response2 = await fetch(request2);
      const data2 = await response2.json();
      setJam(data2.data[0].city_name);
      setTempJam(Math.floor(data2.data[0].temp));
      setCodeJam(data2.data[0].country_code);
      setSumJam(data2.data[0].weather.description);

      // console.log(data2.data[0]);
    })();
  }, [request2]);

  return (
    <main>
      <Info icon={icon} setIcon={() => setIcon(icon === "F" ? "C" : "F")} />
      <RegionGer
        icon={icon}
        cityGer={cityGer}
        tempGer={tempGer}
        codeGer={codeGer}
        summaryGer={sumGer}
      />
      <RegionJam
        icon={icon}
        cityJam={cityJam}
        tempJam={tempJam}
        codeJam={codeJam}
        summaryJam={sumJam}
      />
    </main>
  );
};

export default App;

// Open Weather Api//
// const key = " 8679c19426cb3b960bd2f64e04529e39";

// OpenWeatherAPI;

// getWeather = async e => {
//   // // e.preventDefault();
//   // const city = e.target.elements.city.value;
//   // const country = e.target.elements.country.value;
// const request ="api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8679c19426cb3b960bd2f64e04529e39";
//   const api_call = await fetch(request);
//   const data = await api_call;
//   console.log(data);
// };

// componentDidMount() {
//   this.getWeather();
// }

//WeatherBit Weather API
