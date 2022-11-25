import { useState, useCallback, useMemo } from "react";
import type { ChangeEvent } from "react";

import Map from "./Map";

import travels from "./travels";
import DateSlider from "./DateSlider";

const App = () => {
  const [date, setDate] = useState(travels[0].date.getTime());

  const onHandleDateChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setDate(Number(event.target.value));
    },
    []
  );

  const firstTravelDate = useMemo(() => travels[0].date.getTime(), []);

  return (
    <>
      <Map travels={travels} />
      <DateSlider
        date={date}
        onHandleDateChange={onHandleDateChange}
        firstTravelDate={firstTravelDate}
      />
    </>
  );
};

export default App;
