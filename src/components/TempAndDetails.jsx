import PropTypes from "prop-types";
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const TempandDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
  units,
}) => {
  const verticalDetails = [
    {
      id: 1,
      icon: FaThermometerEmpty,
      title: "Real feel",
      value: `${feels_like.toFixed(0)}°`,
    },
    {
      id: 2,
      icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity.toFixed(0)}%`,
    },
    {
      id: 3,
      icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed(0)} ${units === "metric" ? "km/hr" : "m/s"}`,
    },
  ];

  const horizontalDetails = [
    {
      id: 1,
      icon: GiSunrise,
      title: "Sunrise",
      value: sunrise,
    },
    {
      id: 2,
      icon: GiSunset,
      title: "Sunset",
      value: sunset,
    },
    {
      id: 3,
      icon: MdKeyboardArrowUp,
      title: "High",
      value: `${temp_max.toFixed(0)}°`,
    },
    {
      id: 4,
      icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${temp_min.toFixed(0)}°`,
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-center items-center py-4 text-xl text-cyan-300">
        <p>{details}</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between py-3">
        <img
          src={icon}
          alt="weather icon"
          className="w-16 md:w-20 mb-4 md:mb-0"
        />
        <p className="text-4xl md:text-5xl">{`${temp.toFixed(0)}°`}</p>

        <div className="flex flex-col space-y-3 items-center md:items-start mt-4 md:mt-0">
          {verticalDetails.map(({ id, icon: Icon, title, value }) => (
            <div className="font-light flex text-sm items-center" key={id}>
              <Icon size={18} className="mr-1" />
              {title}: <span className="font-medium ml-1">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Table-like layout for small screens */}
      <div className="block md:hidden py-4">
        <div className="grid grid-cols-2 gap-4 mt-4">
          {horizontalDetails.map(({ id, icon: Icon, title, value }) => (
            <div
              key={id}
              className="flex items-center justify-start space-x-1 text-sm"
            >
              <Icon size={16} />
              <p className="font-light">
                {title}: <span className="font-sm">{value}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal layout for larger screens */}
      <div className="hidden md:flex flex-wrap justify-center md:justify-between items-center text-sm py-4 space-y-4 md:space-y-0 md:space-x-8">
        {horizontalDetails.map(({ id, icon: Icon, title, value }) => (
          <div key={id} className="flex flex-row items-center space-x-1">
            <Icon size={24} />
            <p className="font-semibold">
              {title}: <span className="font-medium ml-1">{value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Prop validation
TempandDetails.propTypes = {
  weather: PropTypes.shape({
    details: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    temp_min: PropTypes.number.isRequired,
    temp_max: PropTypes.number.isRequired,
    sunrise: PropTypes.string.isRequired,
    sunset: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    feels_like: PropTypes.number.isRequired,
  }).isRequired,
  units: PropTypes.string.isRequired,
};

export default TempandDetails;
