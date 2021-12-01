import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height:100vh;
        width: 100vw;

        font-family: 'Courier New', Courier, monospace;
        font-size: 1rem;
    }
    input, button{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
        
    }

    button:hover{
        cursor: pointer;
    }

    h1,h2,h3,h4{
        font-weight: 700;
    }

    a{
        text-decoration: none;
    }
`;
