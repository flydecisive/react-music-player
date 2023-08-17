import styled from 'styled-components';

export const StyledBlock = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 92px 0 0;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
`;

export const StyledImage = styled.svg`
  width: 13px;
  height: 18px;
  margin-right: 17px;
  fill: ${(props) => (props.theme.theme ? '#B1B1B1' : '#fff')};
  stroke: ${(props) => (props.theme.theme ? '#B1B1B1' : '#fff')};
`;

export const StyledProgress = styled.div`
  width: 109px;
`;

export const StyledPropgressLine = styled.input`
  width: 109px;
  display: flex;
  align-items: center;
  accent-color: ${(props) => (props.theme.theme ? '#797979' : '#fff')};
`;
