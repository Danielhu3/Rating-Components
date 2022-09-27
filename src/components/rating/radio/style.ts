import styled from "styled-components";

export const Radio = styled.input`
    display: none;
    
    &:checked + label{
        background: hsl(217, 12%, 63%);
        color: hsl(0, 0%, 100%);
    }

    &:hover + label{
        background: hsl(25, 97%, 53%);
        color: hsl(0, 0%, 100%);;
    }
`