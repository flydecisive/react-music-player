import { NavLink, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import styles from './auth-page.module.css';
import blackLogo from '../../assets/img/black-logo.png';
import ButtonComponent from '../button/button';

function AuthPage({ inputs, type }) {
  const navigate = useNavigate();

  useEffect(() => {
    document.cookie = 'token=false';
  }, []);

  const setCookie = () => {
    document.cookie = 'token=true';
    navigate('/');
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <img src={blackLogo} alt="Logo" />
          <div className={styles.form}>
            <div className={styles.inputs}>{inputs}</div>

            <div className={styles.buttons}>
              {type === 'login' ? (
                <>
                  <ButtonComponent
                    heading="Войти"
                    id={1}
                    setCookie={setCookie}
                  />
                  <NavLink to="/register">
                    <ButtonComponent heading="Зарегистрироваться" id={2} />
                  </NavLink>
                </>
              ) : (
                <NavLink to="/login">
                  <ButtonComponent heading="Зарегистрироваться" id={3} />
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
