import { ChangeEvent, useState } from "react";
import {
  formatCurrentDateTimeToUTC,
  formatDateTimeWithoutHour
} from "../utils/date";
import moment from "moment-timezone";

export const useDateTimeEditor = () => {
  const [date, setDate] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const onSave = () => {
    if (!date) {
      alert("Please enter date");
      return;
    }

    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let dateToUtc = formatCurrentDateTimeToUTC(
      date,
      userTimeZone,
      formatDateTimeWithoutHour
    );

    if (!moment(dateToUtc).isValid()) {
      alert("Invalid date");
      return;
    }

    // send payload to server
    // for now check payload in console
    const payload = { Date: dateToUtc };
    console.log(payload);
    // assuming sending payload to server has returned status 200
    // clearning date for now
    // could be adjusted according to the requirements *
    setDate("");
  };

  return { onChange, onSave };
};
