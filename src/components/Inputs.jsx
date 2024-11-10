import { useState } from "react";
import PropTypes from "prop-types";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-4 md:my-6 space-y-4 md:space-y-0 md:space-x-4">
      <div className="flex flex-row w-full md:w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Search by city..."
          className="text-gray-500 text-lg md:text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase"
        />
        <BiSearch
          onClick={handleSearchClick}
          size={25}
          className="cursor-pointer transition ease-out hover:scale-125"
        />
        <BiCurrentLocation
          onClick={handleLocationClick}
          size={25}
          className="cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row w-full md:w-1/4 items-center justify-center space-x-1 md:space-x-2">
        <button
          className="text-lg md:text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => setUnits("metric")}
        >
          °C
        </button>
        <p className="text-lg md:text-2xl font-medium">|</p>
        <button
          className="text-lg md:text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => setUnits("imperial")}
        >
          °F
        </button>
      </div>
    </div>
  );
};

// Prop validation
Inputs.propTypes = {
  setQuery: PropTypes.func.isRequired,
  setUnits: PropTypes.func.isRequired,
};

export default Inputs;
