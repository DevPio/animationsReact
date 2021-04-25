import styled from 'styled-components';

import {motion} from 'framer-motion';





export const Container = styled(motion.div)`
    
    background:#fff;
    min-height:100vh;
    padding:5rem 10rem;
    display:flex;
    flex-direction:column;
    font-family:Arial, Helvetica, sans-serif;
    


`

export const Movie = styled.div`

    margin-top:0.5rem;
    .line{
        height:0.5rem;
        background:#cccccc;
        margin-bottom:3rem;
       
        
    }
    img{
        width:100%;
        height:70vh;
        object-fit:cover;
        
    }




`