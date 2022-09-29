import styled from "styled-components";

export const Rating = styled.form`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 'radio1 radio2 radio3 radio4 radio5' 'submit submit submit submit submit';
    gap: 1rem;  
`