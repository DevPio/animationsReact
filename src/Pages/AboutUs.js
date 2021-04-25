import React from 'react';
import About from '../components/About';
import FaqSection from '../components/FaqSection';
import ServicesSection from '../components/ServicesSection';

//import animate
import {animateAbout} from '../animate';
import {motion} from 'framer-motion';


const AboutUs = () => {

    return (
        <motion.div variants={animateAbout} initial="hidden" animate="animateShow" >
        <About />
        <ServicesSection />
        <FaqSection />
        </motion.div>
    )
}

export default AboutUs;