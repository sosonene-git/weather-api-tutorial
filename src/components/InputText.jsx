import { useState } from 'react';

const InputText = () => {

  const [city, setCity] = useState('');


  const fetchWeatherData = ()=>{
console.log("click")
  }

  return (
    <div className="mb-16">
      <input
      type="textarea"
      placeholder="どこの天気が知りたいですか？"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      ></input>
      <button onClick={fetchWeatherData}>検索</button>
    </div>
  );

}

export default InputText;
