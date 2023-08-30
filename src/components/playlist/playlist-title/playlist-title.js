import styled from 'styled-components';

export const StyledTitle = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  margin-bottom: 24px;
  background-clip: content-box;
  color: ${(props) => (props.theme.theme ? '#000' : '#ffffff')};
  margin-right: 18px;
`;

export const StyledCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${(props) => (props.theme.theme ? '#B1B1B1' : '#4E4E4E')};
`;

export const StyledSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

export const StyledCol01 = styled.div`
  grid-column: 1 / 6;
`;
