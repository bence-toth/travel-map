import { useState, useCallback } from "react";
import type { ChangeEvent } from "react";

import Map from "./Map";

import travels from "./travels";

const now = Date.now();

const App = () => {
  const [date, setDate] = useState(travels[0].date.getTime());

  const updateDate = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setDate(Number(event.target.value));
  }, []);

  return (
    <>
      <Map travels={travels} />
      <input
        type="range"
        min={travels[0].date.getTime()}
        max={now}
        value={date}
        onChange={updateDate}
        step={24 * 60 * 60 * 1000}
      />
      <span style={{ color: "white" }}>{date}</span>
    </>
  );
};

export default App;
