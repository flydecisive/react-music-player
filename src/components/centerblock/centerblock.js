import styled from 'styled-components';

export const StyledCenterblock = styled.div`
  width: auto;
  flex-grow: 3;
  padding-top: 20px;
  padding-right: 10px;
  grid-column: 2 / 9;
  height: 100%;
`;

export const StyledHeading = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.8px;
  margin-bottom: 36px;
  color: ${(props) => (props.theme.theme ? '#000' : '#fff')};
`;
