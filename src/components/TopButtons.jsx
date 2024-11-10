import PropTypes from "prop-types"; // Import PropTypes

const TopButtons = ({ setQuery }) => {
  const cities = [
    { id: 1, name: "London" },
    { id: 2, name: "Sydney" },
    { id: 3, name: "Tokyo" },
    { id: 4, name: "Paris" },
    { id: 5, name: "Toronto" },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          onClick={() => setQuery({ q: city.name })}
          className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

// Prop validation
TopButtons.propTypes = {
  setQuery: PropTypes.func.isRequired, // setQuery must be a function and is required
};

export default TopButtons;