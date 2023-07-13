import styles from './button.module.css';

function ButtonComponent({ heading, id, setCookie }) {
  let buttonStyle;
  switch (id) {
    case 1:
      buttonStyle = styles.login;
      break;
    case 2:
    case 3:
      buttonStyle = styles.register;
      break;
    default:
      buttonStyle = '';
      break;
  }
  return (
    <button
      className={`${styles.button} ${buttonStyle}`}
      type="submit"
      onClick={setCookie}
    >
      {heading}
    </button>
  );
}

export default ButtonComponent;
