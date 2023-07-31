import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../api';
import styles from './register.module.css';
import blackLogo from '../../assets/img/black-logo.png';
import { useLoginContext } from '../../contexts/login';
import { useUserContext } from '../../contexts/user';

function RegisterPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  const [disabled, setDisabled] = useState();
  const navigate = useNavigate();

  const { toggleLogin } = useLoginContext();
  const { setCurrentUser } = useUserContext();

  const getRegisterUser = async () => {
    try {
      setDisabled(true);
      const user = await registerUser(login, password);
      if (user.email) {
        if (user.email !== login) {
          setErrorMessage(user.email[0]);
        }
      }

      if (user.password) {
        if (user.password !== password) {
          setErrorMessage(user.password[0]);
        }
      }

      if (user.email === login && user.id) {
        setCurrentUser(user);
        toggleLogin(true);
        navigate('/');
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setDisabled(false);
    }
  };

  const registerClick = () => {
    if (login?.length === 0) {
      setErrorMessage('Введите логин');
    } else if (password?.length === 0) {
      setErrorMessage('Введите пароль');
    } else if (confirmPassword?.length === 0) {
      setErrorMessage('Введите повторный пароль');
    } else if (confirmPassword !== password) {
      setErrorMessage('Введенные пароли отличаются');
    } else {
      getRegisterUser();
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <img src={blackLogo} alt="Logo" />
          <div className={styles.form}>
            <div className={styles.inputs}>
              <input
                type="text"
                placeholder="Логин"
                className={styles.input}
                onInput={(e) => {
                  setLogin(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Пароль"
                className={styles.input}
                onInput={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Повторите пароль"
                className={styles.input}
                onInput={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />

              <p className={styles.error}>{errorMessage}</p>
            </div>

            <div className={styles.buttons}>
              <button
                className={`${styles.register} ${styles.button}`}
                type="submit"
                onClick={() => registerClick()}
                disabled={disabled}
              >
                Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
