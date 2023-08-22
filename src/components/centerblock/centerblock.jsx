// import { useState, useEffect } from 'react';
import { useState } from 'react';
import Search from '../search/search.jsx';
import Filter from '../filter/filter.jsx';
import CenterblockContent from './centerblock-content/centerblock-content.jsx';
import { useThemeContext } from '../../contexts/theme';
import { useTracksContext } from '../../contexts/tracks';
import { createFilterList } from '../../consts/helpers';

import { StyledCenterblock, StyledHeading } from './centerblock';

function Centerblock({ loading, errorMessage }) {
  const tracks = useTracksContext();
  const [buttonId, setButtonId] = useState();
  const [filterValues, setFilterValues] = useState({
    genre: [],
    name: [],
    date: [],
  });
  const { theme } = useThemeContext();
  const [searchValue, setSearchValue] = useState();

  function detectedFilter(value, values, arr, id) {
    if (id === 0) {
      for (let i = 0; i < arr?.length; i += 1) {
        if (!values.name.includes(value)) {
          values.name.push(value);
        } else {
          const index = values.name.indexOf(value);
          values.name.splice(index, 1);
        }
      }
    } else if (id === 1) {
      values.date.splice(0, values.date.length);
      values.date.push(value);
    } else if (id === 2) {
      for (let i = 0; i < arr?.length; i += 1) {
        if (!values.genre.includes(value)) {
          values.genre.push(value);
        } else {
          const index = values.genre.indexOf(value);
          values.genre.splice(index, 1);
        }
      }
    }
  }

  const getSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  // Добавление фильтров
  const getFilterValue = (e) => {
    const values = { ...filterValues };

    let filterList;
    if (buttonId === 0 || buttonId === 2) {
      filterList = createFilterList(tracks, buttonId);
    } else {
      filterList = [e.target.name];
    }

    if (tracks) {
      if (buttonId === 0 || buttonId === 2) {
        detectedFilter(e.target.textContent, values, filterList, buttonId);
      } else {
        detectedFilter(e.target.name, values, filterList, buttonId);
      }

      setFilterValues(values);
    }
  };

  return (
    <StyledCenterblock>
      <Search getSearchValue={getSearchValue} />
      <StyledHeading theme={{ theme }}>Треки</StyledHeading>
      <Filter
        getFilterValue={getFilterValue}
        filterValues={filterValues}
        setButtonId={setButtonId}
      />
      <CenterblockContent
        loading={loading}
        errorMessage={errorMessage}
        searchValue={searchValue}
        filterValues={filterValues}
      />
    </StyledCenterblock>
  );
}

export default Centerblock;
