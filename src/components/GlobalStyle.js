import {createGlobalStyle} from 'styled-components';

 const Global = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}


body{
    background:#1b1b1b;
}

button{
    font-weight:bold;
    font-size:1.1rem;
    cursor: pointer;
    padding:1rem 2rem;
    border:3px solid #23d997;
    background:transparent;
    color:white;
    transition:all 0.5s ease;
    max-width:10rem;
    max-height:4rem;
    text-align:center;
    

    &:hover{
        background-color: #23d997;
        color:white;
    }
}

h2{
    font-weight:lighter;
    font-size:4rem;
}

h2 span{
    font-weight:bold;
    color:#23d997;
}

p{
    padding:3rem 0rem;
    color:#ccc;
    
}
`




export default Global;