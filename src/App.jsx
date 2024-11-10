import Forcast from "./components/Forcast";
import Inputs from "./components/Inputs";
import TempandDetails from "./components/TempAndDetails";
import TimeandLocation from "./components/TimeandLocation";
import TopButtons from "./components/TopButtons";
import getFormattedWeatherData from "./Services/Services";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const App = () => {
  const [query, setQuery] = useState({ q: "mombasa" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const cityName = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
      setWeather(data);
    });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  return (
    <div className="text-white w-full py-5 px-5 md:px-16 lg:px-32 bg-gradient-to-br  from-cyan-400 to-blue-700 min-h-screen">
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />
      {weather && (
        <>
          <TimeandLocation weather={weather} />
          <TempandDetails weather={weather} units={units} />
          <Forcast title="3-hour forecast" data={weather.hourly} />
          <Forcast title="Daily forecast" data={weather.daily} />
        </>
      )}
      <ToastContainer
        autoClose={2500}
        hideProgressBar={true}
        theme="dark"
        position="bottom-left"
      />
    </div>
  );
};

export default App;
