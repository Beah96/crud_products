import "react-toastify/dist/ReactToastify.css";
import { createGlobalStyle} from "styled-components";

export const GlobalStyled = createGlobalStyle`
    :root{
        
        --color-black: #000;
        --color-white: #fff;
    }

    button{
        cursor: pointer;
    }

    body{
        font-family: 'Montserrat', sans-serif;
        height: 100vh;
        width: 100%;
        background-size: 300% 300%;
        animation: colors 15s ease infinite;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`