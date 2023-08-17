import Dropdown from '../../dropdown/dropdown.jsx';
import { StyledButton, StyledButtonActive } from './filter-button';
import { useThemeContext } from '../../../contexts/theme';

function FilterButton({ toggleButton, dropdownList, text, id, buttonsState }) {
  const { theme } = useThemeContext();
  let visible;
  if (buttonsState) {
    visible = buttonsState[id];
  }

  return (
    <div>
      {!visible ? (
        <StyledButton
          theme={{ theme }}
          id={id}
          onClick={(e) => toggleButton(e)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => toggleButton(e)}
        >
          {text}
        </StyledButton>
      ) : (
        <StyledButtonActive
          theme={{ theme }}
          id={id}
          onClick={(e) => toggleButton(e)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => toggleButton(e)}
        >
          {text}
        </StyledButtonActive>
      )}
      {visible ? <Dropdown dropdownList={dropdownList} /> : null}
    </div>
  );
}

export default FilterButton;
