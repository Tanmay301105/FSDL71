const Weather = ({ weatherData }) => {
  return (
    <div className="mt-5 text-white">
      <h2 className="text-2xl font-semibold">{weatherData.name}, {weatherData.sys.country}</h2>
      <p className="text-lg">{weatherData.weather[0].description}</p>
      <p className="text-3xl font-bold">{weatherData.main.temp}°C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
