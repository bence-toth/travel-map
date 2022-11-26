import countries from "./countries";

import type { Travel } from "./travels";

import "./Map.css";
import { RefObject } from "react";

interface MapProps {
  travels: Travel[];
  date: number;
  mapRef: RefObject<SVGSVGElement>;
}

const Map = ({ travels, date, mapRef }: MapProps) => {
  return (
    <div className="map-wrapper">
      <svg className="map" viewBox="0 0 1009.6727 665.96301" ref={mapRef}>
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
