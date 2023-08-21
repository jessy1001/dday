import React, { useState, useEffect, useMemo } from "react";
import mainLogo from "./mainLogo.png";
import picture1 from "./Picture1.png";
import picture2 from "./Picture2.jpg";
import picture3 from "./Picture3.png";
import "./App.css";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function App() {
  const getTimeRemaining = (targetDate: Date): TimeRemaining => {
    const now = new Date();
    const timeRemainingMillis = targetDate.getTime() - now.getTime();

    if (timeRemainingMillis <= 0) {
      setCounting(false);
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeRemainingMillis / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemainingMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemainingMillis % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemainingMillis % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        setCounting(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const eventDate = useMemo(() => new Date("2023-08-26T09:00:00"), []);
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(
    getTimeRemaining(eventDate)
  );
  const [counting, setCounting] = useState<boolean>(false);

  useEffect(() => {
    if (counting) {
      const interval = setInterval(() => {
        setTimeRemaining(getTimeRemaining(eventDate));
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [counting, eventDate]);

  const startCountdown = () => {
    setCounting(true);
  };

  return (
    <div className="countdown-app">
      <div className="container">
        <img src={mainLogo} width={400} alt={""} />
        <div className="mainTitleDiv">
          <div>{`22nd Triennial Congress of the International Ergonomics Association
        (IEA)`}</div>
          <div className="mainEvent">IEA 2024</div>
        </div>
        <div className="middleTitleDiv">
          <div>Joint Conference with</div>
          <div>
            The International Council on Systems Engineering Human Systems
            Integration WG Conference
          </div>
          <div>INCOSE HIS 2024</div>
        </div>
        <div className="date">
          August 25-29, 2024 ICC JEJU, Republic of Korea
        </div>
        <div className="countdown">
          {!counting ? (
            <>
              <div className="dd">D - </div>
              <button onClick={startCountdown} className="start-button">
                Start
              </button>
            </>
          ) : (
            <div className="count-numbers">
              <div className="dd">D - </div>
              <span>{timeRemaining.days}</span> days{" "}
              <span>{timeRemaining.hours}</span> hrs.{" "}
              <span>{timeRemaining.minutes}</span> min.{" "}
              <span>{timeRemaining.seconds}</span> sec.
            </div>
          )}
        </div>
        <div className="sponsors">
          <img src={picture1} width={180} height={80} alt={""} />
          <img src={picture2} width={180} height={80} alt={""} />
          <img src={picture3} width={100} height={80} alt={""} />
        </div>
      </div>
    </div>
  );
}
{
}
{
  /* <div className="countdown-item">
            <span>{timeRemaining.days}</span> days
          </div>
          <div className="countdown-item">
            <span>{timeRemaining.hours}</span> hours
          </div>
          <div className="countdown-item">
            <span>{timeRemaining.minutes}</span> minutes
          </div>
          <div className="countdown-item">
            <span>{timeRemaining.seconds}</span> seconds
          </div> */
}
export default App;
