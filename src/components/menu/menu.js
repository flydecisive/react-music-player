import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledMenu = styled.div`
  display: block;
  visibility: visible;
`;

export const StyledList = styled.ul`
  padding: 18px 0 10px 0;
`;

export const StyledItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`;

export const StyledButton = styled.div`
  color: ${(props) => (props.theme.theme ? '#000' : '#fff')};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background: none;
  cursor: pointer;
`;

export const StyledLink = styled(NavLink)`
  color: ${(props) => (props.theme.theme ? '#000' : '#fff')};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
