import styled from 'styled-components';

export const NavContainer = styled.nav`

    display:flex;
    justify-content:space-between;
    padding:2rem 10rem;
    background:#282828;

    #logo{
        font-size:1.5rem;
    }
    h1 a{
        text-decoration:none;
        color:white;
        font-family: 'Lobster', cursive;
    }

`


export const MyUl = styled.ul`

    display:flex;
    justify-content:space-around;
    min-width:30%;
    font-family:Arial, Helvetica, sans-serif;
  

    a{
        text-decoration:none;
        color:white;

    }
    li{
        list-style:none;
    }

`