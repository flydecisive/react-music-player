import styles from './auth-page.module.css';
import blackLogo from '../../assets/img/black-logo.png';

function AuthPage({ inputs, buttons }) {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <img src={blackLogo} alt="Logo" />
          <div className={styles.form}>
            <div className={styles.inputs}>{inputs}</div>

            <div className={styles.buttons}>{buttons}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
