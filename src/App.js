/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: ${(props) => (props.theme.theme ? '#fff' : '#181818')};
`;

export default StyledApp;
