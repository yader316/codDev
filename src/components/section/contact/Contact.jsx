import React from 'react';
import { 
    Box, 
    Divider, 
    makeStyles,
    Grid,
    Typography,
    List,
    ListItem, 
} from '@material-ui/core';

import backgroundImgContact from 'assets/img/imgContact.png';
import FormContact from 'components/container/FormContact';

const useStyles =makeStyles(theme => ({
    contentWrraper: {
        position:'relative',
        backgroundImage: `url(${backgroundImgContact})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        [theme.breakpoints.down('sm')]: {
            background: 'none',
        },
        marginBottom: '20px',
    },
    contactContent:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        marginBottom: '20px',
    },
    contentInfo: {
        marginLeft:'80px',
        [theme.breakpoints.down('sm')]: {
            margin: 0,
        },
    },
    picturContact: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginTop: '40px',
        },
        
    },
    columnReverse:{
        position:'relative',
        [theme.breakpoints.down('sm')]: {
            display:'flex',
            flexDirection: 'column-reverse',
        },
    },
    linea: {
        borderBottom: '5px solid blue',
        borderRadius: '15%',
    },
}));
 
function Contact(props) {
    
    const classes = useStyles();
    
    return (
       <Box 
            pt={5} 
            pb={4} 
            className={props.content}
            id="contacts"
        >
            <Box className={classes.contentWrraper} pb={5}>
                <Grid 
                    container   
                    spacing={2}
                >
                    <Grid 
                        item 
                        xs={12}
                        md={6}
                    >
                        <Box 
                            className={classes.columnReverse}
                        >
                            <img 
                                alt='imagen de contacto'
                                src={backgroundImgContact}
                                className={classes.picturContact}
                            /> 
                            <FormContact />
                        </Box> 
                    </Grid>
                    <Grid 
                        item 
                        xs={12}
                        md={6} 
                        className={classes.contactContent}
                    >
                        <Box className={classes.contentInfo}>
                            <Box display='flex' mb={2}>
                                <Box className={classes.linea} width='20px' mr={1} ></Box>
                                <Box className={classes.linea} width='60px'></Box>
                            </Box>
                            <Box>
                                <Typography variant='h5' gutterBottom>
                                    Be on the Top & Get More Traffic to Your Website
                                </Typography>
                                <Box mt={4}>
                                    <List>
                                        <ListItem>
                                            <Typography 
                                                variant='p' 
                                                color="textSecondary"
                                            >
                                                If Google can’t crawl your site, it’s not going to rank – but that doesn’t mean avoiding Javascript.
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <Typography 
                                                variant='p' 
                                                color="textSecondary"
                                            >
                                                If Google can’t crawl your site, it’s not going to rank – but that doesn’t mean avoiding Javascript.
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <Typography 
                                                variant='p' 
                                                color="textSecondary"
                                            >
                                                If Google can’t crawl your site, it’s not going to rank – but that doesn’t mean avoiding Javascript.
                                            </Typography>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box> 
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
       </Box>
    )
}

export default Contact;
