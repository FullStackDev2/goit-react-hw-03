import { useEffect, useState } from "react";
import ClickResponse from "./components/feedback/clickresponse";
import CafeFeedback from "./components/options/cafeoptions";
import Notification from "./components/notification/notificationfeedback";
import "./App.css";

const App = () => {
  const [clickResponse, setClickResponse] = useState(() => {
    const savedData = localStorage.getItem("feedback");
    return savedData
      ? JSON.parse(savedData)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback =
    clickResponse.good +
    clickResponse.neutral +
    clickResponse.bad;

  const positiveFeedback =
    totalFeedback > 0
      ? Math.round((clickResponse.good / totalFeedback) * 100)
      : 0;

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(clickResponse));
  }, [clickResponse]);

  const handleReset = () => {
    setClickResponse({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>

      <CafeFeedback
        clickResponse={clickResponse}
        setClickResponse={setClickResponse}
        totalFeedback={totalFeedback}
        onReset={handleReset}
      />

      {totalFeedback > 0 ? (
        <ClickResponse
          clickResponse={clickResponse}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </div>
  );
};

export default App;
