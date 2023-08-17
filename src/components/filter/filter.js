import styled from 'styled-components';

export const StyledFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
  gap: 10px;
`;

export const StyledTitle = styled.div`
  ont-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
  color: ${(props) => (props.theme.theme ? '#000' : '#fff')};
`;
