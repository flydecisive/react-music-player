import styled from 'styled-components';

const StyledBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${(props) => (props.theme.theme ? '#fff' : '#181818')};
`;

export default StyledBar;
