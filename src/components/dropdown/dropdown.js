import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background-color: ${(props) => (props.theme.theme ? '#F6F5F3' : '#313131')};
  margin-top: 10px;
  position: absolute;
  border-radius: 12px;
  max-width: 248px;
  max-height: 305px;
  padding: 34px;
  display: block;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  overflow-y: auto;
  max-width: 180px;
  max-height: 237px;
  padding-right: 24px;
  color: ${(props) => (props.theme.theme ? '#000' : '#fff')};

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => (props.theme.theme ? '#fff' : '#000')};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => (props.theme.theme ? '#313131' : '#F6F5F3')};
    border-radius: 10px;
    width: 4px;
    height: 65px;
  }
`;
