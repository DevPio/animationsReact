import React, { useEffect } from  'react';

//import svg 

import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import {fade} from '../animate';

//styles
import {Services,Cards,Card,Icon,Description} from './ServiceSectionStyled';

//my hooks
import {UseScroll} from '../Hooks/UseScroll';

const ServicesSection = ()=> {
    
    const [element, controls] = UseScroll()

   


    return(
        <>
            <Services variants={fade} animate={controls} initial="hidden" ref={element}>
                <Description>
                <h2>High <span>quality</span> services</h2>
                    <Cards>
                        <Card>
                            <Icon>
                                <img src={clock} alt="icon" />
                                <h3>Efficient</h3>
                            </Icon>
                            <p>lorem ipsun dolor</p>
                        </Card>
                        <Card>
                            <Icon>
                                <img src={diaphragm} alt="icon" />
                                <h3>Efficient</h3>
                            </Icon>
                            <p>lorem ipsun dolor</p>
                        </Card>
                        <Card>
                            <Icon>
                                <img src={money} alt="icon" />
                                <h3>Efficient</h3>
                            </Icon>
                            <p>lorem ipsun dolor</p>
                        </Card>
                       
                        <Card>
                            <Icon>
                                <img src={teamwork} alt="icon" />
                                <h3>Efficient</h3>
                            </Icon>
                            <p>lorem ipsun dolor</p>
                        </Card>
                    </Cards>
                </Description>
                <div className="image">
                    <img src={home2} alt="camera" />
                </div>

            </Services>
        </>
    )
}



export default ServicesSection;