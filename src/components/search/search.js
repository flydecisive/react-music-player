import styled from 'styled-components';

export const StyledSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledSvg = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  fill: transparent;
`;

export const StyledInput = styled.input`
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => (props.theme.theme ? '#000' : '#ffffff')};

  &::placeholder {
    background-color: transparent;
    color: ${(props) => (props.theme.theme ? '#000' : '#ffffff')};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &:focus {
    outline: none;
    color: ${(props) => (props.theme.theme ? '#000' : '#ffffff')};
  }
`;
