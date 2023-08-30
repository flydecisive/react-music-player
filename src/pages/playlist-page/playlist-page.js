import styled from "styled-components";

export const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
`

export const StyledContent = styled.div`
    grid-column: 2 / 9;
    padding-top: 20px;
    padding-right: 10px;
    display: grid;
    grid-template-rows: 12% 6% 80%;
`

export const StyledHeading = styled.h2`
    color: ${(props) => props.theme.theme ? '#000' : '#fff'};
`