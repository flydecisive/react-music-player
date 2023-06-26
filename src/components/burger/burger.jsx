import burgerLineStyles from './burger.module.css';
import burgerStyles from '../nav/nav.module.css';

function Burger() {
  return (
    <div className={`${burgerStyles.burger} burger`}>
      <span className={burgerLineStyles.line} />
      <span className={burgerLineStyles.line} />
      <span className={burgerLineStyles.line} />
    </div>
  );
}

export default Burger;
