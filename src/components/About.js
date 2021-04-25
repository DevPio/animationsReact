import React from 'react';
import home from '../img/home1.png';
import styled from 'styled-components';

import {motion} from 'framer-motion';
import {animateImage,fade} from '../animate';
import Wave from './Wave';
import {UseScroll} from '../Hooks/UseScroll';

const About = ()=> {

    const [element, controls] = UseScroll()

    const animateHide = {
        hidden: { y: 200 },
    show: {
        y: 0,
        transition: 
        { 
            duration: 0.75, 
            ease: "easeOut",
            when:'beforeChildren'
        
        },
  },

    }


    return (
     
           <AboutStyled variants={fade} initial="hidden"  animate={controls} ref={element}>
              <Container>
                <motion.div >
                    <div className="hide">
                        <motion.h2 variants={animateHide} initial="hidden" animate="show" >We word to make</motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h2  variants={animateHide} initial="hidden" animate="show" >your <span>dreams</span> come</motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h2  variants={animateHide} initial="hidden" animate="show">true.</motion.h2>
                    </div>
                   
                </motion.div>

                <p>Contact us for any photography</p>
                <button>Contact us</button>
              </Container>

               <Image>
                    <motion.img variants={animateImage} initial="hidden" animate="animate" src={home} alt="guy with a camera" />
               </Image>
                <Wave />
           
           </AboutStyled>
      
    )
}

const AboutStyled = styled(motion.div)`
    min-height:90vh;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:5rem 10rem;
    color:white;
`
const Container = styled.div`
    z-index:2;
    flex:1;
    

`

const Image = styled.div`
    z-index:2;
    flex:1;

    img{
        object-fit:cover;
    }

`

export default About;