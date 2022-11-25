import { useState, useCallback, useMemo } from "react";
import type { ChangeEvent } from "react";

import travels from "./travels";

const useDate = () => {
  const [date, setDate] = useState(travels[0].date.getTime());

  const onHandleDateChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setDate(Number(event.target.value));
    },
    []
  );

  const firstTravelDate = useMemo(() => travels[0].date.getTime(), []);

  return { date, onHandleDateChange, firstTravelDate };
};

export default useDate;
