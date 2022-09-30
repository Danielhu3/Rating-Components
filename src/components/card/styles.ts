import styled from "styled-components";

export const Card = styled.div.attrs((props: {rated: boolean}) => props)`
    width: 32rem;
    background: hsl(213, 19%, 18%);
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    padding: 1.6rem;
    border-radius: 2rem;

    align-items: ${props => props.rated ?'center' :'unset'};
  
`