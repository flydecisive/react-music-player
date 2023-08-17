// import styles from './dropdown.module.css';
import { StyledWrapper, StyledList } from './dropdown';
import { useThemeContext } from '../../contexts/theme';

function Dropdown({ dropdownList }) {
  const { theme } = useThemeContext();
  const elements = dropdownList?.map((item) => <li key={item}>{item}</li>);

  return (
    <StyledWrapper theme={{ theme }}>
      <StyledList theme={{ theme }}>{elements}</StyledList>
    </StyledWrapper>
  );
}

export default Dropdown;
