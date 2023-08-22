import styled from 'styled-components';

export const StyledPersonal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 0 15px 0;
`;

export const StyledName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => (props.theme.theme ? '#000' : '#fff')};
  margin-right: 16px;
`;

export const StyledAvatar = styled.svg`
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.theme.theme ? '#fff' : '#181818')};
  border-radius: 50%;
  stroke: ${(props) => (props.theme.theme ? '#000' : '#fff')};
`;

export const StyledButton = styled.button`
  background: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;
