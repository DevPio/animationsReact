import React from 'react';
import styled from 'styled-components';
import {animateContact} from '../animate';
import {motion} from 'framer-motion';


const Wrapper = styled(motion.div)`

    height:120vh;
    width:100%;
    background:white;


`
const H1Custom = styled(motion.h1)`
    

    &:before{
        content:'o';
        width:100px;
        height:100px;
        background:black;
        border-radius:50%;
        margin-right:10px;
        
    }


`
const OurWork = () => {

    return (
        <Wrapper  >
            <H1Custom variants={animateContact} initial="hidden" animate="animate">Our Work</H1Custom>
        </Wrapper>
    )
}

export default OurWork;