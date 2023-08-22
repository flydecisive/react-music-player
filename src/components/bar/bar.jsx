/* eslint-disable import/no-extraneous-dependencies */

import BarContent from './bar-content/bar-content.jsx';
import StyledBar from './bar';
import { useThemeContext } from '../../contexts/theme';

function Bar({ loading }) {
  const { theme } = useThemeContext();
  return (
    <StyledBar theme={{ theme }}>
      <BarContent loading={loading} />
    </StyledBar>
  );
}

export default Bar;
