import styles from './auth-input.module.css';

function AuthInput({ placeholder }) {
  return (
    <input type="text" placeholder={placeholder} className={styles.input} />
  );
}

export default AuthInput;
