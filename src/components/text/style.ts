import styled from "styled-components";

export const Text = styled.p.attrs((props: {rated: boolean}) => props)`
    color: hsl(217, 12%, 63%);
    text-align: ${props => props.rated ?'center' :'unset'};
`