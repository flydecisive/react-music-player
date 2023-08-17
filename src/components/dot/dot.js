import styled, { keyframes } from 'styled-components';

export const StyledWrapper = styled.div`
  width: 25px;
  height: 25px;
  background: ${(props) => (props.theme.theme ? '#F6F4F4' : '#313131')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const pulse = keyframes`
0% {
      transform: scale(1);
    }
  
    50% {
      transform: scale(1.1);
    }
  
    100% {
      transform: scale(1);
    }
`;

export const StyledDot = styled.div`
  width: 20px;
  height: 20px;
  background-color: #ad61ff;
  border-radius: 50%;

  &[data-playing='true'] {
    animation: ${pulse} 1s ease 0s infinite normal forwards;
  }
`;
