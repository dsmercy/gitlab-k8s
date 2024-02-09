import { useEffect, useState } from "react";

function App() {

  // const weatherData = [
  //   {
  //     date: "2024-01-30",
  //     temperatureC: 8,
  //     temperatureF: 46,
  //     summary: "Hot",
  //     dashBoard: "DASHBOARD_NAME from gitlab",
  //     connctionString: "connection string from gitlab"
  //   },
  //   {
  //     date: "2024-01-31",
  //     temperatureC: 27,
  //     temperatureF: 80,
  //     summary: "Balmy",
  //     dashBoard: "DASHBOARD_NAME from gitlab",
  //     connctionString: "connection string from gitlab"
  //   },
  //   {
  //     date: "2024-02-01",
  //     temperatureC: -2,
  //     temperatureF: 29,
  //     summary: "Mild",
  //     dashBoard: "DASHBOARD_NAME from gitlab",
  //     connctionString: "connection string from gitlab"
  //   },
  //   {
  //     date: "2024-02-02",
  //     temperatureC: 18,
  //     temperatureF: 64,
  //     summary: "Bracing",
  //     dashBoard: "DASHBOARD_NAME from gitlab",
  //     connctionString: "connection string from gitlab"
  //   },
  //   {
  //     date: "2024-02-03",
  //     temperatureC: 22,
  //     temperatureF: 71,
  //     summary: "Balmy",
  //     dashBoard: "DASHBOARD_NAME from gitlab",
  //     connctionString: "connection string from gitlab"
  //   }
  // ]

  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_DOTNET_API_URL);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <h2>Weather Forecast</h2>
      <ul>
        {weatherData.map((weather, index) => (
          <li key={index}>
            <strong>Date:</strong> {weather.date}<br />
            <strong>Temperature:</strong> {weather.temperatureC}°C / {weather.temperatureF}°F<br />
            <strong>Summary:</strong> {weather.summary}<br />
            <strong>Dashboard:</strong> {weather.dashBoard}<br />
            <strong>Connection String:</strong> {weather.connctionString}<br />
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
