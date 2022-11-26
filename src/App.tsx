import Map from "./Map";

import travels from "./travels";
import DateSlider from "./DateSlider";

import useDate from "./useDate";

const App = () => {
  const { date, onHandleDateChange, firstTravelDate, mapRef } = useDate();

  return (
    <>
      <Map travels={travels} date={date} mapRef={mapRef} />
      <DateSlider
        date={date}
        onHandleDateChange={onHandleDateChange}
        firstTravelDate={firstTravelDate}
      />
    </>
  );
};

export default App;
