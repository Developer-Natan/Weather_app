import PropTypes from "prop-types";

const Forcast = ({ title, data }) => {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-start">
        <p className="font-medium uppercase">{title}</p>
      </div>
      <hr className="my-1" />
      <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6 justify-items-center py-4">
        {data.map((d, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full p-2"
          >
            <p className="font-light text-xs sm:text-sm">{d.title}</p>
            <img
              src={d.icon}
              alt="weather icon"
              className="w-10 sm:w-12 my-1"
            />
            <p className="font-medium text-sm sm:text-base">{`${d.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Prop validation
Forcast.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      temp: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Forcast;
