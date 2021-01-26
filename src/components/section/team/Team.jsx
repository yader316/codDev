import React from 'react';
import {
    Box, 
    Grid,
    makeStyles,
    Typography,
} from '@material-ui/core';
// import slider para carrusel
import Slider from 'react-slick';
// Import css files slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardTeam from 'components/container/CardTeam';

//data technology
import Data from 'components/section/team/dataTeam.json';

const dataConfig = Data.items;

const useStyles = makeStyles(theme => ({
    linea: {
        borderBottom: '5px solid blue',
        borderRadius: '15%',
    }, 
    contentCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
}));

function Team(props) {

    const classes = useStyles();

    // configuracion del carrusel
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };

    return (
        <Box 
            id="team"
            className={props.content} 
            mt={7} 
            mb={7}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} className={classes.contentCenter}>
                   <Box>
                        <Box display='flex' mb={4}>
                            <Box className={classes.linea} width='20px' mr={2} ></Box>
                            <Box className={classes.linea} width='80px'></Box>
                        </Box>
                        <Typography variant='h4' gutterBottom>
                            Team CodDev
                        </Typography>
                        <Box lineHeight='1.5'>
                            <Typography variant='p' color='textSecondary'>
                                Their results are the best proof that our methodologies work. But we’ve also received numerous awards and praise from the media and our peers.
                            </Typography>
                        </Box>
                   </Box>
                </Grid>
                <Grid item xs={12} md={8} >
                    <Box ml={2}>
                        <Slider {...settings}>
                            {dataConfig.map((item) => (
                                <CardTeam 
                                    name={item.name}
                                    specialty= {item.specialty}
                                    urlPhoto={item.urlPhoto}
                                    infoPersonal= {item.infoPersonal}
                                    btnUrl={item.btnUrl}
                                />
                            ))}
                        </Slider>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Team;
