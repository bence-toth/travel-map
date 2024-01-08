import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import type { ChangeEvent } from "react";

import travels from "./travels";

const oneDay = 24 * 60 * 60 * 1000;

const now = Date.now();

const useDate = () => {
  const [date, setDate] = useState(travels[0].date);

  const [lastTouch, setLastTouch] = useState<number | null>(null);

  const mapRef = useRef<SVGSVGElement>(null);

  const onHandleDateChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setDate(Number(event.target.value));
    },
    []
  );

  const firstTravelDate = useMemo(() => travels[0].date, []);

  useEffect(() => {
    const mapElement = mapRef.current;

    const onHandleWindowWheel = (event: WheelEvent) => {
      if (event.deltaY < 0 && date < now) {
        setDate((previousDate) => Math.min(previousDate + oneDay, now));
      } else if (event.deltaY > 0 && date > firstTravelDate) {
        setDate((previousDate) =>
          Math.max(previousDate - oneDay, firstTravelDate)
        );
      }
    };

    const onHandleWindowTouchStart = (event: TouchEvent) => {
      setLastTouch(event.touches[0].clientY);
    };

    const onHandleWindowTouchMove = (event: TouchEvent) => {
      if (lastTouch !== null) {
        if (event.touches[0].clientY < lastTouch && date < now) {
          setDate((previousDate) => Math.min(previousDate + oneDay, now));
        } else if (
          event.touches[0].clientY > lastTouch &&
          date > firstTravelDate
        ) {
          setDate((previousDate) =>
            Math.max(previousDate - oneDay, firstTravelDate)
          );
        }
      }
      setLastTouch(event.touches[0].clientY);
    };

    window.addEventListener("wheel", onHandleWindowWheel);
    mapElement?.addEventListener("touchstart", onHandleWindowTouchStart);
    mapElement?.addEventListener("touchmove", onHandleWindowTouchMove);

    return () => {
      window.removeEventListener("wheel", onHandleWindowWheel);
      mapElement?.addEventListener("touchstart", onHandleWindowTouchStart);
      mapElement?.removeEventListener("touchmove", onHandleWindowTouchMove);
    };
  }, [date, firstTravelDate, lastTouch]);

  return { date, onHandleDateChange, firstTravelDate, mapRef };
};

export default useDate;

export { now, oneDay };
