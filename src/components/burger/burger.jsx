import burgerLineStyles from './burger.module.css';
import burgerStyles from '../nav/nav.module.css';

function Burger({ toggleBurgerClick }) {
  return (
    <div
      className={`${burgerStyles.burger} burger`}
      onClick={toggleBurgerClick}
      role="button"
      tabIndex={0}
      onKeyDown={toggleBurgerClick}
    >
      <span className={burgerLineStyles.line} />
      <span className={burgerLineStyles.line} />
      <span className={burgerLineStyles.line} />
    </div>
  );
}

export default Burger;
