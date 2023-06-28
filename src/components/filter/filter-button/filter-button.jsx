import Dropdown from '../../dropdown/dropdown';
import styles from '../filter.module.css';

function FilterButton({ toggleButton, dropdownList, text, id, buttonsState }) {
  let visible;
  if (buttonsState) {
    visible = buttonsState[id];
  }

  return (
    <div>
      <div
        id={id}
        className={`${styles.button} button-author _btn-text ${
          visible ? styles.active : ''
        }`}
        onClick={(e) => toggleButton(e)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => toggleButton(e)}
      >
        {text}
      </div>
      {visible ? <Dropdown dropdownList={dropdownList} /> : null}
    </div>
  );
}

export default FilterButton;
