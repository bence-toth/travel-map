import type { ChangeEvent } from "react";

import "./DateSlider.css";

interface DateSliderProps {
  date: number;
  onHandleDateChange: (event: ChangeEvent<HTMLInputElement>) => void;
  firstTravelDate: number;
}

const now = Date.now();

const DateSlider = ({
  date,
  onHandleDateChange,
  firstTravelDate,
}: DateSliderProps) => (
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
    <span className="date-display">{date}</span>
  </div>
);

export default DateSlider;
