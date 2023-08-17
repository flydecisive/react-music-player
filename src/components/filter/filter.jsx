import { useState } from 'react';
import { createFilterList } from '../../consts/helpers';
import FilterButton from './filter-button/filter-button.jsx';
import { useTracksContext } from '../../contexts/tracks';
import { StyledFilter, StyledTitle } from './filter';
import { useThemeContext } from '../../contexts/theme';

let state = {
  0: false,
  1: false,
  2: false,
};

// функция для смены состояния при нажатой кнопке
const changeState = (filterState, id) => {
  const newState = {};
  for (let i = 0; i < Object.keys(filterState).length; i += 1) {
    if (i === id) {
      newState[id] = !filterState[id];
    } else {
      newState[i] = false;
    }
  }

  state = newState;

  return newState;
};

function Filter() {
  const { theme } = useThemeContext();
  const filterElements = useTracksContext();

  const [dropdownList, setDropdownList] = useState();
  const [buttonsState, setButtonsState] = useState();

  const toggleButton = (e) => {
    const { target } = e;
    const id = Number(target.id);
    setDropdownList(createFilterList(filterElements, id));

    setButtonsState(changeState(state, id));
  };

  return (
    <StyledFilter>
      <StyledTitle theme={{ theme }}>Искать по:</StyledTitle>
      <FilterButton
        toggleButton={toggleButton}
        dropdownList={dropdownList}
        id="0"
        text="исполнителю"
        buttonsState={buttonsState}
      />
      <FilterButton
        toggleButton={toggleButton}
        dropdownList={dropdownList}
        id="1"
        text="году выпуска"
        buttonsState={buttonsState}
      />
      <FilterButton
        toggleButton={toggleButton}
        dropdownList={dropdownList}
        id="2"
        text="жанру"
        buttonsState={buttonsState}
      />
    </StyledFilter>
  );
}

export default Filter;
