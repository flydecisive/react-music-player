import styled from 'styled-components';

export const StyledBurger = styled.div`
  width: 20px;
  height: 36px;
  ${'' /* padding: 5px 0; */}
  display: flex;
  flex-direction: column;
  gap: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledBurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: ${(props) => (props.theme.theme ? '#000000' : '#d3d3d3')};
`;
