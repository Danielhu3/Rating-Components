import {createGlobalStyle} from 'styled-components'



export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Overpass', sans-serif;
    }
    html{
  font-size: 62.5%;
    }
    body{
        background: hsl(216, 12%, 8%);
        font-size: 1.5rem;
        font-weight: 400;
        color: white;
    }
    .App{
       display: flex;
       justify-content: center;
       align-items: center;
       min-height: 100vh;
    }
`
