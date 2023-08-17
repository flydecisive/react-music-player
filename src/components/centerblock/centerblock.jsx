// import { useState, useEffect } from 'react';
import Search from '../search/search.jsx';
import Filter from '../filter/filter.jsx';
import CenterblockContent from './centerblock-content/centerblock-content.jsx';
import { useThemeContext } from '../../contexts/theme';

import { StyledCenterblock, StyledHeading } from './centerblock';

function Centerblock({ loading, errorMessage }) {
  const { theme } = useThemeContext();

  return (
    <StyledCenterblock>
      <Search />
      <StyledHeading theme={{ theme }}>Треки</StyledHeading>
      <Filter />
      <CenterblockContent loading={loading} errorMessage={errorMessage} />
    </StyledCenterblock>
  );
}

export default Centerblock;
