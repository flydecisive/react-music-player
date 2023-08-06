import styles from './dropdown.module.css';

function Dropdown({ dropdownList }) {
  const elements = dropdownList?.map((item) => <li key={item}>{item}</li>);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>{elements}</ul>
    </div>
  );
}

export default Dropdown;
