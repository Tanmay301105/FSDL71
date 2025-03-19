import React, { useState } from "react";
import Weather from "./components/Weather";
import "./styles.css";

const API_KEY = "de0a2b244a74efad62ffb212b2ff2077"; // Replace with your API key

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("⚠️ Please enter a city name!");
      setWeatherData(null);
      return;
    }

    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();

      if (data.cod !== 200) {
        setError(`🚫 ${data.message}`);
        setWeatherData(null);
        return;
      }

      setWeatherData(data);
      setError(null);
    } catch (error) {
      console.error("API call failed:", error);
      setError("❌ Network error. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl shadow-xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-white mb-4">🌤️ Weather App</h1>

        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-2 text-lg border-none rounded-md focus:outline-none"
        />
        
        <button
          onClick={fetchWeather}
          className="w-full mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
        >
          Get Weather
        </button>

        {error && <p className="text-red-500 mt-3">{error}</p>}
        {weatherData && <Weather weatherData={weatherData} />}
      </div>
    </div>
  );
};

export default App;
