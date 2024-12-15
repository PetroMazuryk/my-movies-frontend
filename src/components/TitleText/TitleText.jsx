import styles from './TitleText.module.css';

// const TitleText = ({ text, className = '' }) => {
//   return <h2 className={`${styles.titleText} ${className}`}>{text}</h2>;
// };
const TitleText = ({ children }) => {
  return <h2 className={styles.titleText}>{children}</h2>;
};

export default TitleText;
