import styled from 'styled-components';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  max-height: ${(props) => (props.playlistHeight.id ? '335px' : '440px')};
`;

export default StyledContent;
