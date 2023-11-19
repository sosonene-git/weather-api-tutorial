import axios from "axios";
import { useState, useEffect } from 'react';

const WeatherCard = () => {
  const apiKey = "6f0b5959f917def7939b6cd332e1f2da";
  const [post, setPost] = useState(null);
  const [city, setCity] = useState('');

  const baseURL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&lang=ja&units=metric`;

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`${baseURL}&q=${city}`);
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setPost(null);
    }
  };

  const changedCity = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    if (city) {
      fetchWeatherData();
    }
  };

  return (
    <div className="mb-16">
      <input
        type="text"
        placeholder="どこの天気が知りたいですか？"
        value={city}
        onChange={changedCity}
      />
      <button onClick={handleSearch}>検索</button>

      {post && (
        <>
          <p className="mb-4">{post.name}</p>
          <p className="mb-4">空模様: {post.weather[0].description}</p>
          <p>気温: {post.main.temp}</p>
        </>
      )}
    </div>
  );
}

export default WeatherCard;
