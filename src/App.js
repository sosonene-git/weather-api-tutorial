import "./App.css";
import WeatherCard from "./components/WeatherCard";
// import InputText from "./components/InputText";

function App() {
  return (
    <div className="App">
      <div className="m-10">
        <h2>Weather News</h2>
        {/* <InputText /> */}
        <WeatherCard />
      </div>
    </div>
  );
}

export default App;
