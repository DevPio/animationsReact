import React,{useState} from 'react'
import {motion} from 'framer-motion';

//imports styles
import {Container,ToggleStyled} from './TogleStyled';


const Togle = ({children,title}) => {

    

    const [toggle,setToggle] = useState(false)

    return (
        <Container layout className="question" onClick={()=> setToggle(!toggle)}>
            <motion.h3 layout>{title}</motion.h3>

            <ToggleStyled height={toggle.toString()}   >
                {toggle ? children : <></>}
            </ToggleStyled>
        </Container>
    )
}


export default Togle;