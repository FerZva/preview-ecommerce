"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  initialDays: number;
  initialHours: number;
  initialMinutes: number;
  initialSeconds: number;
}

export default function CountdownTimer({
  initialDays = 3,
  initialHours = 23,
  initialMinutes = 19,
  initialSeconds = 56,
}: CountdownTimerProps) {
  const [days, setDays] = useState(initialDays);
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      } else if (days > 0) {
        setDays(days - 1);
        setHours(23);
        setMinutes(59);
        setSeconds(59);
      } else {
        // Reset the timer when it reaches zero
        setDays(initialDays);
        setHours(initialHours);
        setMinutes(initialMinutes);
        setSeconds(initialSeconds);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [
    days,
    hours,
    minutes,
    seconds,
    initialDays,
    initialHours,
    initialMinutes,
    initialSeconds,
  ]);

  // Format numbers to always have two digits
  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center gap-4 sm:gap-8">
        <div className="flex flex-col items-center">
          <span className="text-lg font-medium mb-2">Days</span>
          <div className="text-4xl sm:text-4xl font-bold">
            {formatNumber(days)}
          </div>
        </div>
        <div className="text-4xl sm:text-4xl font-bold text-red-500 mt-8">
          :
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-medium mb-2">Hours</span>
          <div className="text-4xl sm:text-4xl font-bold">
            {formatNumber(hours)}
          </div>
        </div>
        <div className="text-4xl sm:text-4xl font-bold text-red-500 mt-8">
          :
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-medium mb-2">Minutes</span>
          <div className="text-4xl sm:text-4xl font-bold">
            {formatNumber(minutes)}
          </div>
        </div>
        <div className="text-4xl sm:text-4xl font-bold text-red-500 mt-8">
          :
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-medium mb-2">Seconds</span>
          <div className="text-4xl sm:text-4xl font-bold">
            {formatNumber(seconds)}
          </div>
        </div>
      </div>
    </div>
  );
}
