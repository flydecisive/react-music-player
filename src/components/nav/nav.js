import styled from 'styled-components';

export const StyledNav = styled.div`
  width: 244px;
  background-color: ${(props) => (props.theme.theme ? '#F6F5F3' : '#1c1c1c')};
  padding: 20px 0 20px 36px;
  margin-right: 20px;
  grid-column: 1 / 1;
`;

export const StyledLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`;
