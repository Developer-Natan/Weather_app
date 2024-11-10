import PropTypes from "prop-types";

const Forcast = ({ title, data }) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="font-medium uppercase">{title}</p>
      </div>
      <hr className="my-1" />
      <div className="flex items-center justify-between">
        {data.map((d, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">{d.titile}</p>

            <img src={d.icon} alt="weather icon" className="w-12 my-1" />
            <p className="font-medium">{`${d.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Prop validation
Forcast.propTypes = {
  title: PropTypes.string.isRequired, // title must be a string and is required
  data: PropTypes.arrayOf(
    PropTypes.shape({
      titile: PropTypes.string.isRequired, // titile (probably a typo, should be 'title') must be a string
      icon: PropTypes.string.isRequired, // icon must be a string (URL)
      temp: PropTypes.number.isRequired, // temp must be a number
    })
  ).isRequired, // data must be an array of objects, and each object must match the specified shape
};

export default Forcast;
