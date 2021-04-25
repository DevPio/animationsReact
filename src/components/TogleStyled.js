import styled from 'styled-components';
import {motion} from 'framer-motion';

export const ToggleContainer = styled.div`


`
export const Container = styled(motion.div)`
    cursor: pointer;
    color:white;
    font-size:23px;
    min-height:100px;

    font-family: Arial, Helvetica, sans-serif;

`
export const ToggleStyled = styled.div`

    min-width:300px;
    height:${props=> props.height == 'true' ? '200px' : '0px'};
    border-bottom:3px solid white;
    margin-bottom:${props=> props.height ? '20px' : '0px'};
    

    h3{
        font-size:18px;
        font-family:Arial, Helvetica, sans-serif;

        
    }


`

export const TogglesCards = styled.div`
     padding:1rem 2rem;
 

     h2{
        color:white;
        margin-bottom:50px;
     }

     h2 span{
         display:block;
     }


`