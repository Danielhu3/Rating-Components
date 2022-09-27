import styled from "styled-components";

export const Radio = styled.input`
    display: none;
    &:checked + label{
        background: red;
    }
`