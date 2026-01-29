import styles from "./click.module.css";

const ClickResponse = ({ clickResponse, totalFeedback, positiveFeedback }) => {
  return (
    <div className={styles.stats}>
      <p className={styles.stat}>Good: {clickResponse.good}</p>
      <p className={styles.stat}>Neutral: {clickResponse.neutral}</p>
      <p className={styles.stat}>Bad: {clickResponse.bad}</p>
      <p className={styles.stat}>Total: {totalFeedback}</p>
      <p className={`${styles.stat} ${styles.positive}`}>
        Positive: {positiveFeedback}%
      </p>
    </div>
  );
};

export default ClickResponse;



