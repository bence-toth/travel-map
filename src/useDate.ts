import { useState, useCallback, useMemo, useEffect } from "react";
import type { ChangeEvent } from "react";

import travels from "./travels";

const oneDay = 24 * 60 * 60 * 1000;

const now = Date.now();

const useDate = () => {
  const [date, setDate] = useState(travels[0].date.getTime());

  const onHandleDateChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setDate(Number(event.target.value));
    },
    []
  );

  const firstTravelDate = useMemo(() => travels[0].date.getTime(), []);

  useEffect(() => {
    const onHandleWindowWheel = (event: WheelEvent) => {
      if (event.deltaY < 0 && date < now) {
        setDate((previousDate) => Math.min(previousDate + oneDay, now));
      } else if (event.deltaY > 0 && date > firstTravelDate) {
        setDate((previousDate) =>
          Math.max(previousDate - oneDay, firstTravelDate)
        );
      }
    };

    window.addEventListener("wheel", onHandleWindowWheel);

    return () => {
      window.removeEventListener("wheel", onHandleWindowWheel);
    };
  }, [date, firstTravelDate]);

  return { date, onHandleDateChange, firstTravelDate };
};

export default useDate;
