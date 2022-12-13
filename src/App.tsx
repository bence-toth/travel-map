import Splash from "./Splash";
import Map from "./Map";
import DateSlider from "./DateSlider";

import useSplash from "./useSplash";
import useDate from "./useDate";

import travels from "./travels";

const App = () => {
  const { shouldShowSplash, onHideSplash } = useSplash();

  const { date, onHandleDateChange, firstTravelDate, mapRef } = useDate({
    shouldShowSplash,
  });

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
