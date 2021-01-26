import React from 'react';

import {
    Box,
    makeStyles,
    Typography,
} from '@material-ui/core';
// import slider para carrusel
import Slider from 'react-slick';
// Import css files slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//data technology
import Data from 'components/section/technology/dataTechnology.json';

import Cards from 'components/container/Cards';

import img1 from 'assets/img/vector-azul.png';
import img2 from 'assets/img/vector-naranja.png';


// variable para recorrer el json
const confiData = Data.items;


const useStyles = makeStyles(theme => ({
    linea: {
        borderBottom: '5px solid blue',
        borderRadius: '15%',
    },
    backgroundGris: {
        backgroundColor: '#f4f6fd',
        padding:'120px 0',
        position: 'relative',
        width: '100%',
    },
    picturs1:{
        position: 'absolute',
        right: '110px',
        top:0,
        [theme.breakpoints.down('sm')]: {
            width: '120px',
            right: 0,
            top:'-10px', 
        },
    },
    picturs2:{
        position: 'absolute',
        right: '30px',
        top:'120px',
        [theme.breakpoints.down('sm')]: {
            width: '90px',
            right: 0,
            top:'100px', 
        },
    }
}));



function Technology(props) {

    const classes = useStyles();

    // configuracion del carrusel
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ],
      };
    
    return (
        <div className={classes.backgroundGris} id="technology">
            <img 
                    alt="vecctor azul"
                    src={`${img1}`}
                    className={classes.picturs1}
            />
            <img 
                    alt="vecctor azul"
                    src={`${img2}`}
                    className={classes.picturs2}
            />
            <div className={props.content}>
                <Box mt={2} >
                    <Box display='flex' justifyContent='center'>
                        <Box className={classes.linea} width='20px' mr={2} ></Box>
                        <Box className={classes.linea} width='80px'></Box>
                        <Box className={classes.linea} width='20px' ml={2}></Box>
                    </Box>
                    <Box mt={3} pb={4} textAlign='center'>
                        <Box mb={2}>
                            <Typography variant='h3'>
                                Technology
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='p'>
                                We enjoy adapting our strategies to offer every client the best solutions that are at the forefront of the industry.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Slider {...settings}>
                        {confiData.map((item) => (
                                <Cards 
                                    title={item.title}
                                    image={item.image}
                                    description={item.description}
                                />
                        ))}
                    </Slider>
                </Box>
            </div>
        </div>

    )
}

export default Technology;
