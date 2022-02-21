import { createGlobalStyle } from "styled-components";
const Global = createGlobalStyle`
    /* @tailwind base; */
    /* @tailwind components; */
    /* @tailwind utilities; */
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
    ::after,
    ::before{
        content:'';
        position:absolute;
    }
    a{
        color:inherit;
        cursor:pointer;
        text-decoration:none;
    }
    button{
        cursor:pointer;
    }
    body{
        font-size:1.6rem;
    }
    html{
        font-size:62.5%;
    }
`
export default Global;