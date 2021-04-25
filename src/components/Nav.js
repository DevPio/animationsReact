import React from 'react';

//import styles

import {NavContainer,MyUl} from './NavStyled';

//navigation

import {Link} from 'react-router-dom';

const Nav = ()=> {

    return(
        <NavContainer>
            <h1 id="logo"><Link to="/">Capture</Link></h1>

            <MyUl>
                <li><Link to="/work">More information</Link></li>
                <li><Link to="contact">Contact</Link></li>
                <li><Link to="#">About</Link></li>
            </MyUl>
        </NavContainer>
    )
}

export default Nav;