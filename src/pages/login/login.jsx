import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './login.module.css';
import { authUser, getToken } from '../../api';
import blackLogo from '../../assets/img/black-logo.png';
import { useLoginContext } from '../../contexts/login';
import { useUserContext } from '../../contexts/user';
import { useTokenContext } from '../../contexts/token';

function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const { toggleLogin } = useLoginContext();
  const { setCurrentUser } = useUserContext();
  const { setToken } = useTokenContext();

  const getAuthUser = async () => {
    try {
      setDisabled(true);
      const user = await authUser(login, password);

      if (user.detail) {
        setErrorMessage(user.detail);
      }

      if (user.id) {
        setCurrentUser(user);
        toggleLogin(true);
        navigate('/');
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setDisabled(false);
      const token = await getToken(login, password);
      setToken(token);
      localStorage.setItem('refresh', token.refresh);
    }
  };

  const loginClick = () => {
    if (login?.length === 0) {
      setErrorMessage('Введите логин');
    } else if (password?.length === 0) {
      setErrorMessage('Введите пароль');
    } else {
      getAuthUser();
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

              <p className={styles.error}>{errorMessage}</p>
            </div>

            <div className={styles.buttons}>
              <button
                className={`${styles.login} ${styles.button}`}
                type="submit"
                onClick={() => loginClick()}
                disabled={disabled}
              >
                Войти
              </button>
              <button
                className={`${styles.register} ${styles.button}`}
                type="submit"
                onClick={() => navigate('/register')}
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

export default LoginPage;
