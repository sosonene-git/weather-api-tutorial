import axios from "axios";
import { useState, useEffect } from 'react';

const WeatherCard = () => {
  const apiKey = "6f0b5959f917def7939b6cd332e1f2da";
  const [post, setPost] = useState(null);
  const [city, setCity] = useState('');

  const baseURL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&lang=ja&units=metric`;

  //天気取得
  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`${baseURL}&q=${city}`);
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setPost(null);
    }
  };

// 入力フィールドの値が変更された際の処理
  const changedCity = (e) => {
    setCity(e.target.value);

  };

//検索ボタン クリック時
  const handleSearch = () => {

    //city stateが空でない場合に天気取得
    if (city) {
      fetchWeatherData();
    }
  };

  return (
    <div className="mb-8 p-8 bg-gray-100 rounded-md shadow-md">
      <input
        type="text"
        placeholder="どこの天気が知りたいですか？"
        value={city}
        onChange={changedCity}
        className="w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        onClick={handleSearch}
        className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        検索
      </button>

      {post && (
        <div className="mt-4">
          <p className="mb-2 text-lg font-semibold">{post.name}</p>
          <p className="mb-2">空模様: {post.weather[0].description}</p>
          <p>気温: {post.main.temp} °C</p>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
