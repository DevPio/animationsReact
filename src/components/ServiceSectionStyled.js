import styled from 'styled-components';

import {motion} from 'framer-motion';
export const Services = styled(motion.div)`
    
    display:flex;
    justify-content:space-between;
    padding:5rem 10rem;
    flex-direction:row-reverse;
    


`

export const Cards = styled.div`

    display:flex;
    justify-content:center;
    width:100%;
    min-height:600px;
    flex-wrap:wrap;
   
`

export const Card = styled.div`

    width:50%;
    height:30%;
    p{
        font-size:20px;
        font-weight:bold;
    }

`

export const Icon = styled.div`

    display:flex;
    align-items:center;
    
    h3{
        margin-left:1rem;
        background:white;
        padding:10px;
        font-family:Arial, Helvetica, sans-serif;
    }

`

export const Description = styled.div`

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    h2{
        color:white;
    }

`