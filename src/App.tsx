import Map from "./Map";

import travels from "./travels";
import DateSlider from "./DateSlider";

import useDate from "./useDate";

const App = () => {
  const { date, onHandleDateChange, firstTravelDate } = useDate();

  return (
    <>
      <Map travels={travels} date={date} />
      <DateSlider
        date={date}
        onHandleDateChange={onHandleDateChange}
        firstTravelDate={firstTravelDate}
      />
    </>
  );
};

export default App;
