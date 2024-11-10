import PropTypes from "prop-types";

const TimeandLocation = ({
  weather: { formattedLocalTime, name, country },
}) => {
  return (
    <div className="">
      <div className="flex items-center justify-center my-4">
        <p className="text-sm md:text-xl font-extralight">
          {formattedLocalTime}
        </p>
      </div>
      <div className="flex items-center justify-center my-2">
        <p className="text-2xl md:text-3xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

TimeandLocation.propTypes = {
  weather: PropTypes.shape({
    formattedLocalTime: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};

export default TimeandLocation;
