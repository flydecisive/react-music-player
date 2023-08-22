// панель поиска

import { ReactComponent as SearchIcon } from '../../assets/img/icon/search.svg';
import { useThemeContext } from '../../contexts/theme';
import { StyledSearch, StyledInput, StyledSvg } from './search';

function Search({ getSearchValue }) {
  const { theme } = useThemeContext();

  return (
    <StyledSearch>
      <StyledSvg>
        <SearchIcon stroke={theme ? '#000' : '#fff'} />
      </StyledSvg>
      <StyledInput
        theme={{ theme }}
        type="search"
        placeholder="Поиск"
        name="search"
        onInput={(event) => getSearchValue(event)}
      />
    </StyledSearch>
  );
}

export default Search;
