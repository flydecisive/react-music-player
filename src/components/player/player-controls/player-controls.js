import styled from 'styled-components';

export const StyledControls = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 27px 0 31px;
`;

export const StyledButton = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPrevSvg = styled.svg`
  margin-right: 23px;
  width: 15px;
  height: 14px;
  fill: ${(props) => (props.theme.theme ? '#B1B1B1' : '#d9d9d9')};
  stroke: ${(props) => (props.theme.theme ? '#B1B1B1' : '#d9d9d9')};

  &:hover {
    fill: ${(props) => (props.theme.theme ? '#707070' : '#696969')};
    stroke: ${(props) => (props.theme.theme ? '#707070' : '#696969')};
  }

  &:active {
    fill: ${(props) => (props.theme.theme ? '#B1B1B1' : '#d9d9d9')};
    stroke: ${(props) => (props.theme.theme ? '#B1B1B1' : '#d9d9d9')};
  }
`;

export const StyledPlaySvg = styled.svg`
  margin-right: 18px;
  width: 20px;
  height: 20px;
  fill: ${(props) => (props.theme.theme ? '#B1B1B1' : '#d9d9d9')};
  stroke: ${(props) => (props.theme.theme ? '#B1B1B1' : '#d9d9d9')};

  &:hover {
    fill: ${(props) => (props.theme.theme ? '#707070' : '#696969')};
    stroke: ${(props) => (props.theme.theme ? '#707070' : '#696969')};
  }

  &:active {
    fill: ${(props) => (props.theme.theme ? '#B1B1B1' : '#d9d9d9')};
    stroke: ${(props) => (props.theme.theme ? '#B1B1B1' : '#d9d9d9')};
  }
`;

export const StyledNextSvg = styled.svg`
  margin-right: 28px;
  fill: #d9d9d9;
  width: 15px;
  height: 14px;
  fill: ${(props) => (props.theme.theme ? '#B1B1B1' : '#d9d9d9')};
  stroke: ${(props) => (props.theme.theme ? '#B1B1B1' : '#d9d9d9')};

  &:hover {
    fill: ${(props) => (props.theme.theme ? '#707070' : '#696969')};
    stroke: ${(props) => (props.theme.theme ? '#707070' : '#696969')};
  }

  &:active {
    fill: ${(props) => (props.theme.theme ? '#B1B1B1' : '#d9d9d9')};
    stroke: ${(props) => (props.theme.theme ? '#B1B1B1' : '#d9d9d9')};
  }
`;

export const StyledRepeatSvg = styled.svg`
  margin-right: 24px;
  width: 20px;
  height: 20px;
  fill: ${(props) => (props.theme.theme ? '#B1B1B1' : '#696969')};
  stroke: ${(props) => (props.theme.theme ? '#B1B1B1' : '#696969')};

  &:hover {
    fill: ${(props) => (props.theme.theme ? '#707070' : '#acacac')};
    stroke: ${(props) => (props.theme.theme ? '#707070' : '#acacac')};
  }

  &:active {
    fill: ${(props) => (props.theme.theme ? '#000000' : '#ffffff')};
    stroke: ${(props) => (props.theme.theme ? '#000000' : '#ffffff')};
  }
`;

export const StyledShuffleSvg = styled.svg`
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
  fill: ${(props) => (props.theme.theme ? '#B1B1B1' : '#696969')};
  stroke: ${(props) => (props.theme.theme ? '#B1B1B1' : '#696969')};

  &:hover {
    fill: ${(props) => (props.theme.theme ? '#707070' : '#acacac')};
    stroke: ${(props) => (props.theme.theme ? '#707070' : '#acacac')};
  }

  &:active {
    fill: ${(props) => (props.theme.theme ? '#000000' : '#ffffff')};
    stroke: ${(props) => (props.theme.theme ? '#000000' : '#ffffff')};
  }
`;

export const StyledActiveSvg = styled.svg`
  display: flex;
  align-items: center;
  margin-right: ${(props) => (props?.loop?.loopClick ? '24px' : '')};
  width: 20px;
  height: 20px;
  fill: ${(props) => (props.theme.theme ? '#000000' : '#ffffff')};
  stroke: ${(props) => (props.theme.theme ? '#000000' : '#ffffff')};
`;
