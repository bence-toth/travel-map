import { useMemo } from "react";
import type { ChangeEvent } from "react";

import "./DateSlider.css";

interface DateSliderProps {
  date: number;
  onHandleDateChange: (event: ChangeEvent<HTMLInputElement>) => void;
  firstTravelDate: number;
}

const now = Date.now();

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "long",
});

const DateSlider = ({
  date,
  onHandleDateChange,
  firstTravelDate,
}: DateSliderProps) => {
  const formattedDate = useMemo(() => dateFormatter.format(date), [date]);
  return (
    <>
      <div className="date-slider-wrapper">
        <input
          className="date-slider"
          type="range"
          min={firstTravelDate}
          max={now}
          value={date}
          onChange={onHandleDateChange}
          step={24 * 60 * 60 * 1000}
        />
      </div>
      <div className="date-display-wrapper">
        <span className="date-display">{formattedDate}</span>
      </div>
    </>
  );
};

export default DateSlider;
