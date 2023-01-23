import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 10px;
        font-family: 'Inter', sans-serif;

        /* COLORS */

        /* primary palete */
        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;

        /* grey scale */
        --grey-100: #333333;
        --grey-50: #828282;
        --grey-20: #E0E0E0;
        --grey-0: #F5F5F5;

        /* feedback palete */
        --negative: #E60000;
        --warning: #FFCD07;
        --sucess: #168821;
        --information: #155BCB;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
    }

    button {
        cursor: pointer;
        border: none;
        background: transparent;
        color: #fff;
        background-color: var(--color-primary);
        font-weight: 600;
        padding: 1.15rem 2rem;
        border-radius: 8px;
        transition: all .3s;
    }

    ul, ol, li {
        list-style: none;
    }

    img {
        max-width: 300px;
        width: 100%;
    }

    input, select {
        background: transparent;
        border: none;
    }
`;

export default GlobalStyle;
