import React, {useEffect, useState} from 'react';
import MovieGalery from './ContactUs/Movies';
import {Link} from 'react-router-dom';


//styles
import styled from 'styled-components';
import {Container,Movie} from './ContactUs/components/StyledContactUs'
import {motion} from 'framer-motion';
//animation

import {animateAbout} from '../animate';

const Hide = styled.div`
    


`

const SliderContainer = styled(motion.div)`



`

const Frame1 = styled(motion.div)`
    position:fixed;
    left:0;
    top:10%;
    width:100%;
    height:100vh;
    background-color:#fffebf;
    z-index:2;

`

const Frame2 = styled(Frame1)`
    background-color:#ff8efb;


`

const Frame3 = styled(Frame1)`
    background-color:#8edfff;


`
const Frame4 = styled(Frame1)`
    background-color:#8effa0;


`

const ContactUs = ()=> {



    const [imagesGalery, setImagesGalery] = useState(MovieGalery())
    const lineAnimate = {
        hidden:{
            width:'0%'
        },
        animate:{
            width:'100%',
            transition:{
                duration:2
            }
        }
    }
     const animateImage = {
        hidden:{
            scale:2
        },
        animate:{
            scale:1,
            transition:{
                duration:1
            }
        }
    }

    const SliderContainerAnimation = {
        hidden:{
            opacity:1
        },
        animate:{
            opacity:0,
            transition:{
                duration:2
            }
        }
    }

    const animateSlider = {
        hidden:{
            x:'-130%',
            skew:'45deg'
        },
        show:{
            x:'100%',
            skew:'0deg',
        
        }
    }


   
   

    

   
    
    
    return (
       
            <Container variants={animateAbout} >
                <SliderContainer variants={SliderContainerAnimation} initial="hidden"  animate="show" >
                    <Frame1 variants={animateSlider}  initial="hidden" transition={{ duration: 1, ease:'easeOut', }}  animate="show"/>
                    <Frame2 variants={animateSlider} initial="hidden" transition={{ duration: 1.5, ease:'easeOut', }}  animate="show" />
                    <Frame3 variants={animateSlider}  initial="hidden" transition={{ duration: 2, ease:'easeOut', }} animate="show" />
                    <Frame4  variants={animateSlider} initial="hidden" transition={{ duration: 2.5, ease:'easeOut', }} animate="show" />
                </SliderContainer>
            {
                
                imagesGalery.map((item,index)=> { 
                    let items = []
                    if(index === 0){
                        items.push(
                            <Hide>
                                <h2>{item.title}</h2>
                                <motion.div 
                                    className="line"
                                    variants={lineAnimate} 
                                    initial="hidden"
                                    animate="animate"
                                 
                                 ></motion.div>
                                <Link to={item.url}>
                                    <motion.img 
                                    
                                    draggable="false" 
                                    variants={animateImage} 
                                    initial="hidden"
                                    animate="animate"
                                    src={item.mainImg} 
                                    alt={JSON.stringify(item.mainImg)} />
                                </Link>

                            </Hide>
                        
                        )
                    }else{
                        items.push(
                            <>
                            <h2>{item.title}</h2>
                            <div className="line"></div>
                            <Link to={item.url}>
                                <motion.img 
                            
                                src={item.mainImg} 
                                alt={JSON.stringify(item.mainImg)} />
                            </Link>

                            </>
                        )
                    }
                    return (
                    <Movie key={item.title + index}>
                        {items}
                    </Movie>
                )})
            }
          
            </Container>
   
    )
}

export default ContactUs;