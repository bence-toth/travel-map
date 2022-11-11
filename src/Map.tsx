import countries from "./countries";

import "./Map.css";

const Map = ({ travels }) => {
  return (
    <div className="map-wrapper">
      <svg className="map" viewBox="0 0 1009.6727 665.96301">
        {countries.map((country) => (
          <path
            key={country.code}
            d={country.d}
            id={country.code}
            data-title={country.name}
            data-visited={travels.some(
              (travel) => travel.countryCode === country.code
            )}
          />
        ))}
      </svg>
    </div>
  );
};

export default Map;
