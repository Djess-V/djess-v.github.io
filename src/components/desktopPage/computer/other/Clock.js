import React from "react";

let Clock = () => {
  const [time, setTime] = React.useState(updateWatch());

  React.useEffect(() => {
    setTimeout(() => setTime(updateWatch()), 1000);
  }, [time]);

  return (
    <div className="display_clock">{`${time.hour}:${time.minutes}:${time.seconds}`}</div>
  );
};

/* ---------------------------------------------------------------------------------- */

function updateWatch() {
  const objTime = { hour: null, minutes: null, seconds: null };
  const timeNow = new Date();

  objTime.hour = addZero(timeNow.getHours());
  objTime.minutes = addZero(timeNow.getMinutes());
  objTime.seconds = addZero(timeNow.getSeconds());

  return objTime;
}

function addZero(count) {
  if (count >= 0 && count <= 9) {
    count = "0" + count;
  }

  return count;
}

/* ----------------------------------------------------------------------------------- */

Clock = React.memo(Clock);

export default Clock;
