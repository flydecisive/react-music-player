import styled from 'styled-components';

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  max-height: ${(props) => props.maxHeight};
`;

export const StyledText = styled.p`
  color: ${(props) => (props.theme.theme ? '#000' : '#fff')};
  margin-top: 20px;
  fonst-size: 24px;
`;
