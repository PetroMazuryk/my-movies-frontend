import styles from './TextField.module.css';

const TextField = ({ label, ...props }) => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>{label}</label>
      <input className={styles.field} {...props} />
    </div>
  );
};

export default TextField;
