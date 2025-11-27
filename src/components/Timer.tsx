import { useEffect, useState } from "react";

export default function OneHourTimer() {
  const ONE_HOUR = 60 * 60; // 3600 seconds
  const [secondsLeft, setSecondsLeft] = useState(ONE_HOUR);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          return ONE_HOUR; // reset timer to 1 hr
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format mm:ss
  const formatTime = () => {
    const minutes = Math.floor(secondsLeft / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (secondsLeft % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <p className="text-sm mt-1 opacity-80">
      Offer ends in{" "}
      <span className="font-semibold">{formatTime()}</span>
    </p>
  );
}
