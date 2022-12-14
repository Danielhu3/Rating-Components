import styled from "styled-components";

export const Button = styled.button`
    background:hsl(25, 97%, 53%);
    border: none;
    border-radius: 2rem;
    color: hsl(0, 0%, 100%);

    padding: 1rem;
    letter-spacing:0.2rem;
    cursor: pointer;
    width: 100%;

    grid-area: submit;

    &:hover{
        background-color: hsl(0, 0%, 100%);
        color:hsl(25, 97%, 53%);
    }
`