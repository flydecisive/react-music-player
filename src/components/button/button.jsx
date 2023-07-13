import styles from './button.module.css';

function ButtonComponent({ heading, id }) {
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
    <button className={`${styles.button} ${buttonStyle}`} type="submit">
      {heading}
    </button>
  );
}

export default ButtonComponent;
