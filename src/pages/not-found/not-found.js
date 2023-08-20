import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  backgtound: ${(props) => (props.theme.theme ? '#fff' : '#000')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

export const StyledTitle = styled.h1`
  color: ${(props) => (props.theme.theme ? '#000' : '#fff')};
  font-size: 160px;
  font-style: normal;
  font-weight: 400;
  line-height: 168px;
`;

export const StyledHeading = styled.h2`
  color: ${(props) => (props.theme.theme ? '#000' : '#fff')};
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.p`
  color: ${(props) => (props.theme.theme ? '#B1B1B1' : '#4E4E4E')};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.054px;
  text-align: center;
  margin-top: 19px;
`;

export const StyledButton = styled.button`
  width: 278px;
  height: 52px;
  border-radius: 6px;
  background: #580ea2;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.054px;
  color: #fff;
  border: none;
  margin-top: 36px;
`;
