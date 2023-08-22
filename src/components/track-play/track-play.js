import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledContain = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  align-items: center;
`;

export const StyledImage = styled.div`
  width: 51px;
  height: 51px;
  background: ${(props) => (props.theme.theme ? '#F6F4F4' : '#313131')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  grid-area: image;
`;

export const StyledSvg = styled.svg`
  width: 25px;
  height: 25px;
  fill: transparent;
  stroke: ${(props) => (props.theme.theme ? '#B1B1B1' : '#4e4e4e')};
`;

export const StyledTrack = styled.div`
  grid-area: author;
  min-width: 49px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => (props.theme.theme ? '#000' : '#ffffff')};
  white-space: nowrap;
`;

export const StyledAuthor = styled.div`
  grid-area: album;
  min-width: 150px;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: ${(props) => (props.theme.theme ? '#000' : '#ffffff')};
`;
