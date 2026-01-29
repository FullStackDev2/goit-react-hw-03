import styles from "./cafe.module.css";

const CafeFeedback = ({
  clickResponse,
  setClickResponse,
  totalFeedback,
  onReset,
}) => {
  const handleClick = (type) => {
    setClickResponse({
      ...clickResponse,
      [type]: clickResponse[type] + 1,
    });
  };

  
return (
  <div className={styles.options}>
    <button
      className={styles.good}
      onClick={() => handleClick("good")}
    >
      Good
    </button>

    <button
      className={styles.neutral}
      onClick={() => handleClick("neutral")}
    >
      Neutral
    </button>

    <button
      className={styles.bad}
      onClick={() => handleClick("bad")}
    >
      Bad
    </button>

    {totalFeedback > 0 && (
      <button
        className={styles.reset}
        onClick={onReset}
      >
        Reset
      </button>
    )}
  </div>
);
};

export default CafeFeedback;
