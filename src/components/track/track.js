import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  align-items: center;
  cursor: pointer;
`;

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-column: 1 / 6;
  gap: 17px;
`;

export const StyledAuthor = styled.div`
  grid-column: 6 / 12;
  display: flex;
  justify-content: flex-start;
  color: #ffffff;
`;

export const StyledAlbum = styled.div`
  grid-column: 12 / 16;
`;

export const StyledTime = styled.div`
  grid-column: 16 / 17;
  width: 70px;
  display: flex;
  align-items: center;
`;

export const StyledTitleImage = styled.div`
  width: 35px;
  height: 35px;
  padding: 16px;
  background: ${(props) => (props.theme.theme ? '#F6F4F4' : '#313131')};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const StyledTitleSvg = styled.svg`
  width: 20px;
  height: 20px;
  fill: transparent;
  position: absolute;
  stroke: ${(props) => (props.theme.theme ? '#B1B1B1' : '#4e4e4e')};
`;

export const StyledText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => (props.theme.theme ? '#000' : '#ffffff')};
`;

export const StyledLightText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => (props.theme.theme ? '#B1B1B1' : '#4E4E4E')};
`;

export const StyledLikeSvg = styled.svg`
  width: 18px;
  height: 16px;
  margin-right: 14px;
  fill: transparent;
  stroke: ${(props) => (props.theme.theme ? '#B1B1B1' : '#4E4E4E')};
`;

export const StyledTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: ${(props) => (props.theme.theme ? '#B1B1B1' : '#4E4E4E')};
`;
