import logo from "./logo.svg";
import "./App.css";
import WeatherCheck from "./components/WeatherCheck";

function App() {
  return (
    <div className="App">
      <div className="m-10">
        <WeatherCheck />
      </div>
    </div>
  );
}

export default App;
