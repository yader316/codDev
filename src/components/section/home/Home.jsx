import React from 'react';
import { 
    Grid, 
    Typography,
    makeStyles,
    Button,
    Hidden,
    Box
} from '@material-ui/core';

import webCode from 'assets/img/fondoWeb.png';
import celesteWeb from 'assets/img/celesteWeb.png';
import verdeWeb from 'assets/img/verdeWeb.png';
import azulWeb from 'assets/img/azulWeb.png';
import rosadoWeb from 'assets/img/rosadoWeb.png';
import naranjaWeb from 'assets/img/naranjaWeb.png';





import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const useStyles = makeStyles(theme => ({
    imageWidth:{
        width: '100%',
    },
    columnReverse: {
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
            marginTop: '20px',
        },
    },
    paragraph:{
        padding:'16px 0',
        lineHeight: 1.5,
    },
}));

function Home(props) {

    const classes = useStyles();

    return (
        <Box className={props.content} id='home'>
            <Grid 
                container 
                spacing={2} 
                className={classes.columnReverse}
            >
                <Grid 
                    item 
                    xs={12} sm 
                    container 
                    alignItems='center'
                >
                    <Grid 
                        item xs  
                        direction="column" 
                        spacing={2}
                    >
                        <Grid item xs>
                            <Typography  variant="h3">
                                Larget SEO
                            </Typography>
                            <Typography variant="h3" >
                                Agency in America
                            </Typography>
                        </Grid>
                        <Grid 
                            item 
                            className={classes.paragraph}       
                        >
                            <Hidden smDown >
                                <Typography variant="p" color="textSecondary" >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Typography>
                            </Hidden>
                        </Grid>
                        <Grid 
                            item 
                        >
                            <Button 
                                size="large" 
                                variant="contained" 
                                color="primary"
                            >
                                Scan Now
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                   <Box
                        position='relative'
                   >
                        <Box 
                            position='absolute'
                            data-aos="fade-down"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top-center"
                        >
                            <img  
                                alt="fondo blanco" 
                                src={`${webCode}`}  
                                className={classes.imageWidth}
                            />
                            
                        </Box>
                        <Box 
                            position='absolute'
                            data-aos="fade-down"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top-center"    
                        >
                            <img 
                                alt="fondo celeste" 
                                src={`${celesteWeb}`}
                                className={classes.imageWidth}
                            />
                        </Box>
                        <Box 
                            position='absolute'
                            data-aos="fade-down"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="4000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top-center"
                        >
                            <img 
                                alt="fondo verde" 
                                src={`${verdeWeb}`}
                                className={classes.imageWidth}
                            />
                        </Box>
                        <Box 
                            position='absolute'
                            data-aos="fade-down"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="3000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top-center"
                        >
                            <img 
                                alt="fondo azul" 
                                src={`${azulWeb}`}
                                className={classes.imageWidth}
                            />
                        </Box>
                        <Box 
                            position='absolute'
                            data-aos="fade-down"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="3000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top-center"
                        >
                            <img 
                                alt="fondo rosado" 
                                src={`${rosadoWeb}`}
                                className={classes.imageWidth}
                            />
                        </Box>
                        <Box 
                            data-aos="fade-down"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="3000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top-center"
                        >
                            <img
                                alt="fondo naranjado" 
                                src={`${naranjaWeb}`}
                                className={classes.imageWidth}
                            />
                        </Box>
                   </Box>

                </Grid>
            </Grid>
        </Box>
    )
}

export default Home;
