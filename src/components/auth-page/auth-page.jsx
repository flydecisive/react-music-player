import styles from './auth-page.module.css';
import blackLogo from '../../assets/img/black-logo.png';
import ButtonComponent from '../button/button';

function AuthPage({ inputs, type }) {
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
                  <ButtonComponent heading="Войти" id={1} />
                  <ButtonComponent heading="Зарегистрироваться" id={2} />
                </>
              ) : (
                <ButtonComponent heading="Зарегистрироваться" id={3} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
