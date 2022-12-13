import Splash from "./Splash";
import Map from "./Map";
import DateSlider from "./DateSlider";

import useSplash from "./useSplash";
import useDate from "./useDate";

import travels from "./travels";

const App = () => {
  const { date, onHandleDateChange, firstTravelDate, mapRef } = useDate();

  const { shouldShowSplash, onHideSplash } = useSplash();

  if (shouldShowSplash) {
    return <Splash onHideSplash={onHideSplash} />;
  }

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
