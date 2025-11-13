"use client";
import { useState } from "react";

export default function Checkin() {
  const [today, setToday] = useState(false);

  const doCheckin = () => {
    const last = localStorage.getItem("checkin-day");
    const now = new Date().toDateString();
    if (last === now) return;
    localStorage.setItem("checkin-day", now);
    setToday(true);
  };

  return (
    <div className="p-4 bg-white dark:bg-[#141417] border rounded-xl flex justify-between items-center">
      <p className="text-sm">Daily Check-in</p>
      <button
        onClick={doCheckin}
        className="px-3 py-1 bg-blue-600 text-white rounded-lg"
      >
        {today ? "Done" : "Check-in"}
      </button>
    </div>
  );
}