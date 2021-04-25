import React, {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import MovieGalery from '../Movies';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Details = styled.div`
    height:120vh;


`
const HeadLine = styled.div`
   min-height:90vh;
   padding-top:10vh;
   color:white;
   position:relative;
    h2{
        position:absolute;
        top:10%;
        left:50%;
        transform:translate(-50%,-10%);
    }
    img{
        width:100%;
        object-fit:cover;
    }

`
const AwardStyle = styled.div`
    padding:5rem;
    color:white;

    .line{
        height:0.5rem;
        background:#23d997;
        margin-top:0.5rem;
        
        width:50%;

    }
    h3{
        font-size:2rem;
    }


`

const Awards = styled.div`
    display:flex;
    align-items:center;
    margin:5rem 10rem;
    justify-content:space-around;

`

const Award = ({title,description})=> {
    
    const animateLine = {
        initial:{
            width:0 + '%',
        },
        show:{
            width:50 + '%',
            transition:{
                duration:1
               
            }

        }
    }
    
    return(
        <AwardStyle>
            <h3>{title}</h3>
            <motion.div variants={animateLine} initial="initial" animate="show" className="line"></motion.div>
            <p>{description}</p>
        </AwardStyle>
    )

}

const SecondaryImage = styled.div`

    img{
        width:100%;
        height:100vh;
        object-fit:cover;
    }

`

const MovieDetail = ()=> {
    const path = useHistory();
    
    const [dataSpecific, setDataSpecific] = useState(null)
   
    
    useEffect(()=>{
        const currentMovie = MovieGalery().find(item=> item.url === path.location.pathname)
        setDataSpecific(currentMovie)
    },[])


    return dataSpecific && (
        
        <Details>
           <HeadLine >
               <h2>{dataSpecific.title}</h2>
                <motion.img 
                
                draggable={false} 
                src={dataSpecific.mainImg} 
                alt={JSON.stringify(dataSpecific.mainImg)} />
           </HeadLine>

           <Awards>
            {dataSpecific.awards.map(award=>
                (
                    <Award key={award.title+award.description} title={award.title} description={award.description} />
                ))}
           </Awards>

           <SecondaryImage>
               <img src={dataSpecific.secondaryImg} />
           </SecondaryImage>
        </Details>
    )
}


export default MovieDetail;