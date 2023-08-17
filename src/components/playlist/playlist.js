import styled from 'styled-components';

const StyledPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background-clip: content-box;
  padding-right: 8px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => (props.theme.theme ? '#F6F5F3' : '#313131')};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => (props.theme.theme ? '#313131' : '#F6F5F3')};
    border-radius: 10px;
    width: 4px;
    height: 65px;
  }
`;

export default StyledPlaylist;
