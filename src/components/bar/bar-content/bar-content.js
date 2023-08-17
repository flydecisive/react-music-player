import styled from 'styled-components';

export const StyledContent = styled.div`
  isplay: flex;
  flex-direction: column;
`;

export const StyledTimeDuration = styled.p`
  padding-right: 5px;
  width: 100%;
  text-align: right;
  color: ${(props) => (props.theme.theme ? '#000' : '#fff')};
`;

export const StyledPlayerBlock = styled.div`
  height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
