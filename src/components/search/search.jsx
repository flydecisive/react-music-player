// панель поиска

import { ReactComponent as SearchIcon } from '../../assets/img/icon/search.svg';
import { useThemeContext } from '../../contexts/theme';
import { StyledSearch, StyledText, StyledSvg } from './search';

function Search() {
  const { theme } = useThemeContext();
  return (
    <StyledSearch>
      <StyledSvg>
        <SearchIcon stroke={theme ? '#000' : '#fff'} />
      </StyledSvg>
      <StyledText
        theme={{ theme }}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </StyledSearch>
  );
}

export default Search;
