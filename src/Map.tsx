import countries from "./countries";

import type { Travel } from "./travels";

import "./Map.css";

interface MapProps {
  travels: Travel[];
  date: number;
}

const Map = ({ travels, date }: MapProps) => {
  return (
    <div className="map-wrapper">
      <svg className="map" viewBox="0 0 1009.6727 665.96301">
        {countries.map((country) => (
          <path
            key={country.code}
            d={country.d}
            id={country.code}
            data-title={country.name}
            data-is-visited={travels.some(
              (travel) =>
                travel.countryCode === country.code && travel.date <= date
            )}
          />
        ))}
      </svg>
    </div>
  );
};

export default Map;