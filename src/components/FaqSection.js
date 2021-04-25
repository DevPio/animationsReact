import React from 'react';
import Togle from './Togle';
import {TogglesCards} from './TogleStyled';
import {AnimateSharedLayout, motion} from 'framer-motion';

import {fade} from '../animate';

import {UseScroll} from '../Hooks/UseScroll';
const FaqSection = ()=> {

    const [element, constrols] = UseScroll();
    const frases = ['How do i start','What products do you offer?','diferrent payment methods','daily schedule']
    return (
        <>
            <motion.div className="faq" variants={fade} initial="hidden" animate={constrols}  ref={element}>
                <AnimateSharedLayout>
                    <TogglesCards>
                        <h2>Any questions <span>FAQ</span></h2>
                        {
                            frases.map(word=> (
                                <Togle title={word} key={word} >
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </Togle>
                            ))
                        }
                    </TogglesCards>
                </AnimateSharedLayout>
            </motion.div>

        </>
    )
}

export default FaqSection;