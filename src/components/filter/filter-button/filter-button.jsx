import Dropdown from '../../dropdown/dropdown.jsx';
import { StyledButton, StyledButtonActive } from './filter-button';
import { useThemeContext } from '../../../contexts/theme';
import FilterCounter from '../../filter-counter/filter-counter.jsx';

function FilterButton({
  toggleButton,
  dropdownList,
  text,
  id,
  buttonsState,
  getFilterValue,
  filterValues,
}) {
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
          {filterValues.length > 0 ? (
            <FilterCounter count={filterValues.length} />
          ) : (
            ''
          )}
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
          {filterValues.length > 0 ? (
            <FilterCounter count={filterValues.length} />
          ) : (
            ''
          )}
        </StyledButtonActive>
      )}

      {visible ? (
        <Dropdown
          id={id}
          getFilterValue={getFilterValue}
          dropdownList={dropdownList}
          filterValues={filterValues}
        />
      ) : null}
    </div>
  );
}

export default FilterButton;
