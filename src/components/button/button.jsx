import styles from './button.module.css';

function ButtonComponent({ addClass, count }) {
  return (
    <button
      className={`${styles.button} ${
        count < 2 ? styles.login : styles[addClass]
      }`}
      type="submit"
    >
      {addClass === 'login' ? 'Войти' : 'Зарегистрироваться'}
    </button>
  );
}

export default ButtonComponent;
